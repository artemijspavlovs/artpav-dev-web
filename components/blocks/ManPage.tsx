import AvailableCommands from "./AvailableCommands";
import SocialMedia from "./SocialMedia";
import {FC} from "react";

const ManPage: FC = () => {
    return (
        <div className={"width-half"}>
            <div className={"header"}>
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
            <div className="tabbed">
                Welcome, I'm Artemijs, an SRE and a programmer. I've spent most of my life creating scalable distributed
                systems, improving developer productivity through custom software.
            </div>
            <div className="tabbed">
                Technology wise, I know a thing or two about clouds (I've worked
                with <code>GCP</code> and <code>Azure</code> for some time now, as Engineer, Architect and Consultant)
                containers and can create software
            </div>
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
