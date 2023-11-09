"use client";

import { atomIsShowModalTest } from "@/atoms/is-show-modal-test";
import useToggleAtomState from "@/hooks/toggle-atom-state";
import { useRecoilValue } from "recoil";

export default function Home() {
  const atomStateIsAviableScrollY = useRecoilValue(atomIsShowModalTest);
  const { show, hide, toggle } = useToggleAtomState(atomIsShowModalTest);
  return (
    <main className="space-y-4 p-4">
      <button onClick={() => show()}>show</button>
      <br />
      <button onClick={() => hide()}>hide</button>
      <br />
      <button onClick={() => toggle()}>toggle</button>
      <br />
      <br />
      {String(atomStateIsAviableScrollY ? "is-show" : "is-hide")}
      <br />
      <p className="text-c-ctx-3 z-skin-toast border border-red-200 p-10 leading-4">
        color
      </p>
      <p className="text-c-ctx-3 z-skin-toast border border-red-200 p-10 leading-4">
        color
      </p>
      <p className="text-c-ctx-3 z-skin-toast border border-red-200 p-10 leading-4">
        color
      </p>
      <p className="text-c-ctx-3 z-skin-toast border border-red-200 p-10 leading-4">
        color
      </p>
      <p className="text-c-ctx-3 z-skin-toast border border-red-200 p-10 leading-4">
        color
      </p>
      <p className="text-c-ctx-3 z-skin-toast border border-red-200 p-10 leading-4">
        color
      </p>{" "}
      <p className="text-c-ctx-3 z-skin-toast border border-red-200 p-10 leading-4">
        color
      </p>
      <p className="text-c-ctx-3 z-skin-toast border border-red-200 p-10 leading-4">
        color
      </p>
      <p className="text-c-ctx-3 z-skin-toast border border-red-200 p-10 leading-4">
        color
      </p>{" "}
      <p className="text-c-ctx-3 z-skin-toast border border-red-200 p-10 leading-4">
        color
      </p>
      <p className="text-c-ctx-3 z-skin-toast border border-red-200 p-10 leading-4">
        color
      </p>
      <p className="text-c-ctx-3 z-skin-toast border border-red-200 p-10 leading-4">
        color
      </p>{" "}
      <p className="text-c-ctx-3 z-skin-toast border border-red-200 p-10 leading-4">
        color
      </p>
      <p className="text-c-ctx-3 z-skin-toast border border-red-200 p-10 leading-4">
        color
      </p>
      <p className="text-c-ctx-3 z-skin-toast border border-red-200 p-10 leading-4">
        color
      </p>{" "}
      <p className="text-c-ctx-3 z-skin-toast border border-red-200 p-10 leading-4">
        color
      </p>
      <p className="text-c-ctx-3 z-skin-toast border border-red-200 p-10 leading-4">
        color
      </p>
      <p className="text-c-ctx-3 z-skin-toast border border-red-200 p-10 leading-4">
        color
      </p>{" "}
      <p className="text-c-ctx-3 z-skin-toast border border-red-200 p-10 leading-4">
        color
      </p>
      <p className="text-c-ctx-3 z-skin-toast border border-red-200 p-10 leading-4">
        color
      </p>
      <p className="text-c-ctx-3 z-skin-toast border border-red-200 p-10 leading-4">
        color
      </p>{" "}
      <p className="text-c-ctx-3 z-skin-toast border border-red-200 p-10 leading-4">
        color
      </p>
      <p className="text-c-ctx-3 z-skin-toast border border-red-200 p-10 leading-4">
        color
      </p>
      <p className="text-c-ctx-3 z-skin-toast border border-red-200 p-10 leading-4">
        color
      </p>
    </main>
  );
}
