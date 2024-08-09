import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";

type Article = {
  id: string;
  slug: string;
  title: string;
  summary: string;
  featured_image: string;
  featured_image_caption: string;
  read_time: string;
};

type ApiResponse = {
  success: boolean;
  message: string;
  code: number;
  data: Article[];
};

const fetchArticles = async () => {
  const response = await fetch("https://pandooin.com/api/zamrood/article");

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  return response.json();
};

const Articles: React.FC = () => {
  const { isLoading, isError, error, data } = useQuery<ApiResponse, Error>({
    queryKey: ["articles"],
    queryFn: fetchArticles,
  });

  if (isLoading) return <h1>Loading...</h1>;
  if (isError) return <div>{error.message}</div>;
  return (
    <section className="px-4 lg:py-[72px] w-full max-w-7xl mx-auto flex flex-col space-y-6">
      <div className="flex flex-col space-y-2">
        <div className="font-unbounded text-[22px] lg:text-4xl font-bold text-dark-aquaman">
          Articles
        </div>
        <div className="text-base lg:text-2xl text-dark-aquaman">
          Our curated writings, offering something for every reader.
        </div>
      </div>
      <div className="w-full grid grid-cols-1 lg:grid-cols-4 gap-6 items-stretch">
        {data?.data.map((item, index) => (
          <Link
            key={item.id}
            href="/"
            className={`w-full flex flex-col ${
              index === 0 ? "lg:row-span-2 lg:col-span-2" : ""
            }`}
          >
            <div className="relative w-full h-full aspect-video overflow-hidden">
              <Image
                src={item.featured_image}
                alt={item.featured_image_caption}
                fill
                style={{ objectFit: "cover" }}
                loading="lazy"
                className="object-cover object-center grayscale hover:grayscale-0 transition-all ease-in-out duration-300"
              />
            </div>
            <div className="w-full p-6 lg:p-4 bg-dark-aquaman flex flex-col space-y-2">
              <h2
                className="m-0 text-vista-white text-base font-bold line-clamp-2"
                title={item.title}
              >
                {item.title}
              </h2>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Articles;
