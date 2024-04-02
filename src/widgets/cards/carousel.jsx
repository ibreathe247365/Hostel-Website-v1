import { Carousel, Typography, Button, CardHeader} from "@material-tailwind/react";
import { newsCarousel } from "@/data";
import { Card } from "@material-tailwind/react";

export function NewsCarousel({ data }) {
  return (
    // <div className="container mx-auto translate-y-5 p-40 items-center bg-blue-gray-200">
    //     <Typography
    //       variant="h3"
    //       color="white"
    //       className="flex justify-center">
    //     </Typography>

    //     <div className="max-w-[50%] mx-auto">
    //       <Carousel autoplay={0} className="rounded-lg overflow-x-hidden">
    //         {data.map((img,idx) =>
    //         <div className="">
    //           <img src={img.src} alt={img.key}
    //             className="object-none" key={idx}
    //           />
    //         </div>
    //         )}
    //       </Carousel>
    //     </div>
    //   </div>
    <>
      <Card className="p-10 object-fill mx-auto">
          <Typography variant="h3"
            className="font-bold -mt-4 mb-4">
              News
          </Typography>

          <Carousel autoplay={0} className="rounded-lg overflow-x-hidden bg-black">
            {data.map((img,idx) =>
            <div className="top-0 h-full w-full bg-[url('img/udai.jpg')] bg-cover bg-center">
              <img src={img.src} alt={img.alt} key={idx}
                // width={400} height={300} 
                className=""
              />
              <Typography variant="h5" className="">
                {img.caption}
              </Typography>

            </div>
            )}
          </Carousel>
      </Card>
    </>
  );
}

NewsCarousel.defaultProps = {
  data: newsCarousel
}

export default NewsCarousel;