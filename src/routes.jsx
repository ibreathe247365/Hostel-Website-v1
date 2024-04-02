import { Home, Profile, Mess, SignIn, Events, SignUp } from "@/pages";
import {
  HomeIcon,
  UserCircleIcon,
  ArrowRightOnRectangleIcon,
  QrCodeIcon,
  CalendarIcon
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
    path: "/mess",
    element: <Mess />,
  },
  // {
  //   icon: ArrowRightOnRectangleIcon,
  //   name: "Sign In",
  //   path: "/sign-in",
  //   element: <SignIn />,
  // },
  {
    icon: CalendarIcon,
    name: "Events",
    path: "/events",
    element: <Events />,
  },
  // {
  //   icon: IconButton,
  //   name: "Jeep",
  //   path: "/sign-up",
  //   element: <SignUp />,
  // },
];

export default routes;
