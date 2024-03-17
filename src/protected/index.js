import { useEffect } from "react"
import { useNavigate } from "react-router-dom";


function Protected({Component}){
    const navigate = useNavigate()
    useEffect(()=>{
        let login = localStorage.getItem('userDetail');
        if(!login){
            navigate('/auth');
        }
    },[])
    return(
        <>
            <Component/>
        </>
    )
}

export default Protected