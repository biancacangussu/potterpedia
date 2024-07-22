import React, { useEffect, useState } from "react";
import { getCharacters } from "../api/harryPotterAPI";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";

interface Character {
  id: string;
  attributes: {
    name: string;
    image: string;
    house?: string;
    ancestry?: string;
    species?: string;
  };
}

export const Characters: React.FC = () => {
  const [characters, setCharacters] = useState<Character[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCharacters();
      setCharacters(data);
    };
    fetchData();
  }, []);

  return (
    <div className="mx-5 my-2 gap-6 grid grid-cols-2 sm:grid-cols-4">
      {characters.map((character) => (
        <Card className="rounded-lg" shadow="sm" key={character.id}>
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
          <CardFooter className="text-small flex flex-col items-start">
            <b>{character.attributes.name}</b>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};
