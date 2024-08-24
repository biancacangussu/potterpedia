import {
  ModalContent,
  ModalHeader,
  ModalBody,
  Modal,
  Button,
} from "@nextui-org/react";
import { useFavorites } from "../context/FavoritesContext";

interface FavoriteItem {
  id: string;
  name: string;
  image: string;
}

interface FavoritesModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: FavoriteItem[];
}

export default function FavoritesModal({ isOpen, onClose, items }: FavoritesModalProps) {
  const { removeFavorite } = useFavorites();

  return (
    <Modal
      className="bg-[#1F1F21] text-white"
      backdrop="blur"
      scrollBehavior="outside"
      size="2xl"
      isOpen={isOpen}
      onClose={onClose}
      isDismissable={true}
      isKeyboardDismissDisabled={true}
    >
      <ModalContent>
        <ModalHeader className="flex flex-col gap-1">
          Favorites
        </ModalHeader>
        <ModalBody>
          {items.length === 0 ? (
            <p className="mb-5">No items found in your favorites.</p>
          ) : (
            items.map((item) => (
              <div key={item.id} className="flex items-center mb-4">
                <img src={item.image} alt={item.name} className="w-16 h-16 mr-4 object-cover" />
                <div>
                  <b>{item.name}</b>
                </div>
                <Button 
                  variant="ghost" 
                  color="danger" 
                  onPress={() => removeFavorite(item.id)}
                >
                  Remove
                </Button>
              </div>
            ))
          )}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
