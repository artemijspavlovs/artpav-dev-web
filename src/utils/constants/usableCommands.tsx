export interface UsableCommand {
    command: string,
    description: string
}

export const usableCommands: UsableCommand[] = [
    {
        command: "help",
        description: "list available commands",
    },
    {
        command: "man artpav",
        description: "view artpavs' manpage"
    },
    {
        command: "whois artpav",
        description: "view short description about me"
    },
    {
        command: "contact",
        description: "list the possible ways to contact me"
    },
    {
        command: "visual",
        description: "switch to visual version of the page"
    },
    {
        command: "clear",
        description: "clear the screen",
    },
]
