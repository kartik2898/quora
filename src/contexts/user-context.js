import { createContext, useState } from "react";

export const UserContext = createContext();

function UserContextProvider({children}){


    const [userDetail, setUserDetail] = useState(null);

    return(
        <UserContext.Provider value={{userDetail,setUserDetail}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider