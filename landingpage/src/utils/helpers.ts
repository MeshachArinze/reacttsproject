import { desktop, mobile } from "./data";

interface User {
  id: number;
  alink: string;
  img: string;
  role: "button" | "submit" | "reset";
  desktop: Array<Desktop>;
  mobile: Array<mobile>
}

interface Desktop {
  id: number;
  title: string;
  link: string
}

interface mobile {
    id: number;
    title: string;
    link: string;
}

export const defaultUser: User = {
  id: 1,
  alink: "Get Started",
  img: "img/logo.svg",
  role: "button",
  desktop: desktop,
  mobile: mobile,
};
