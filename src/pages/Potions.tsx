import React, { useEffect, useState } from "react";
import { getPotions } from "../api/harryPotterAPI";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";

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
        <Card className="rounded-lg" shadow="sm" key={potion.id}>
          <CardBody className="overflow-visible p-0">
            <Image
              shadow="sm"
              radius="lg"
              width="100%"
              alt={potion.attributes.name}
              className="w-full object-cover h-[300px]"
              src={potion.attributes.image || "/missing_potion.svg"}
            />
          </CardBody>
          <CardFooter className="text-small justify-between">
            <b>{potion.attributes.name}</b>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};
