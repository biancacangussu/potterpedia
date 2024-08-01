import { Button } from "@nextui-org/react";
import { HeartIcon } from "./HeartIcon";

export function FavoritesButton() {
  return (
    <div className="flex gap-4 items-center">
      <Button isIconOnly color="secondary" aria-label="Like">
        <HeartIcon />
      </Button>
    </div>
  );
}
