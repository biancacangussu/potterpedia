import React, { useEffect, useState } from "react";
import { getSpells } from "../api/harryPotterAPI";
import { Card, CardBody, CardFooter, Chip, Image } from "@nextui-org/react";

interface Spell {
  id: string;
  attributes: {
    category?: string;
    image?: string;
    name: string;
    effect?: string;
  };
}

export const Spells: React.FC = () => {
  const [spells, setSpells] = useState<Spell[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getSpells();
      setSpells(data);
    };
    fetchData();
  }, []);

  return (
    <div className="mx-5 my-2 gap-6 grid grid-cols-2 sm:grid-cols-4">
      {spells.map((spell) => (
        <Card shadow="sm" key={spell.id}>
          <CardBody className="overflow-visible p-0">
            <Image
              shadow="sm"
              radius="lg"
              width="100%"
              alt={spell.attributes.name}
              className="w-full object-cover h-[300px]"
              src={spell.attributes.image ?? "/missing_spell.svg"}
            />
          </CardBody>
          <CardFooter className="text-small justify-between flex flex-col items-start">
            <b>{spell.attributes.name}</b>
            <div className="flex gap-1 justify-normal mt-3 flex-wrap">
              {spell.attributes.category && (
                <Chip size="sm" variant="flat">{spell.attributes.category}</Chip>
              )}
              {spell.attributes.effect?.length < 60 && (
                <Chip size="sm" variant="flat">{spell.attributes.effect}</Chip>
              )}
            </div>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};
