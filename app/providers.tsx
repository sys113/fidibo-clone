"use client";

import { SSRKilluaProvider } from "killua";
import { RecoilRoot, useRecoilValue } from "recoil";
import SimpleBar from "simplebar-react";
import "@/styles/global.css";
import "normalize.css/normalize.css";
import "simplebar-react/dist/simplebar.min.css";
import { atomIsAviableScrollY } from "@/atoms/is-available-scroll-y";

function SimpleBarWrapper({ children }: { children: React.ReactNode }) {
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
        {children}
      </SimpleBar>
    </>
  );
}

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <RecoilRoot>
        <SSRKilluaProvider>
          <SimpleBarWrapper>{children}</SimpleBarWrapper>
        </SSRKilluaProvider>
      </RecoilRoot>
    </>
  );
}
