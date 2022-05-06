import { useDisclosure, UseDisclosureReturn } from "@chakra-ui/react";
import { checkTargetForNewValues } from "framer-motion";
import { useRouter } from "next/router";
import { createContext, ReactNode, useContext, useEffect } from "react";

interface SidebarDrawerProviderProps {
   children: ReactNode;
}

type SidebarDrawerContextData = UseDisclosureReturn

const SidebarDrawerContext = createContext({} as SidebarDrawerContextData);

export function SidebarDrawerProvider({ children }: SidebarDrawerProviderProps) {
   const disclosure = useDisclosure();
   const router = useRouter()

   useEffect(() => {
      disclosure.onClose()
   }, [router.asPath])
   /* This useEffect will trigger a disclosure.onClose that will close the sidebar menu when a router.asPath which is the url checkTargetForNewValues, when the user navigate to a different router then the sidebar menu will close. */

   return (
      <SidebarDrawerContext.Provider value={disclosure}>
         {children}
      </SidebarDrawerContext.Provider>
   )
}

export const useSidebarDrawer = () => useContext(SidebarDrawerContext)