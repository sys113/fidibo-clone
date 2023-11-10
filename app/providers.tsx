"use client";

import { SSRKilluaProvider } from "killua";
import { RecoilRoot } from "recoil";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <RecoilRoot>
        <SSRKilluaProvider>{children}</SSRKilluaProvider>
      </RecoilRoot>
    </>
  );
}
