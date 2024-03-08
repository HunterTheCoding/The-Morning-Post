import { FaBookmark } from "react-icons/fa";
import { Link, useNavigate, useParams } from "react-router-dom";
import satelite from "../../../assets/091413_bangladesh_pratidin_Satellite.jpg";
import useAxiosPublic from "../../../Hook/useAxiosPublic";
import Swal from "sweetalert2";
import useSingleNews from "../../../Hook/useSingleNews";
import Context from "../../../Hook/useContext";
import TranslateText from "../../TranslateText/TranslateText";
interface NewsInfo {
  newsid: string | undefined;
  useremail: string | undefined;
}
const NewsDetails: React.FC = () => {
  const navigate = useNavigate();
  const { user } = Context();
  const { id } = useParams();
  const { news } = useSingleNews(id);
  const axoius = useAxiosPublic();
  const booksmarksnews = () => {
    const newsinfo: NewsInfo = {
      newsid: id,
      useremail: user?.email || "", // user?.email might be undefined, which is allowed by the interface
    };
    console.log(newsinfo);
    if (user) {
      axoius
        .post("/bookmarks", newsinfo)
        .then((res) => {
          console.log(res.data);
          if (res.data.acknowledged) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Your news has been saved",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      navigate("/login");
    }
  };
  const handlereview = (event:any) => {
    event.preventDefault();
    const form = event.target;
    const text = form.text.value;
    console.log(text);
    const review = {
      text,
      name:user?.displayName || "Customar",
      roll:"User"
    }
    axoius.post('/review',review)
    .then((res)=>{
      console.log(res.data)
    }).then(error=>{
      console.log(error)
    });
  };
  return (
    <div className="md:px-6 my-5">
      <div className="flex justify-between bg-gray-200 p-4">
        <h2 className="text-3xl font-bold ">News Details</h2>
        <Link to="/">
          <button className="bg-red-500 text-white font-bold p-2 rounded-md">
            Back to Home
          </button>
        </Link>
      </div>
      <div className="grid md:grid-cols-6 grid-cols-1 gap-4 mt-4">
        <div className="col-span-4 ">
          <div className="text-center mb-4 bg-base-200 relative rounded-md">
            <img src={news?.image} className="w-full md:h-[400px]" alt="" />
            <h2 className="font-bold text-start text-2xl p-2">
              {news?.headline}
            </h2>
            <div className="absolute bottom-2 right-2">
              <button onClick={booksmarksnews} className="text-xs">
                <FaBookmark className="text-2xl hover:text-green-500 "></FaBookmark>
              </button>
            </div>
          </div>
          <div className="p-5">
            <h2 className="text-2xl font-bold my-4">
              Stuff Correspondent || New York || USA.
            </h2>
            <p className="text-lg font-medium">{news?.summary}</p>
            <TranslateText></TranslateText>
            <div>
              <div>
                <h1 className="text-2xl font-blod py-5">Review</h1>
              </div>
              <div>
                <form onSubmit={handlereview}>
                  <textarea
                    className="textarea textarea-bordered w-full h-[100px] md:h-[200px]"
                    placeholder="write review" name="text"
                  ></textarea>
                  <input type="submit" value="Submit"  
                    className="bg-blue-200 px-4 py-2 rounded-md text-lg mt-2 hover:bg-blue-400 " />
                </form>
              </div>
            </div>
          </div>
        </div> 
        <div className="col-span-2">
          <div className="ml-10 md:ml-0 bg-gray-200 p-4">
            <h2 className="text-3xl font-bold ">Latest News</h2>
            <div className="flex mt-4">
              <img src={satelite} className="lg:w-1/3 w-1/2 h-[100px]" alt="" />
              <div className="lg:w-2/3 w-1/2 h-[100px] bg-gray-200 relative">
                <h2 className="font-bold text-sm  lg:text-base p-2">
                  Iran sent new satelite in space.{" "}
                </h2>
                <div className="absolute bottom-2 right-2">
                  <button onClick={booksmarksnews} className="text-xs">
                    <FaBookmark></FaBookmark>
                  </button>
                </div>
              </div>
            </div>
          
          
          
          </div>
       
        </div>
      </div>
    </div>
  );
};

export default NewsDetails;