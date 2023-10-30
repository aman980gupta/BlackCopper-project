import { createContext,useState } from "react";

export const SidebarContext = createContext();

export const SidebarProvider = ({children})=>{
    const [isSmall, setIsSmall] = useState(false)
    return <SidebarContext.Provider value={{isSmall, setIsSmall}}>
        {children}
    </SidebarContext.Provider>
}