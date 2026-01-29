import { use } from "react";
import { AuthContext } from "../provider/AuthContext";
import { Link, useLocation } from "react-router";


const MyProfile = () => {
    const {user, loading} = use(AuthContext);
    const location = useLocation();
    console.log(location);
    
    console.log(user);

    if(loading){
         return <p>Loading..</p>
       
    }
    
  return (
   <>
   {user?  <div className="border min-h-screen py-3 flex items-center justify-center">
        <div>
            <h2>Name: {user.displayName}</h2>
            <p>Email: {user.email}</p>
            <div><img src={user.photoURL} alt="User-Photo" /></div>
        </div>
        
    </div> : <p className="font-semibold text-2xl min-h-screen flex items-center justify-center">Please &nbsp; <Link state={location.pathname} to="/auth/login" className="text-blue-500 hover:underline">Login</Link> &nbsp; First!</p> }
   </>
  )
}

export default MyProfile; 