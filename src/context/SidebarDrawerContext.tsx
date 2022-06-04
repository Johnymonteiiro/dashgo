/* eslint-disable react-hooks/exhaustive-deps */
import { useDisclosure, UseDisclosureReturn } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { createContext, ReactNode, useContext, useEffect } from "react";

interface SidebarDrawerProps {
  children:ReactNode,
}

type SidebarDrawerContextData = UseDisclosureReturn

const SidebarDrawerContext = createContext({} as SidebarDrawerContextData);

export function SidebarDrawerProvider({children}:SidebarDrawerProps){

  const disclouser = useDisclosure()
  const router = useRouter()

  useEffect(()=>{
    disclouser.onClose()
    
  },[router.asPath])
  
  return(
    <SidebarDrawerContext.Provider value={disclouser}>
      {children}
    </SidebarDrawerContext.Provider>
  )
}

export const UserSidebarDrawer = () => useContext(SidebarDrawerContext)