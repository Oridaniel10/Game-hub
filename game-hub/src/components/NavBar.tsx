import logo from "../assets/SIA.jpeg";
import { HStack, Image, Text } from "@chakra-ui/react";
import ColorModeSwitcher from "./ColorModeSwitcher";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image src={logo} alt="sia" boxSize="60px"></Image>
      <ColorModeSwitcher></ColorModeSwitcher>
    </HStack>
  );
};

export default NavBar;
