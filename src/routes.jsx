import { Home, Profile, Mess, SignIn, Events, SignUp } from "@/pages";
import {
  HomeIcon,
  UserCircleIcon,
  QrCodeIcon,
  CalendarIcon,
  TrophyIcon
} from "@heroicons/react/24/solid";
import { IconButton } from "@material-tailwind/react";

export const routes = [
  {
    icon: HomeIcon,
    name: "home",
    path: "/home",
    element: <Home />,
  },
  // {
  //   icon: UserCircleIcon,
  //   name: "profile",
  //   path: "/profile",
  //   element: <Profile />,
  // },
  {
    icon: QrCodeIcon,
    name: "Mess Info",
    path: "https://docs.google.com/document/d/1uAtDoEZQYGfHNP7qXHqpgM6wmc8Cf2n-/edit?usp=sharing&ouid=106905100141558189475&rtpof=true&sd=true",
    element: <Mess />,
  },
  // {
  //   icon: ArrowRightOnRectangleIcon,
  //   name: "Sign In",
  //   path: "/sign-in",
  //   element: <SignIn />,
  // },
  {
    icon: TrophyIcon,
    name: "Internship Guide",
    path: "https://drive.google.com/file/d/11XgOrQgHoxWQoJyDO_0ge3nXB19bIb92/view?usp=sharing",
    element: <Home />,
  },
  {
    icon: UserCircleIcon,
    name: "Whatsapp groups",
    href: "/home#footer",
    element: <Home />,
  },
];

export default routes;
