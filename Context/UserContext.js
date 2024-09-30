import React, { createContext, useContext, useState } from 'react';

export const UserContext = createContext();
const UserContextProvider = ({ children }) => {
    const [userstatus,setUserstatus]=useState(false)

    return (
<UserContext.Provider value={{
                userstatus,setUserstatus
			}}
		>
			{children}
		</UserContext.Provider>
    );
}
export default UserContextProvider;