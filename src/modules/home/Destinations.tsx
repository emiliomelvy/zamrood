import React, { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import Image from "next/image";

type Gallery = {
  itinerary_id: string;
  gallery_id: number;
  gallery_alt_text: string;
  gallery_path: string;
  src: string;
  title: string;
};

type ItineraryVariant = {
  itinerary_id: string;
  itinerary_variant_id: number;
  itinerary_variant_pub_price: string;
  itinerary_variant_disc_price: string;
  unit_name: string;
  related_unit: string | null;
};

type Itinerary = {
  itinerary_id: string;
  itinerary_name: string;
  itinerary_day: number;
  itinerary_slug: string;
  partner_name: string;
  partner_alias: string;
  itinerary_location: string;
  itinerary_short_description: string;
  itinerary_long_description: string;
  morph_class: string;
  related_galleries: Gallery[];
  related_variant: ItineraryVariant;
};

type ApiResponse = {
  success: boolean;
  message: string;
  code: number;
  data: Itinerary[];
};

const fetchItinerary = async (): Promise<ApiResponse> => {
  const response = await fetch(
    "https://pandooin.com/api/zamrood/itinerary?highlight=true"
  );

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  return response.json();
};

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

const Destinations: React.FC = () => {
  const { isLoading, isError, error, data } = useQuery<ApiResponse, Error>({
    queryKey: ["destinations"],
    queryFn: fetchItinerary,
  });

  if (isLoading) return <h1>Loading...</h1>;
  if (isError) return <div>{error.message}</div>;

  return (
    <section className="p-4 w-full max-w-7xl mx-auto">
      <div className="py-6 w-full flex flex-col sm:flex-row items-start gap-6">
        <h1 className="my-auto w-fit text-left text-dark-teal font-unbounded font-bold text-[22px] lg:text-4xl">
          Destinations
        </h1>
        <div className="w-fit flex items-center">
          <Link
            href="/"
            className="group w-fit inline-flex gap-4 items-center cursor-pointer"
          >
            <Image
              src="/arrow-right.svg"
              alt="arrow-right"
              width={40}
              height={40}
            />
            <span className="text-base text-dark-teal font-bold group-hover:text-tan transition-colors ease-in-out duration-300">
              EXPLORE MORE
            </span>
          </Link>
        </div>
      </div>
      <div className="w-full flex flex-col">
        {data?.data.map((item) => (
          <ItineraryComponent key={item.itinerary_id} item={item} />
        ))}
      </div>
    </section>
  );
};

const ItineraryComponent: React.FC<{ item: Itinerary }> = ({ item }) => {
  const [currentImage, setCurrentImage] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage(
        (prevImage) => (prevImage + 1) % item.related_galleries.length
      );
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, [item.related_galleries.length]);

  return (
    <div className="py-4 lg:py-[72px] w-full flex flex-col lg:odd:flex-row-reverse lg:flex-row gap-4 lg:gap-6 items-stretch">
      <div className="relative lg:w-1/2 max-h-[256px] lg:max-h-[327px] aspect-video overflow-hidden">
        {item.related_galleries.map((gallery, index) => (
          <Image
            key={gallery.gallery_id}
            src={gallery.src}
            alt={gallery.gallery_alt_text ? gallery.gallery_alt_text : ""}
            fill
            style={{ objectFit: "cover" }}
            className={`object-center transition-opacity ease-in-out duration-1000 ${
              index === currentImage ? "opacity-100" : "opacity-0"
            }`}
            loading="lazy"
            sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ))}
      </div>
      <div className="lg:w-1/2 flex flex-col justify-between space-y-2 lg:space-y-4 text-center lg:text-left">
        <div className="w-full flex flex-col space-y-2">
          <span className="text-left text-xs lg:text-base">
            {item.itinerary_day} DAYS {item.itinerary_day - 1} NIGHTS
          </span>
          <strong className="text-left text-dark-aquaman text-base lg:text-4xl font-bold line-clamp-2">
            {item.itinerary_name}
          </strong>
          <span className="text-left text-dark-teal text-sm lg:text-base line-clamp-1 font-bold">
            Organized by {item.partner_name}
          </span>
          <p className="text-left text-sm lg:text-base text-dark-teal line-clamp-4">
            {item.itinerary_short_description}
          </p>
        </div>
        <div className="mt-auto w-full inline-flex justify-between items-center">
          <div className="flex flex-col">
            <span className="text-left text-dark-teal text-xs lg:text-base">
              Start from
            </span>
            <span className="text-left font-unbounded text-dark-teal text-lg lg:text-[28px] font-medium">
              IDR{" "}
              {formatter.format(
                Number(item.related_variant.itinerary_variant_pub_price)
              )}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destinations;
