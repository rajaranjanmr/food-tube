import { useAuth } from "../context/auth-context";
import "../pages/Cart.css";
import {useEffect} from "react"
import { Toast } from "../components/Toast";
 function Logout() {
  const { setLogIn } = useAuth();

   useEffect(()=>{
    localStorage.removeItem("token");
    console.log(localStorage.getItem("token"),"its logout")
    setLogIn(false)

   },[])
  return (
    <div className="header-cart">
      <h1>************ You are Logged Out ************</h1>
      {!(localStorage.getItem("token")) && <Toast value="logged out !" />}
    </div>
  );
}
export {Logout}