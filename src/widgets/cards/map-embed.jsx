import PropTypes from "prop-types";
import { Card, CardBody } from "@material-tailwind/react";
import { CardHeader } from "@material-tailwind/react";
import { Typography } from "@material-tailwind/react";


export function MapEmbed({width, height}) {
  return (
    <Card className='pt-10 shadow-lg shadow-gray-500/10'>

      <CardHeader className="relative max-h-fit max-w-fit">
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d876.1840998283751!2d77.18944509971809!3d28.547641882354075!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1dd7d78404af%3A0x51f81e40faeb00e4!2sUdaigiri%20Hostel!5e0!3m2!1sen!2sin!4v1702136907652!5m2!1sen!2sin"
            width={width}
            height={height}
            style={{border:"0"}}
            allowfullscreen=""
            loading="lazy"
        />
      </CardHeader>
      
      <CardBody className="rounded-lg">
        <Typography variant="h3">
          We are here!
        </Typography>
        <Typography className="font-normal text-blue-gray-600">
          
        </Typography>
      </CardBody> 

    </Card>
  );
}

MapEmbed.defaultProps = {
  width: "500",
  height: "400"
}

MapEmbed.displayName = "/src/widgets/layout/map-embed.jsx";

export default MapEmbed;
