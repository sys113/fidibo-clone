"use client";

import { atomIsAviableScrollY } from "@/atoms/is-available-scroll-y";
import { useSetRecoilState } from "recoil";

export default function useToggleAtomState(key: any): {
  show: () => void;
  hide: () => void;
  toggle: () => void;
} {
  // atoms
  const setAtomStateKey = useSetRecoilState<boolean>(key);
  const setAtomStateAvilableScrollY =
    useSetRecoilState<boolean>(atomIsAviableScrollY);

  // atoms handler
  const setAtomsHandler = (type: "show" | "hide" | "toggle") => {
    switch (type) {
      case "show":
        setAtomStateKey(true);
        setAtomStateAvilableScrollY(true);
        break;
      case "hide":
        setAtomStateKey(false);
        setAtomStateAvilableScrollY(false);
        break;
      case "toggle":
        setAtomStateKey((prev) => !prev);
        setAtomStateAvilableScrollY((prev) => !prev);
        break;
      default:
        break;
    }
  };

  return {
    toggle: () => setAtomsHandler("toggle"),
    show: () => setAtomsHandler("show"),
    hide: () => setAtomsHandler("hide"),
  };
}
