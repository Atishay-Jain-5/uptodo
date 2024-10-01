import React, { createContext, useContext, useState } from 'react';

export const EditTaskContext = createContext();
const EditTaskContextProvider = ({ children }) => {
    const [taskIndex, setTaskIndex] = useState(false);

    return (
<EditTaskContext.Provider value={{
             taskIndex, setTaskIndex
			}}
		>
			{children}
		</EditTaskContext.Provider>
    );
}
export default EditTaskContextProvider;