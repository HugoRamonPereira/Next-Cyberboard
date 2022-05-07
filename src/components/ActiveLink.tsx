import Link, { LinkProps } from "next/link";
import { cloneElement, ReactElement } from "react";

interface ActiveLinkProps extends LinkProps {
   children: ReactElement;
}

export function ActiveLink({ children, ...rest }: ActiveLinkProps) {
   let isActive = false;
   
   return (
      <Link {...rest}>
         {cloneElement(children, {
            color: isActive ? "cyan.500" : "gray.500"
         })}
      </Link>
   )
}