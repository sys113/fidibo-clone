"use client";

import { atomIsAviableScrollY } from "@/atoms/is-available-scroll-y";
import { useRecoilValue } from "recoil";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";
import IconMagnifier from "@/assets/icons/template/magnifier.svg";
import IconHome from "@/assets/icons/template/home.svg";
import IconHomeActive from "@/assets/icons/template/home-active.svg";

export default function Template({ children }: { children: React.ReactNode }) {
  // disable scroll position y in toggle atom state
  const atomStateisAvailableScrollY =
    useRecoilValue<boolean>(atomIsAviableScrollY);

  return (
    <>
      <SimpleBar
        className={`h-screen overflow-x-hidden ${
          !atomStateisAvailableScrollY && "overflow-y-hidden"
        }`}
      >
        <header className="bg-c-2 py-4">
          <div className="container">
            <IconMagnifier />
            <IconHome />
            <IconHomeActive />
          </div>
        </header>
        {children}
        <footer className="container">footer</footer>
      </SimpleBar>
    </>
  );
}
