import { Box, Flex, Avatar } from "@chakra-ui/react";

import ThemeToggle from "./ThemeToggle";
// import KEEPKEY_ICON from "./keepkey.png";

const Header = () => {
  return (
    <Flex
      as="header"
      width="full"
      align="center"
      alignSelf="flex-start"
      justifyContent="center"
      gridGap={2}
    >
      <Box marginLeft="auto">
        <ThemeToggle />
        <Avatar />
      </Box>
    </Flex>
  );
};

export default Header;
