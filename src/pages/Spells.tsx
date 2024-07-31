import React, { useEffect, useState } from "react";
import { getSpells } from "../api/harryPotterAPI";
import { Card, CardBody, CardFooter, Chip, Image } from "@nextui-org/react";
import { CardsPagination } from "../components/CardsPagination";

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
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const { data, meta } = await getSpells(page);
      setSpells(data);
      setTotalPages(meta.pagination.last);
    };
    fetchData();
  }, [page]);

  return (
    <>
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
                  <Chip size="sm" variant="flat">
                    {spell.attributes.category}
                  </Chip>
                )}
                {spell.attributes.effect?.length < 60 && (
                  <Chip size="sm" variant="flat">
                    {spell.attributes.effect}
                  </Chip>
                )}
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
      {totalPages > 1 && (
        <div className="flex justify-center mt-5">
          <CardsPagination
            currentPage={page}
            totalPages={totalPages ? totalPages : 7}
            onPageChange={(newPage) => setPage(newPage)}
          />
        </div>
      )}
    </>
  );
};
