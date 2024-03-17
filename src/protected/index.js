import { Navigate } from "react-router-dom";

function Protected({children}){
   
        if(!localStorage.getItem('userDetail')){
           return <Navigate to="/auth" replace />;;
        }
  
    return children
}

export default Protected