import "../../src/index.sass"
import {FC} from "react";
import {usableCommands} from "../../src/utils/constants/usableCommands";

const AvailableCommands: FC = () => {
    return (
        <table>
            <tbody>
            {
                usableCommands.map((command, i) => (
                    <tr key={i}>
                        <td width={"160px"} className={"available-command"}>
                            {command.command}
                        </td>
                        <td>
                            {command.description}
                        </td>
                    </tr>
                ))
            }
            </tbody>
        </table>
    )
}

export default AvailableCommands
