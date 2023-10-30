import { createContext,useState } from "react";

export const MenuIconContext = createContext();

export const MenuIconProvider = ({children})=>{
    const [isOpen,setIsOpen] = useState(true)
    return <MenuIconContext.Provider value={{isOpen,setIsOpen}}>
        {children}
    </MenuIconContext.Provider>
}

