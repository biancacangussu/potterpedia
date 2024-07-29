import React, { useEffect, useState } from "react";
import { getPotions } from "../api/harryPotterAPI";
import { Card, CardBody, CardFooter, Chip, Image } from "@nextui-org/react";

interface Potion {
  id: string;
  attributes: {
    effect?: string;
    image?: string;
    name: string;
    difficulty?: string;
  };
}

export const Potions: React.FC = () => {
  const [potions, setPotions] = useState<Potion[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getPotions();
      setPotions(data);
    };
    fetchData();
  }, []);

  return (
    <div className="mx-5 my-2 gap-6 grid grid-cols-2 sm:grid-cols-4">
      {potions.map((potion) => (
        <Card shadow="sm" key={potion.id}>
          <CardBody className="overflow-visible p-0">
            <Image
              shadow="sm"
              radius="lg"
              width="100%"
              alt={potion.attributes.name}
              className="w-full object-cover h-[300px]"
              src={potion.attributes.image ?? "/missing_potion.svg"}
            />
          </CardBody>
          <CardFooter className="text-small justify-between flex flex-col items-start">
            <b>{potion.attributes.name}</b>
            <div className="flex gap-1 justify-normal mt-3 flex-wrap">
              {potion.attributes.difficulty && (
                <Chip size="sm" variant="flat">{potion.attributes.difficulty}</Chip>
              )}
              {potion.attributes.effect?.length < 60 && (
                <Chip size="sm" variant="flat">{potion.attributes.effect}</Chip>
              )}
            </div>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};
