import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Input,
} from "@nextui-org/react";
import { SearchIcon } from "../components/SearchIcon";

export function NavBar() {
  return (
    <Navbar className="text-neutral-50 ">
      <NavbarContent justify="start">
        <NavbarBrand className="mr-4">
          <p
            style={{
              fontFamily: "HarryPotter",
              fontSize: "2rem",
              userSelect: "none",
            }}
            className="hidden sm:block text-inherit"
          >
            AlmanaqueHogwarts
          </p>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-3">
          <NavbarItem>
            <Link color="foreground" href="/">
              Home
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="/characters">
              Characters
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="/potions">
              Potions
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="/spells">
              Spells
            </Link>
          </NavbarItem>
        </NavbarContent>
      </NavbarContent>

      <NavbarContent as="div" className="items-center" justify="end">
        <Input
          isClearable
          variant="bordered"
          classNames={{
            base: "max-w-full sm:max-w-[10rem] h-10",
            inputWrapper: "h-full font-normal rounded-lg border border-gray-400/30 hover:border-white",
          }}
          placeholder="Search"
          size="sm"
          startContent={<SearchIcon size={18} />}
          type="search"
        />
      </NavbarContent>
    </Navbar>
  );
}
