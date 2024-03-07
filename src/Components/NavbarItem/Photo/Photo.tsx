import useAdmin from "../../../Hook/useNews";
const Photo = () => {
  const { newsData: photo } = useAdmin("photo");
  return (
    <div>
      <section className="mb-5  dark:bg-gray-800 dark:text-gray-50">
        <div>
          {" "}
          <h1 className=" text-xl lg:text-2xl font-bold p-5">Photo Galary</h1>
        </div>
        <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
          {photo.slice(0, 8).map((item) => {
            return (
              <img
                className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
                src={item.image}
                alt=""
              />
            );
          })}
          {photo.slice(8, 9).map((item) => {
            return (
              <img
                src={item.image}
                alt=""
                className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square"
              />
            );
          })}
          {photo.slice(9, 10).map((item) => {
            return (
              <img
                src={item.image}
                alt=""
                className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-1 md:row-start-3 dark:bg-gray-500 aspect-square"
              />
            );
          })}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4 mx-auto">
          {photo.slice(11).map((item) => {
            return (
              <img
                className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
                src={item.image}
                alt=""
              />
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Photo;
