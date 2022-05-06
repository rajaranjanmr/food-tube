import "../components/toast.css"
import {useState} from "react"
function Toast(props){
    const [displayLogIn, setDisplayLogIn] = useState("block");
    setTimeout(()=>setDisplayLogIn("none"),4000)
return(<div className="toast-main" style={{display:displayLogIn}}>
        <div className="toast-content">{props.value} </div>
    </div>)
}
export {Toast}