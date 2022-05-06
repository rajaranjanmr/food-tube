import "../components/toast.css"
import {useState} from "react"
function Toast(props){
    const [displayLogIn, setDisplayLogIn] = useState("block");
    setTimeout(()=>setDisplayLogIn("none"),3000)
return(<div className="toast-main" style={{display:displayLogIn}}>
        <div className="toast-content">hi how {props.value} you</div>
    </div>)
}
export {Toast}