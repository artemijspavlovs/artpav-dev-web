import {FC} from "react";

interface ErrorMessageProps {
    command: string
}

const ErrorMessage: FC<ErrorMessageProps> = ({command}) => {
    return (
        <div className={"error mt-1"}>
            command not found: {command}.
            Use <span className={"info"}>'help'</span> command to view the list of available commands.
        </div>
    )
}

export default ErrorMessage
