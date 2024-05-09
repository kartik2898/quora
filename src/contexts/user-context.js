import { createContext, useState, useEffect} from "react";
import postService from "../service/PostService";

export const UserContext = createContext();
export const ProductFeeds = createContext();

function UserContextProvider({children}){
    const getUserDetail = () => {
       return localStorage.getItem('userDetail') ? JSON.parse(localStorage.getItem('userDetail')) :  null
    }
    const [userDetail, setUserDetail] = useState(getUserDetail());
    const [page,setPage] = useState(0);
    const [feeds,setFeeds] = useState([]);
    const [nextPage, setNextpage] = useState(true);

    

    const getFeeds =()=>{
        postService.getFeeds(page).then((res)=>{
            if(page==0){
                setFeeds(res.data.data);
            }else{
                let tempFeeds = JSON.parse(JSON.stringify(feeds))
                tempFeeds=[...tempFeeds,...res.data.data]
                setFeeds(tempFeeds)
            }
            if(res.data.results != 10 || res.data.reults < 10){
                setNextpage(false)
            }
            else{
                setNextpage(true)
            }
        });
    }

    useEffect(()=>{
        getFeeds();
    },[page])
    
    return(
        <UserContext.Provider value={{userDetail,setUserDetail,getFeeds,feeds,setFeeds,page,setPage,nextPage,setNextpage}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider