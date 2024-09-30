import React, { createContext, useContext, useState } from 'react';

export const TasksContext = createContext();
const TasksContextProvider = ({ children }) => {
    const [userTasks,setuserTasks] = useState([{}]);

    return (
<TasksContext.Provider value={{
              userTasks,setuserTasks
			}}
		>
			{children}
		</TasksContext.Provider>
    );
}
export default TasksContextProvider;