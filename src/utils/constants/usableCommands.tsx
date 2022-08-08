export interface UsableCommand {
    command: string,
    description: string
}

export const usableCommands: UsableCommand[] = [
    {
        command: "man",
        description: "view artpavs' manpage"
    },
    {
        command: "help",
        description: "list available commands (good job!)",
    },
    {
        command: "whois",
        description: "view short description about me"
    },
    {
        command: "visual",
        description: "switch to visual version of the page"
    },
    {
        command: "contact",
        description: "list the possible ways to contact me"
    },

    {
        command: "clear",
        description: "clear the screen",
    },
]
