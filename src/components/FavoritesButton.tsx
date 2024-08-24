import React from "react";
import { Button } from "@nextui-org/react";
import { HeartIcon } from "./HeartIcon";
import FavoritesModal from "./FavoritesModal";
import { useFavorites } from "../context/FavoritesContext";

export function FavoritesButton() {
  const { favorites } = useFavorites();
  const [isOpen, setIsOpen] = React.useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      <Button
        isIconOnly
        color="secondary"
        aria-label="Favorites"
        onPress={openModal}
      >
        <HeartIcon />
      </Button>
      <FavoritesModal isOpen={isOpen} onClose={closeModal} items={favorites} />
    </>
  );
}
