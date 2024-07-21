import React, { useEffect, useState } from "react";
import { getSpells } from "../api/harryPotterAPI";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";

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
    <div className="text-white mx-5 my-2 gap-6 grid grid-cols-2 sm:grid-cols-4">
      {spells.map((spell) => (
        <Card className="rounded-lg" shadow="sm" key={spell.id}>
          <CardBody className="overflow-visible p-0">
            <Image
              shadow="sm"
              radius="lg"
              width="100%"
              alt={spell.attributes.name}
              className="w-full object-cover h-[300px]"
              src={spell.attributes.image || "/missing_spell.svg"}
            />
          </CardBody>
          <CardFooter className="text-small justify-between bg-black">
            <b>{spell.attributes.name}</b>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};
