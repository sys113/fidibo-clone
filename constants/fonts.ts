import LocalFont from "next/font/local";

const fontIransansx = LocalFont({
  src: [
    {
      path: '../assets/fonts/iran-sansx/regular-fanum.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../assets/fonts/iran-sansx/medium-fanum.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../assets/fonts/iran-sansx/bold-fanum.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../assets/fonts/iran-sansx/extrabold-fanum.woff2',
      weight: '800',
      style: 'normal',
    },
  ],
  style: "normal",
  display: "block",
});

export default fontIransansx;