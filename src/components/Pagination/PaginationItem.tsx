import { Button } from "@chakra-ui/react";

interface PaginationItemProps {
  isCurrentPage?: boolean;
  pageNumber: number;
}

export function PaginationItem({ isCurrentPage = false, pageNumber }: PaginationItemProps) {
  if (isCurrentPage) {
    return (
      <Button
        size="sm"
        fontSize="xs"
        color="white"
        colorScheme="cyan"
        disabled
        _disabled={{
          bg: "cyan.500",
          cursor: "not-allowed",
        }}
      >
        {pageNumber}
      </Button>
    );
  }

  return (
    <Button
      size="sm"
      fontSize="xs"
      width="4"
      bg="cyan.900"
      _hover={{
        bg: "cyan.500",
      }}
    >
      {pageNumber}
    </Button>
  );
}
