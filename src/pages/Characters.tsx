import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getCharacters } from "../api/harryPotterAPI";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Chip,
  Image,
} from "@nextui-org/react";
import { CardsPagination } from "../components/CardsPagination";
import { useFavorites } from "../context/FavoritesContext";

interface Character {
  id: string;
  attributes: {
    name: string;
    image: string;
    house?: string;
    ancestry?: string;
  };
}

export const Characters: React.FC = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const search = query.get("search") || "";
  const { addFavorite } = useFavorites();

  useEffect(() => {
    setPage(1);
  }, [search]);

  useEffect(() => {
    const fetchData = async () => {
      const { data, meta } = await getCharacters(page, 48, search);
      setCharacters(data);
      setTotalPages(meta.pagination.last);
    };
    fetchData();
  }, [page, search]);

  return (
    <>
      <div className="mx-5 my-2 gap-6 grid grid-cols-2 sm:grid-cols-4">
        {characters.map((character) => (
          <Card shadow="sm" key={character.id}>
            <CardBody className="overflow-visible p-0">
              <Image
                shadow="sm"
                radius="lg"
                width="100%"
                alt={character.attributes.name}
                className="w-full object-cover h-[250px]"
                src={character.attributes.image || "/missing_character.svg"}
              />
            </CardBody>
            <CardFooter className="text-small justify-between flex flex-col items-start">
              <b>{character.attributes.name}</b>
              <div className="flex gap-1 justify-normal mt-3 flex-wrap">
                {character.attributes.house && (
                  <Chip size="sm" variant="flat">
                    {character.attributes.house}
                  </Chip>
                )}
                {character.attributes.ancestry && (
                  <Chip size="sm" variant="flat">
                    {character.attributes.ancestry}
                  </Chip>
                )}
              </div>
              <Button
                size="sm"
                className="flex mt-3 self-center"
                variant="solid"
                onClick={() =>
                  addFavorite({
                    id: character.id,
                    name: character.attributes.name,
                    image:
                      character.attributes.image || "/missing_character.svg",
                  })
                }
              >
                add to favorites
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      {totalPages > 1 && (
        <div className="flex justify-center mt-5">
          <CardsPagination
            currentPage={page}
            totalPages={totalPages}
            onPageChange={(newPage) => setPage(newPage)}
          />
        </div>
      )}
    </>
  );
};
