import AvailableCommands from "./blocks/AvailableCommands";
import PreviousCommand from "./PreviousCommand";
import {FC, useState} from "react";
import {useSetRecoilState} from "recoil";
import {commandHistory} from "../src/utils/state/recoil/commandAtoms";
import ManPage from "./blocks/ManPage";
import ErrorMessage from "./blocks/ErrorMessage";
import {usableCommands} from "../src/utils/constants/usableCommands";


const CLIInput: FC = () => {
    const [commandInputValue, setCommandInputValue] = useState<string>("")
    const [previousCommandExecuted, setPreviousCommandExecuted] = useState<boolean>(true)
    const setPreviousCommands = useSetRecoilState(commandHistory)
    
    const handleCommand = (command: string) => {
        switch (command) {
            case "help":
                setPreviousCommands((oldState) => [...oldState, <AvailableCommands/>])
                return;
            case "clear":
                setPreviousCommands([])
                return
            case "man":
                const element = <div className={"error"}>
                    <div>Not enough parameters. What manual page do you want?</div>
                    <div>The only supported manual page is <span className={"info"}>man artpav.dev'</span></div>
                </div>
                setPreviousCommands((oldState) => [...oldState, element])
                return;
            case "man artpav":
                setPreviousCommands((oldState) => [...oldState, <ManPage/>])
                return;
            default:
                setPreviousCommands((oldState) => [...oldState,
                    <ErrorMessage command={command}/>])
                return;
        }
    }

    function handleSubmit() {
        if (usableCommands.find(cmd => cmd.command === commandInputValue)) {
            setPreviousCommandExecuted(true)
            setPreviousCommands(
                (oldState) => [
                    ...oldState,
                    <PreviousCommand previousCommand={commandInputValue} wasSuccessful={true}/>
                ])
        } else {
            setPreviousCommandExecuted(false)
            setPreviousCommands(
                (oldState) => [
                    ...oldState,
                    <PreviousCommand previousCommand={commandInputValue} wasSuccessful={false}/>
                ])
        }

        handleCommand(commandInputValue)
        setCommandInputValue("")
    }

    return (
        <div className={"mt-1"}>
            <form className={"cli-flex cli-form-container"} onSubmit={(e) => {
                e.preventDefault()
                handleSubmit()
            }}>
                <label htmlFor={"command-input"} className={"cli-user-label"}>
                    awesome_person@artpav.dev <span className={previousCommandExecuted ? "success" : "error"}>❯</span>
                </label>
                <input
                    type={"text"}
                    id={"command-input"} className={"cli-command-input"}
                    onChange={(e) => {
                        setCommandInputValue(e.target.value)
                    }}
                    autoComplete={"off"} value={commandInputValue}
                />
            </form>
        </div>
    )
}

export default CLIInput
