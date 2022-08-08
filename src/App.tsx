import './App.css'
import {useEffect, useRef} from "react";
import {useSetRecoilState} from "recoil";
import {commandHistory} from "./utils/state/recoil/commandAtoms";
import CLIInput from "../components/CLIInput";
import {PreviousCommands} from "../components/PreviousCommands";


const disableClickHandler = (e: Event) => {
    if (!e.target?.toString().includes("a")) {
        e.stopPropagation()
        e.preventDefault()
    }
    document.getElementById("command-input")?.focus()
}

function App() {
    const setPreviousCommands = useSetRecoilState(commandHistory)
    const firstLoad = useRef(false)

    document.addEventListener("click", disableClickHandler, true)
    useEffect(() => {
        document.getElementById("command-input")?.focus()
    }, [])
    useEffect(() => {
        if (!firstLoad.current) {
            firstLoad.current = true
            return
        }
        const el = <div>Welcome, type <span className={"info"}>help</span> and hit <span
            className={"info"}>enter</span> to see a list of available
            commands.</div>
        setPreviousCommands((oldState) => [...oldState, el])
    }, [firstLoad])

    return (
        <>
            <PreviousCommands/>
            <CLIInput/>
        </>
    )
}

export default App
