import {useRecoilValue} from "recoil";
import {commandHistory} from "../src/utils/state/recoil/commandAtoms";
import {FC} from "react";

export const PreviousCommands: FC = () => {
    const previousCommands = useRecoilValue(commandHistory)
    return (
        <>
            {
                previousCommands.map((command, i) => {
                    return (
                        <div key={i} className={"flex"}>
                            {command}
                        </div>
                    )
                })
            }
        </>
    )
}
