import logo from "../assets/SIA.jpeg";
import { HStack, Image } from "@chakra-ui/react";
import ColorModeSwitcher from "./ColorModeSwitcher";
import SearchInput from "./SearchInput";
interface Props {
  onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
  return (
    <HStack padding="10px">
      <Image src={logo} boxSize="60px" />
      <SearchInput onSearch={onSearch} />
      <ColorModeSwitcher />
    </HStack>
  );
};

export default NavBar;
