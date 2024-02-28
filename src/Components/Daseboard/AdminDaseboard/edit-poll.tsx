import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import { CgSpinner } from 'react-icons/cg';

import { errorToast, successToast } from '../../utilities/toast';
import { useParams } from 'react-router-dom';
'../../../Hook/useAxiosPublic';
import uploadImage from '../../utilities/uploadImage';
import useAxiosSecure from '../../../Hook/useAxiosSecure';
import { AxiosError } from 'axios';
import Button from '../../ui/button';


interface Option {
  option: string;
  optionImage: string;
}

interface Poll {
  title: string;
  description: string;
  options: Option[];
}

interface EditPollPageProps {}

const EditPollPage: React.FC<EditPollPageProps> = () => {
  const { pollId } = useParams<{ pollId: string }>();

  const [optionInputFields, setOptionInputFields] = useState<(null | string)[]>([]);
  const [optionImages, setOptionImages] = useState<File[]>([]);
  const [existingOptionImages, setExistingOptionImages] = useState<string[]>([]);
  const [existingOptions, setExistingOptions] = useState<Option[]>([]);
  const [isPollSubmitting, setIsPollSubmitting] = useState<boolean>(false);

  const axiosSecure = useAxiosSecure()
  const {
   
    handleSubmit,
    reset,
  } = useForm();

  useEffect(() => {
    const fetchPoll = async () => {
      try {
        const { data } = await axiosSecure.get<Poll>(`/polls/${pollId}`);

        setOptionInputFields(data.options.map(() => null));
        setExistingOptions(data.options);
        setExistingOptionImages(data.options.map(option => option.optionImage));

        reset({
          title: data.title,
          description: data.description,
          options: data.options.map(option => option.option),
        });
      } catch (error) {
        console.error(error);
        errorToast('Something went wrong');
      }
    };

    fetchPoll();
  }, [axiosSecure, pollId, reset]);

  const onSubmit = async ({ title, description, options }: any) => {
    try {
      setIsPollSubmitting(true);

      const optionImageUrls = await Promise.all(
        optionImages.map(async (image) => await uploadImage(image))
      );

      const optionsArray = optionInputFields.map((_, index) => ({
        ...existingOptions[index],
        option: options[index],
        optionImage: optionImageUrls[index] || existingOptionImages[index],
      }));

      const updatedPoll: Poll = {
        title,
        description,
        options: optionsArray,
      };

      await AxiosError
      
      axiosSecure.put(`/polls/${pollId}`, updatedPoll);

      successToast('Poll updated');
      setOptionImages([]);
      setOptionInputFields([]);
      reset();
    }  finally {
      setIsPollSubmitting(false);
    }
  };

  const addNewOptionInputField = () => {
    setOptionInputFields(prevOptionInputFields => [
      ...prevOptionInputFields,
      null,
    ]);
  };


  return (
    <main className="container py-5 max-w-7xl">
      <h2 className="text-2xl font-bold text-center text-white md:text-3xl md:pb-8 font-secondary">
        Edit Poll
      </h2>
      <form
        className="px-1 mx-auto space-y-5 max-w-xl rounded-xl sm:p-8 sm:border border-primary-700 sm:shadow sm:bg-primary-900"
        onSubmit={handleSubmit(onSubmit)}
      >
        {/* Form fields */}
        <div className="flex gap-2 justify-end items-center pt-4">
          <Button onClick={addNewOptionInputField} variant="secondary">
            Add Input
          </Button>
          <Button disabled={isPollSubmitting} type="submit" variant="primary">
            {isPollSubmitting ? (
              <>
                <CgSpinner className="text-2xl animate-spin" />
                <span>Saving</span>
              </>
            ) : (
              <span>Save Changes</span>
            )}
          </Button>
        </div>
      </form>
    </main>
  );
};

export default EditPollPage;
