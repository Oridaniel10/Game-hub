import logo from "../assets/SIA.jpeg";
import { HStack, Image, Text } from "@chakra-ui/react";

const NavBar = () => {
  return (
    <HStack>
      <Image src={logo} alt="sia" boxSize="60px"></Image>
      <Text>NavBar</Text>
    </HStack>
  );
};

export default NavBar;
