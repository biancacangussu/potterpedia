// components/NavBar.tsx
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Input,
} from "@nextui-org/react";
import { SearchIcon } from "../components/SearchIcon";
import { useLocation, useNavigate } from "react-router-dom";

export function NavBar() {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;

    if (currentPath.includes("characters")) {
      navigate(`/characters?search=${query}`);
    } else if (currentPath.includes("potions")) {
      navigate(`/potions?search=${query}`);
    } else if (currentPath.includes("spells")) {
      navigate(`/spells?search=${query}`);
    } else {
      navigate(`/?search=${query}`);
    }
  };

  return (
    <Navbar isBlurred>
      <NavbarContent justify="center">
        <NavbarBrand className="mr-4">
          <p
            style={{
              fontFamily: "HarryPotter",
              fontSize: "2.5rem",
              userSelect: "none",
            }}
            className="text-white hidden sm:block text-inherit"
          >
            Potterpedia
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

      {currentPath !== "/" && (
        <NavbarContent as="div" className="items-center" justify="end">
          <Input
            variant="bordered"
            classNames={{
              base: "max-w-full sm:max-w-[12rem] h-10",
              mainWrapper: "h-full",
              input: "text-small",
              inputWrapper: "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
            }}
            placeholder="Type to search..."
            size="sm"
            startContent={<SearchIcon size={18} />}
            type="search"
            onChange={handleSearch}
          />
        </NavbarContent>
      )}
    </Navbar>
  );
}
