interface navData {
  id: number;
  name: string;
  ref: string;
}

export const navdata: navData[] = [
    {
        id: 1,
        name: "home",
        ref: "/",
    },
    {
        id: 2,
        name: "Services",
        ref: "/services/*",
    },
    {
        id: 3,
        name: "Work",
        ref: "/work/*",
    },
    {
        id: 4,
        name: "Contact",
        ref: "/contact/*",
    },
];

export const navIcon = [
  {
    id: 1,
    to: "https://facebook.com",
    src: "/images/facebook.png",
  },
  {
    id: 2,
    to: "https://twitter.com",
    src: "/images/twitter.png",
  },
  {
    id: 3,
    to: "https://instagram.com",
    src: "/images/instagram.png",
  },
];


