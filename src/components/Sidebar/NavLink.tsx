import { Icon, Link, Text, LinkProps as ChakraLinkProps } from "@chakra-ui/react";
import { ElementType } from "react";

interface NavLinkProps extends ChakraLinkProps {
  icon: ElementType;
  children: string;
}

export function NavLink({ icon, children, ...rest }: NavLinkProps) {
  return (
    <Link display="flex" alignItems="center" color="cyan.500" {...rest}>
      <Icon as={icon} fontSize="22" />
      <Text ml="4" fontWeight="normal">
        {children}
      </Text>
    </Link>
  );
}

// OBS:
// LinkProps was named ChakraLinkProps so that we can add later more ChakraUI stylying or extra properties to the Link 