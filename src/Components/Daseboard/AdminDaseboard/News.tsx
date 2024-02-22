import { useForm, SubmitHandler } from "react-hook-form";
import useAxiosPublic from "../../../Hook/useAxiosPublic";
import axios from "axios";
import Swal from "sweetalert2";

const image_hosting_key = 'b88027922b62974e868687dc6702a672';
const image_hosting_api =
    `https://api.imgbb.com/1/upload?key=${image_hosting_key}`


const News = () => {

    const axiosPublic = useAxiosPublic();

    const { register, handleSubmit, reset } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = async (data) =>{
        console.log(data);
        const imageFile = { image: data.image[0] }
        console.log(imageFile)
        const res = await axios.post(image_hosting_api, imageFile, {
            headers: {
                'Content-type': 'multipart/form-data'
            }
        })
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
                news: data.news
            }

            const newsRes = await axiosPublic.post('/News', news);
            console.log(newsRes);
            if (newsRes.data.insertedId) {
                reset();
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: `${data.headline} is added successfully`,
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        }
        console.log(res.data)
    }

    return (
        <div>
            <h1 className="text-center font-bold my-4 text-4xl ">Post News</h1>
            <div className="bg-gray-200 p-4 rounded-lg m-4">
                <form onSubmit={handleSubmit(onSubmit)}>
                    
                <div className="gap-6">
                        {/* section */}
                        <div className="form-control md:w-1/2 w-full my-6">
                            <label className="label">
                                <span className="label-text text-red-600 font-bold">Section*</span>

                            </label>

                            
                            <select defaultValue='default' {...register("section", { required: true })} required className="select select-bordered w-full mr-4">
                                <option disabled value='default'>Select a section</option>
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
                                <span className="label-text text-red-600 font-bold">Headline*</span>

                            </label>
                            <input type="text" placeholder="Headline" {...register('headline', { required: true })} required className="input input-bordered w-full " />

                        </div>

                </div>

                <div className="gap-6">

                        {/* source */}
                        <div className="form-control md:w-1/2 w-full my-6">
                            <label className="label">
                                <span className="label-text text-red-600 font-bold">Source*</span>

                            </label>
                            <input type="text" placeholder="Source" {...register('source', { required: true })} required className="input input-bordered w-full " />

                        </div>
                        {/* date */}
                        <div className="form-control md:w-1/2 w-full my-6">
                            <label className="label">
                                <span className="label-text text-red-600 font-bold">Date*</span>

                            </label>
                            <input type="date" placeholder="Date" {...register('date', { required: true })} required className="input input-bordered w-full " />

                        </div>

                </div>

                <div className="gap-6">

                        {/* title */}
                        <div className="form-control w-full md:w-1/2 my-6">
                            <label className="label">
                                <span className="label-text text-red-600 font-bold">Title*</span>

                            </label>
                            <input type="text" placeholder="Title" {...register('title', { required: true })} required className="input input-bordered w-full " />

                        </div>
                        
                        {/* writer */}
                        <div className="form-control w-full md:w-1/2 my-6">
                            <label className="label">
                                <span className="label-text text-red-600 font-bold">Writer*</span>

                            </label>
                            <input type="text" placeholder="Writer" {...register('writer', { required: true })} required className="input input-bordered w-full " />

                        </div>
                </div>

                {/* summary */}
                <div className="form-control w-full my-6">
                        <label className="label">
                            <span className="label-text text-red-600 font-bold">Summary*</span>

                        </label>
                        <input type="text" placeholder="Summary" {...register('summary', { required: true })}
                            required
                            className="input input-bordered w-full " />

                </div>

                {/* news details */}
                <div className="form-control">
                        <label className="label">
                            <span className="label-text text-red-600 font-bold">News Details*</span>

                        </label>
                        <textarea {...register('news', { required: true })} required className="textarea textarea-bordered h-24" placeholder="Recipe Details"></textarea>

                </div>

                {/* image */}
                <div className="form-control w-full my-6">
                        <input {...register('image', { required: true })} required type="file" className="file-input my-4 w-full max-w-xs" />
                </div>
                
                <div className="text-center">
                        <button className="btn btn-primary">
                            Post News
                        </button>
                </div>
                </form>
            </div>
        </div>
    );
};

export default News;