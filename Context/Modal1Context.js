import React, { createContext, useContext, useState } from 'react';

export const Modal1Context = createContext();
const Modal1ContextProvider = ({ children }) => {
    const [modalVisible, setModalVisible] = useState(false);

    return (
<Modal1Context.Provider value={{
             modalVisible, setModalVisible
			}}
		>
			{children}
		</Modal1Context.Provider>
    );
}
export default Modal1ContextProvider;