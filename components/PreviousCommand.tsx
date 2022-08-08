import {FC} from "react";

interface PreviousCommandProps {
    previousCommand: string,
    wasSuccessful: boolean,
}

const PreviousCommand: FC<PreviousCommandProps> = ({previousCommand, wasSuccessful}) => {
    return (
        <div className={"mt-1 mb-1"}>
            <span className={wasSuccessful ? "success" : "error"}>❯</span>
            <span style={{paddingTop: "3px", paddingLeft: "0.5rem"}}>
                {previousCommand}
            </span>
        </div>
    )
}

export default PreviousCommand
