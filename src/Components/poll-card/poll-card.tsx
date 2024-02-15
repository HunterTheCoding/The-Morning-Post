import { RadioGroup } from "@headlessui/react";
import { useEffect, useState } from "react";
import { CgSpinner } from "react-icons/cg";
import PollOption from "./poll-option";
import { successToast, errorToast } from "../utilities/toast";
import Context from "../../Hook/useContext";
import { AxiosError } from "axios";
import CountdownTimer from "./countdown-timer";
import Button from "../ui/button";
import { axiosSecure } from "../../Hook/useAxiosSecure";
import PollMenu from "./pole-menu";
import ResultChart from "../Chart/result-chart";

interface Option {
  _id: string;
  option: string;
  votes: string[];
}

interface PollCardProps {
  _id: string;
  options: Option[];
  title: string;
  description: string;
  expiresAt: string;
  isActive: boolean;
}

interface ErrorResponse {
  message: string;

}

const PollCard: React.FC<PollCardProps> = ({
  _id,
  options,
  title,
  description,
  expiresAt,
  isActive,
}) => {
  const { user } = Context();
  const [selectedOption, setSelectedOption] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [voteSubmitted, setVoteSubmitted] = useState<boolean>(false); // Track whether vote has been submitted
  const [toastShown, setToastShown] = useState<boolean>(false); // Track whether toast has been shown for expiration

  useEffect(() => {
    const prevVotedOption = options.find((option) =>
      option.votes.includes(user?.uid || "")
    )?._id;

    setSelectedOption(prevVotedOption || "");
    setVoteSubmitted(!!prevVotedOption);
  }, [options, user]);

  const handleSubmit = async () => {
    try {
      setIsSubmitting(true);

      if (!selectedOption) {
        return errorToast("No option selected");
      }

      if (!user) {
        return errorToast("Something went wrong");
      }

      await axiosSecure.patch(`/updatePoll/${ _id }`, {
        userId: user.uid,
        options: selectedOption,
      });

      successToast("Vote submitted");
      setVoteSubmitted(true);
    } catch (error) {
      console.error(error);
      const axiosError = error as AxiosError<ErrorResponse>;
      const errorMessage = axiosError.response?.data?.message || "Something went wrong";
      errorToast(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handlePollActiveToggle = async (pollId: string) => {
    try {
      if (!isActive || toastShown) {

        return;
      }
      await axiosSecure.patch(`/polls/toggle/${ pollId }`, { isActive: false });
      setToastShown(true);

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="p-4 mx-auto space-y-2 w-full rounded-lg border shadow border-primary-700 sm:p-6 bg-primary-900">
      {voteSubmitted ? (
        <ResultChart pollId={_id} />
      ) : (
        <>
          <div className="flex gap-2 justify-between items-start">
            <h3 className="text-lg font-bold text-white sm:text-xl md:text-2xl">
              {title}
            </h3>
            <PollMenu pollId={_id} isActive={isActive} />
          </div>
          <p className="pb-3 whitespace-normal break-all">{description}</p>
          <RadioGroup
            disabled={!isActive || voteSubmitted}
            value={selectedOption}
            onChange={setSelectedOption}
            className="space-y-3"
          >
            {options?.map((option) => (
              <PollOption
                optionImage={undefined}
                key={option._id}
                {...option}
              />
            ))}
          </RadioGroup>
          <div className="flex flex-col gap-3 justify-between pt-5 sm:items-center sm:flex-row">
            <CountdownTimer
              expiresAt={expiresAt}
              onExpire={() => handlePollActiveToggle(_id)}
              isActive={isActive}
            />
            <div className="flex gap-2 justify-end items-center">
              {isActive ? (
                <Button
                  variant="primary"
                  disabled={isSubmitting || voteSubmitted}
                  onClick={handleSubmit}
                >
                  {isSubmitting ? (
                    <>
                      <CgSpinner className="text-xl animate-spin" />
                      <span>Submitting</span>
                    </>
                  ) : (
                    <>
                      <span>Submit</span>
                      <span className="hidden sm:inline-block">Vote</span>
                    </>
                  )}
                </Button>
              ) : null}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default PollCard;
