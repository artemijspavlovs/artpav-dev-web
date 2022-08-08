import {FC} from "react";

const About: FC = () => {
    return (
        <div className={"width-half"}>
            <div className="tabbed">
                I'm Artemijs (pronounced without the 'j'), an SRE and a programmer. I've spent most of my life building
                scalable distributed systems, improving developer productivity through custom software and helping
                companies understand whether they need cloud, containers and other buzzwords.
            </div>
            <div className="tabbed">
                Technology wise, I know a thing or two about clouds (I've worked
                with <code>GCP</code> and <code>Azure</code> for some time now, as an Engineer, Architect and
                Consultant), containers and love to build applications with <code>Vue</code>
                , <code>React</code> and <code>Go</code>. I also use <code>Python</code>, mostly as a replacement to
                bash.
            </div>
            <div className="tabbed">
                Currently I am deepening my knowledge in <code>Go</code> and <code>Rust</code>, learning
                about <code>gRPC</code> and <code>GraphQL</code> and improving my storytelling skills.
            </div>
        </div>
    )
}

export default About
