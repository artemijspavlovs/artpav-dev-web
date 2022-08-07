import './App.css'
import {useEffect} from "react";
import CLIInput from "../components/CLIInput";
import {PreviousCommand} from "../components/PreviousCommands";

const disableClickHandler = (e: Event) => {
    if (!e.target?.toString().includes("a")) {
        e.stopPropagation()
        e.preventDefault()
    }
    document.getElementById("command-input")?.focus()
}

function App() {
    document.addEventListener("click", disableClickHandler, true)
    useEffect(() => {
        document.getElementById("command-input")?.focus()
    }, [])

    return (
        <>
            <PreviousCommand/>
            <CLIInput/>
        </>
    )
}

export default App
