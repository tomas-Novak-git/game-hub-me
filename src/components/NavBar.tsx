import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/drum-logo.svg";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
  return (
    <HStack padding='10px'>
      <a href='/'>
        <Image
          paddingLeft={2}
          src={logo}
          boxSize='60px'
        />
      </a>
      <SearchInput onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
