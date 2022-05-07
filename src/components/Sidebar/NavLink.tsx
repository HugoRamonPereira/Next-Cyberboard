import { Icon, Link as ChakraLink, Text, LinkProps as ChakraLinkProps } from "@chakra-ui/react";
import { ElementType } from "react";
import { ActiveLink } from "../ActiveLink";

interface NavLinkProps extends ChakraLinkProps {
  icon: ElementType;
  children: string;
  href: string;
}

export function NavLink({ icon, children, href, ...rest }: NavLinkProps) {
  return (
    <ActiveLink href={href} passHref >
      <ChakraLink display="flex" alignItems="center" color="cyan.500" {...rest}>
        <Icon as={icon} fontSize="22" />
        <Text ml="4" fontWeight="normal">
          {children}
        </Text>
      </ChakraLink>
    </ActiveLink>
  );
}

// OBS:
// LinkProps was named ChakraLinkProps so that we can add later more ChakraUI stylying or extra properties to the Link 