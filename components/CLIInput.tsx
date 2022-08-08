import AvailableCommands from "./blocks/AvailableCommands";
import PreviousCommand from "./PreviousCommand";
import {FC, useState} from "react";
import {useSetRecoilState} from "recoil";
import {commandHistory} from "../src/utils/state/recoil/commandAtoms";
import ManPage from "./blocks/ManPage";
import ErrorMessage from "./blocks/ErrorMessage";
import {usableCommands} from "../src/utils/constants/usableCommands";
import SocialMedia from "./blocks/SocialMedia";
import About from "./blocks/About";
import {cliView} from "../src/utils/state/recoil/viewControl";


const CLIInput: FC = () => {
    const [commandInputValue, setCommandInputValue] = useState<string>("")
    const [previousCommandExecuted, setPreviousCommandExecuted] = useState<boolean>(true)
    const setPreviousCommands = useSetRecoilState(commandHistory)
    const setCliView = useSetRecoilState(cliView)

    const handleCommand = (command: string) => {
        switch (command) {
            case "help":
                setPreviousCommands((oldState) => [...oldState, <AvailableCommands/>])
                return;
            case "clear":
                setPreviousCommands([])
                return
            case "man":
                setPreviousCommands((oldState) => [...oldState, <ManPage/>])
                return;
            case "contact":
                setPreviousCommands((oldState) => [...oldState, <SocialMedia/>])
                return;
            case "whois":
                setPreviousCommands((oldState) => [...oldState, <About/>])
                return;
            case "visual":
                setCliView(false)
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
                    <div>
                        <span className={"username"}>awesome_person</span>@<span className={"domain"}>artpav.dev</span>
                        <span className={previousCommandExecuted ? "success" : "error"}> ❯</span>
                    </div>
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
