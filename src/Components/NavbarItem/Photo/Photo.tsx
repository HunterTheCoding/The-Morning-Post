import useAdmin from "../../../Hook/useNews";

const Photo = () => {
  const { newsData: photo, isLoading: photoLoading } = useAdmin("photo");
  //   const {_id, section, headline, source, date, summary, details, image,title,Writer} =Science;

  console.log(photo), photoLoading;
  return (
    <div>
      <section className="py-6 dark:bg-gray-800 dark:text-gray-50">
        <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
          {photo.slice(0, 8).map((item, index) => {
            console.log(item);

            return (
              <img
                className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
                src={item.image}
                alt=""
              />
            );
          })}
          {photo.slice(8, 9).map((item, index) => {
            console.log(item.image);

            return (
              <img
                src={item.image}
                alt=""
                className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square"
              />
            );
          })}

{photo.slice(9, 10).map((item, index) => {
            console.log(item.image);

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
		{photo.slice(11).map((item, index) => {
            console.log(item);

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




{/* <section className="py-6 dark:bg-gray-800 dark:text-gray-50">
	<div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
		<img src="https://source.unsplash.com/random/301x301/" alt="" className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square" />
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://source.unsplash.com/random/200x200/?0" />
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://source.unsplash.com/random/200x200/?1" />
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://source.unsplash.com/random/200x200/?2" />
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://source.unsplash.com/random/200x200/?3" />
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://source.unsplash.com/random/200x200/?4" />
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://source.unsplash.com/random/200x200/?5" />
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://source.unsplash.com/random/200x200/?6" />
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://source.unsplash.com/random/200x200/?7" />
		<img src="https://source.unsplash.com/random/302x302/" alt="" className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-1 md:row-start-3 dark:bg-gray-500 aspect-square" />
	</div>
</section> */}