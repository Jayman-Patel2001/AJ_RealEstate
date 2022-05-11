import { Box } from "@chakra-ui/react";

// const date = new Date();

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <Box
      textAlign="center"
      p="5"
      color="gray.600"
      borderTop="1px"
      borderColor="gray.300"
    >
      {currentYear} AJ RealEstate, Inc.
    </Box>
  );
};

export default Footer;
