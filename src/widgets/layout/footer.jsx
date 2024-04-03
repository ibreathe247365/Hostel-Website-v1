import PropTypes from "prop-types";
import { Typography, IconButton } from "@material-tailwind/react";

const year = new Date().getFullYear();

export function Footer({ title, description, socials, menus, copyright }) {
  return (
    <footer className="relative px-4 pt-8 pb-6">
      <div className="container mx-auto">
        <div className="flex flex-wrap pt-6 text-center lg:text-left">
          <div className="w-full px-4 lg:w-6/12">
            <Typography variant="h4" className="mb-4" color="blue-gray">
              {title}
            </Typography>
            <Typography className="font-normal text-blue-gray-500">
              {description}
            </Typography>
            <div className="mx-auto mt-6 mb-8 flex justify-center gap-2 md:mb-0 lg:justify-start">
              {socials.map(({ color, name, path }) => (
                <a
                  key={name}
                  href={path}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconButton color="white" className="rounded-full">
                    <Typography color={color}>
                      <i className={`fa-brands fa-${name}`} />
                    </Typography>
                  </IconButton>
                </a>
              ))}
            </div>
          </div>
          <div className="mx-auto mt-12 grid w-max grid-cols-2 gap-24 lg:mt-0">
            {menus.map(({ name, items }) => (
              <div key={name}>
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="mb-2 block font-medium uppercase"
                >
                  {name}
                </Typography>
                <ul className="mt-3">
                  {items.map((item) => (
                    <li key={item.name}>
                      <Typography
                        as="a"
                        href={item.path}
                        target="_blank"
                        rel="noreferrer"
                        variant="small"
                        className="mb-2 block font-normal text-blue-gray-500 hover:text-blue-gray-700"
                      >
                        {item.name}
                      </Typography>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <hr className="my-6 border-gray-300" />
        <div className="flex flex-wrap items-center justify-center md:justify-between">
          <div className="mx-auto w-full px-4 text-center">
            <Typography
              variant="small"
              className="font-normal text-blue-gray-500"
            >
              {copyright}
            </Typography>
          </div>
        </div>
      </div>
    </footer>
  );
}

Footer.defaultProps = {
  title: "Udaigiri House",
  description:
    "Official website for hostel residents. Find official whatsapp group links for hostel resources in this section.",
  socials: [
    {
      color: "blue",
      name: "facebook",
      path: "https://www.facebook.com",
    },
    {
      color: "light-blue",
      name: "twitter",
      path: "https://www.twitter.com",
    },
    {
      color: "purple",
      name: "instagram",
      path: "https://www.instagram.com/",
    },
    {
      color: "red",
      name: "youtube",
      path: "https://home.iitd.ac.in/",
    },
    // {
    //   color: "black",
    //   name: "github",
    //   path: "https://home.iitd.ac.in/",
    // },
  ],
  menus: [
    {
      name: "useful whatsapp links",
      items: [
        { name: "Udai Mess Info", path: "https://chat.whatsapp.com/CIShcULnpvXC5SS6Suq0YO" },
        { name: "New PG 2022 ( newly joined hostel)", path: "https://chat.whatsapp.com/LqQOfKQZNiaChHuKMDY2uC" },
        { name: "Dance", path: "https://chat.whatsapp.com/KJNf8MXc9dmCfQAvPyxRf9" },
        { name: "Debsoc", path: "https://chat.whatsapp.com/FusNZPwqiOYEhXgPYG2nQS" },
        { name: "Drama", path: "https://chat.whatsapp.com/HMuFp8MxIsv7ugw6Hv27tv" },
        { name: "Spic Macay", path: "https://chat.whatsapp.com/IXwL98nAQiAD67XdYPLbO7" }
      ]
    },
    {
      name: "other whatsapp links",
      items: [
        { name: "PFC", path: "https://chat.whatsapp.com/BAyP8qVep8TDcqMiEAhwyd" },
        { name: "Facc", path: "https://chat.whatsapp.com/FIVs7Si2X2QIBkHnFhuUtj" },
        { name: "Design", path: "https://chat.whatsapp.com/CobMTavPwEvB8Y3ipn4NgC" },
        { name: "QC", path: "https://chat.whatsapp.com/G9Q8x4HXEeGBkyP5LrNIRr" },
        { name: "HS", path: "https://chat.whatsapp.com/Cbm7POaNF2M5DUuG5MaF5e" },
        { name: "Lit", path: "https://chat.whatsapp.com/Bk1I9DYZSNtC18UChQ29Zw" }
      ],
    },
  ],
  copyright: (
    <>
      Udaigiri Technical Team © {year}{" "} |
      <a
        href="https://www.creative-tim.com?ref=mtk"
        target="_blank"
        className="text-blue-gray-500 transition-colors hover:text-blue-500"
      >
      </a>
      | Maintained by Samir Sharma, Aniruddha Chatterjee, Mridul Bansal
    </>
  ),
};

Footer.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  socials: PropTypes.arrayOf(PropTypes.object),
  menus: PropTypes.arrayOf(PropTypes.object),
  copyright: PropTypes.node,
};

Footer.displayName = "/src/widgets/layout/footer.jsx";

export default Footer;
