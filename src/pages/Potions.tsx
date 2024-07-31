// pages/Potions.tsx
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getPotions } from "../api/harryPotterAPI";
import { Card, CardBody, CardFooter, Chip, Image } from "@nextui-org/react";
import { CardsPagination } from "../components/CardsPagination";

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
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const search = query.get('search') || '';

  useEffect(() => {
    setPage(1);
  }, [search]);

  useEffect(() => {
    const fetchData = async () => {
      const { data, meta } = await getPotions(page, 48, search);
      setPotions(data);
      setTotalPages(meta.pagination.last);
    };
    fetchData();
  }, [page, search]);

  return (
    <>
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
                  <Chip size="sm" variant="flat">
                    {potion.attributes.difficulty}
                  </Chip>
                )}
                {potion.attributes.effect?.length < 60 && (
                  <Chip size="sm" variant="flat">
                    {potion.attributes.effect}
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
            totalPages={totalPages}
            onPageChange={(newPage) => setPage(newPage)}
          />
        </div>
      )}
    </>
  );
};
