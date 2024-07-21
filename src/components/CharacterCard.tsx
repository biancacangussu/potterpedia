import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";

export function CharacterCard() {
  const list = [
    {
      title: "Harry Potter",
      img: "https://www.designi.com.br/images/preview/12161378.jpg",
      price: "$5.50",
    },
    {
      title: "Hermione Granger",
      img: "https://www.designi.com.br/images/preview/12161378.jpg",
      price: "$3.00",
    },
    {
      title: "Ronald Weasley",
      img: "https://www.designi.com.br/images/preview/12161378.jpg",
      price: "$10.00",
    },
    {
      title: "Lemon",
      img: "https://www.designi.com.br/images/preview/12161378.jpg",
      price: "$5.30",
    },
    {
      title: "Avocado",
      img: "https://www.designi.com.br/images/preview/12161378.jpg",
      price: "$15.70",
    },
    {
      title: "Lemon 2",
      img: "/images/fruit-6.jpeg",
      price: "$8.00",
    },
    {
      title: "Banana",
      img: "/images/fruit-7.jpeg",
      price: "$7.50",
    },
    {
      title: "Watermelon",
      img: "/images/fruit-8.jpeg",
      price: "$12.20",
    },
  ];

  return (
    <div className="text-white mx-5 my-2 gap-6 grid grid-cols-2 sm:grid-cols-4">
      {list.map((item, index) => (
        <Card className="rounded-lg" shadow="sm" key={index}>
          <CardBody className="overflow-visible p-0">
            <Image
              shadow="sm"
              radius="lg"
              width="100%"
              alt={item.title}
              className="w-full object-cover h-[250px]"
              src={item.img}
            />
          </CardBody>
          <CardFooter className="text-small justify-between bg-black">
            <b>{item.title}</b>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
