import { useAuth } from "../context/auth-context";
import "../pages/Cart.css";
import {useEffect} from "react"
 function Logout() {
  const { isLoggedIn, setLogIn } = useAuth();
  //  function logoutForm(){
  //    localStorage.removeItem("token");
  //    console.log(localStorage.getItem("token"),"its logout")
  //  }
   useEffect(()=>{
    localStorage.removeItem("token");
    console.log(localStorage.getItem("token"),"its logout")
    setLogIn(false)

   },[])
  //  logoutForm();
  return (
    <div className="header-cart">
      <h1>************ You are Logged Out ************</h1>
    </div>
  );
}
export {Logout}