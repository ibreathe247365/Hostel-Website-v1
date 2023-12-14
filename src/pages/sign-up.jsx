import { Link } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { SimpleFooter } from "@/widgets/layout";
import { MapEmbed } from "@/widgets/cards";

export function SignUp() {
  return (
    <>
      <div className="absolute inset-0 z-2 h-[10vh] w-full bg-black/80" />

      {/* <img
        src="/img/background-2.jpg"
        className="absolute inset-0 z-0 h-full w-full object-cover"
      /> */}
      {/* <div className="absolute inset-0 z-0 h-full w-full bg-black/20" /> */}
      <div className="container mx-auto p-40 z-0">
        <MapEmbed width="500" height="400" />

        {/* <Card className='items-center p-5 bg-blue-gray-600'>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d876.1840998283751!2d77.18944509971809!3d28.547641882354075!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1dd7d78404af%3A0x51f81e40faeb00e4!2sUdaigiri%20Hostel!5e0!3m2!1sen!2sin!4v1702136907652!5m2!1sen!2sin"
              width="500"
              height="400"
              style={{border:"0"}}
              allowfullscreen=""
              loading="lazy"
          ></iframe>
        </Card> */}
      </div>

      <div className="container absolute bottom-6 left-2/4 z-10 mx-auto -translate-x-2/4 text-white">
        <SimpleFooter />
      </div>
    </>
  );
}

export default SignUp;
