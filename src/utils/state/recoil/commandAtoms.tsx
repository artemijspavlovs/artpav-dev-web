import {atom} from "recoil";
import {ReactNode} from "react";

export const commandHistory = atom({
    key: "commandHistory",
    default: [] as ReactNode[]
})
