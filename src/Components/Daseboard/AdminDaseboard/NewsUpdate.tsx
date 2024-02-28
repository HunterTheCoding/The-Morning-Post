import { useForm, SubmitHandler } from "react-hook-form";
import Swal from "sweetalert2";
import axios from "axios";
import useAxiosSecure from "../../../Hook/useAxiosSecure";
import { useLoaderData } from "react-router-dom";
import { useState } from "react";

const image_hosting_key = "b88027922b62974e868687dc6702a672";
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

type Inputs = {
  section: string;
  headline: string;
  source: string;
  date: string;
  title: string;
  writer: string;
  image: string;
  summary: string;
  news: string;
};

type NewsType = {
  _id?: string;
  section?: string;
  image?: string;

  headline?: string;
  source?: string;
  date?: string;
  title?: string;
  writer?: string;
  summary?: string;
  news?: string;
  // Add any other properties here as needed
};

const NewsUpdate = () => {
  const [defaultImagePreview, setDefaultImagePreview] = useState<string | null>(
    null
  );

  const News: NewsType = useLoaderData() || {};
  
  const defaultValues: Inputs = {
    section: News?.section || "",
    headline: News?.headline || "", // Provide default value for headline
    source: News?.source || "", // Provide default value for source
    date: News?.date || "", // Provide default value for date
    title: News?.title || "", // Provide default value for title
    writer: News?.writer || "", // Provide default value for writer
    image: News?.image || "", // No default value for image
    summary: News?.summary || "", // Provide default value for summary
    news: News?.news || "", // Provide default value for news
  };

  const axiosSecure = useAxiosSecure();

  const { register, handleSubmit } = useForm<Inputs>({
    defaultValues: defaultValues,
  });

  const onSubmit: SubmitHandler<Inputs> = async (data) => {

    const imageFile = { image: data.image[0] };

    const res = await axios.post(image_hosting_api, imageFile, {
      headers: {
        "Content-type": "multipart/form-data",
      },
    });
    if (res.data.success) {
      const news = {
        section: data.section,
        headline: data.headline,
        source: data.source,
        date: data.date,
        title: data.title,
        writer: data.writer,
        image: res.data.data.display_url,
        summary: data.summary,
        news: data.news,
      };
      Swal.fire({
        title: "Are you sure?",
        text: "You will not be able to undo this action.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, update it!",
      }).then((result) => {
        if (result.isConfirmed) {
          // User confirmed, perform the action
          axiosSecure.put(`/News/${News?._id}`, news).then((data) => {

            if (data?.data?.modifiedCount > 0) {
              
              Swal.fire({
                title: "upgrade Request  Successfully!",
                icon: "success",
                timer: 500, // Optional: Auto-close the modal after 2 seconds
                showConfirmButton: false,
              });
              // navigate('/dashboard/donationRequest')
            }
          });
        }
      });
    }
  };
  return (
    <div>
      <h1 className="text-center font-bold my-4 text-4xl ">Post News</h1>
      <div className="bg-gray-200 p-4 rounded-lg m-4">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="md:flex gap-6">
            {/* section */}
            <div className="form-control md:w-1/2 w-full my-6">
              <label className="label">
                <span className="label-text text-red-600 font-bold">
                  Section*
                </span>
              </label>

              <select
                defaultValue="default"
                {...register("section", { required: true })}
                required
                className="select select-bordered w-full mr-4"
              >
                <option disabled value="default">
                  Select a section
                </option>
                <option value="National">National</option>
                <option value="International">International</option>
                <option value="Politics">Politics</option>
                <option value="Business">Business</option>
                <option value="Education">Education</option>
                <option value="Food">Food</option>
                <option value="HotLight">HotLight</option>
                <option value="Health">Health</option>
                <option value="Science">Science</option>
                <option value="Technology">Technology</option>
                <option value="Feature">Feature</option>
                <option value="Sports">Sports</option>
                <option value="Music">Music</option>
                <option value="Environment">Environment</option>
                <option value="Travel">Travel</option>
                <option value="Gaming">Gaming</option>
                <option value="Fashion">Fashion</option>
                <option value="Automotive">Automotive</option>
                <option value="Literature">Literature</option>
                <option value="Entertainment">Entertainment</option>
                <option value="history">History</option>
                <option value="Literature">Literature</option>
              </select>
            </div>
            {/* headline */}
            <div className="form-control md:w-1/2 w-full my-6">
              <label className="label">
                <span className="label-text text-red-600 font-bold">
                  Headline*
                </span>
              </label>
              <input
                type="text"
                defaultValue={News?.headline}
                placeholder="Headline"
                {...register("headline", { required: true })}
                required
                className="input input-bordered w-full "
              />
            </div>
          </div>

          <div className="md:flex gap-6">
            {/* source */}
            <div className="form-control md:w-1/2 w-full my-6">
              <label className="label">
                <span className="label-text text-red-600 font-bold">
                  Source*
                </span>
              </label>
              <input
                type="text"
                defaultValue={News?.source}
                placeholder="Source"
                {...register("source", { required: true })}
                required
                className="input input-bordered w-full "
              />
            </div>
            {/* date */}
            <div className="form-control md:w-1/2 w-full my-6">
              <label className="label">
                <span className="label-text text-red-600 font-bold">Date*</span>
              </label>
              <input
                type="date"
                defaultValue={News?.date}
                placeholder="Date"
                {...register("date", { required: true })}
                required
                className="input input-bordered w-full "
              />
            </div>
          </div>

          <div className="md:flex gap-6">
            {/* title */}
            <div className="form-control w-full md:w-1/2 my-6">
              <label className="label">
                <span className="label-text text-red-600 font-bold">
                  Title*
                </span>
              </label>
              <input
                type="text"
                defaultValue={News?.title}
                placeholder="Title"
                {...register("title", { required: true })}
                required
                className="input input-bordered w-full "
              />
            </div>
            {/* writer */}
            <div className="form-control w-full md:w-1/2 my-6">
              <label className="label">
                <span className="label-text text-red-600 font-bold">
                  Writer*
                </span>
              </label>
              <input
                type="text"
                defaultValue={News?.writer}
                placeholder="Writer"
                {...register("writer", { required: true })}
                required
                className="input input-bordered w-full "
              />
            </div>
          </div>

          {/* summary */}
          <div className="form-control w-full my-6">
            <label className="label">
              <span className="label-text text-red-600 font-bold">
                Summary*
              </span>
            </label>
            <input
              type="text"
              defaultValue={News?.summary}
              placeholder="Summary"
              {...register("summary", { required: true })}
              required
              className="input input-bordered w-full "
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text text-red-600 font-bold">
                News Details*
              </span>
            </label>
            <textarea
              {...register("news", { required: true })}
              required
              className="textarea textarea-bordered h-24"
              placeholder="Recipe Details"
            ></textarea>
          </div>

          <div className="form-control w-full my-6">
            <input
              {...register("image", { required: true })}
              type="file"
              className="file-input my-4 w-full max-w-xs"
              onChange={(e) => {
                const file = e.target.files?.[0]; // Use optional chaining to handle null
                if (file) {
                  const reader = new FileReader();
                  reader.onloadend = () => {
                    // Set a default image preview
                    setDefaultImagePreview(reader.result as string);
                  };
                  reader.readAsDataURL(file);
                }
              }}
            />
            {defaultImagePreview && (
              <img
                src={defaultImagePreview}
                alt="Default Preview"
                className="mt-2"
              />
            )}
          </div>

          <div className="text-center">
            <button className="btn btn-primary">Post News</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewsUpdate;
