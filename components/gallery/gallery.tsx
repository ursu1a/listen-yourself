import { Image } from "@nextui-org/image";

export const Gallery = () => {
  const items: string[] = [
    "gallery-1.jpg",
    "gallery-2.jpg",
    "gallery-3.jpg",
    "gallery-4.jpg",
  ];

  return (
    <section className="bg-slate-300 dark:bg-default-100 rounded-xl">
      <div className="container px-6 mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4 bg-slate-300 dark:bg-default-100 py-6">
        {items.map((item, index) => (
          <Image
            key={index}
            isZoomed
            alt={item}
            classNames={{ wrapper: "" }}
            height={250}
            shadow="lg"
            src={item}
            width="100%"
          />
        ))}
      </div>
    </section>
  );
};
