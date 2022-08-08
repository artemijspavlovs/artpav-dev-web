import AvailableCommands from "./AvailableCommands";
import SocialMedia from "./SocialMedia";
import {FC} from "react";
import About from "./About";

const ManPage: FC = () => {
    return (
        <div className={"width-half"}>
            <div className={"header mt-1"}>
                Name
            </div>
            <div className={"tabbed"}>
                <span className={"info"}>artpav.dev</span> - a personal website
                of <a
                target={"_blank"}
                href={"https://www.linkedin.com/in/artemijspavlovs/"}
                rel={"noopener norefferer"}>Artemijs Pavlovs</a>
            </div>
            <div className={"header"}>
                About
            </div>
            <About/>
            <div className={"header"}>
                Social Media
            </div>
            <div className="tabbed">
                <SocialMedia/>
            </div>
            <div className={"header"}>
                Available Commands
            </div>
            <div className="tabbed">
                <AvailableCommands/>
            </div>
        </div>
    )
}

export default ManPage
