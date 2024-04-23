import AlertSuccess from "./alertSuccess";
import AlertError from "./alertError";

export default function alert({children, severity}: {children: string, severity: string}) {
    return <>
        {severity === "success"?<AlertSuccess message={children} title="Sucesso!" />:""}
        {severity === "error"?<AlertError message={children} title="Ops... aconceu um erro!"/>:""}
    </>
}