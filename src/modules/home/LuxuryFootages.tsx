import { useState, useEffect } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

type SrcSetType = {
  src: string;
  width: number;
  height: number;
};

type ImageType = {
  src: string;
  width: number;
  height: number;
  srcSet: SrcSetType[];
};

const IMAGES = [
  { src: "/1.png", width: 1920, height: 1080 },
  { src: "/2.png", width: 1920, height: 1080 },
  { src: "/3.png", width: 1920, height: 1080 },
  { src: "/4.png", width: 1920, height: 1080 },
  { src: "/5.png", width: 1920, height: 1080 },
  { src: "/6.png", width: 1920, height: 1080 },
];

const imageSizes: number[] = [16, 32, 48, 64, 96, 128, 256, 384];
const deviceSizes: number[] = [640, 750, 828, 1080, 1200, 1920, 2048, 3840];

const slides = IMAGES.map(
  ({ src, width, height }): ImageType => ({
    width,
    height,
    src: src,
    srcSet: imageSizes
      .concat(...deviceSizes)
      .filter((size) => size <= width)
      .map((size) => ({
        src: src,
        width: size,
        height: Math.round((height / width) * size),
      })),
  })
);

const LuxuryFootages: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const [currentImage, setCurrentImage] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % IMAGES.length);
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className="bg-tan lg:mt-[72px]">
        <div className="pt-12 p-9 lg:py-[72px] lg:pt-[84px] w-full max-w-7xl mx-auto lg:text-left flex flex-col space-y-6">
          <h1 className="text-[52px] lg:text-[72px] text-dark-teal">
            Luxury Footages
          </h1>
          <div className="block lg:hidden relative w-full aspect-[356/256]">
            {IMAGES.map((image, index) => (
              <Image
                key={index}
                src={image.src}
                alt={image.src}
                fill
                style={{ objectFit: "cover" }}
                className={`object-center transition-opacity ease-in-out duration-1000 ${
                  index === currentImage ? "opacity-100 z-0" : "opacity-0 -z-10"
                }`}
                loading="lazy"
                sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
                onClick={() => {
                  setCurrentImageIndex(index);
                  setOpen(true);
                }}
              />
            ))}
          </div>
          <div className="hidden w-full lg:grid grid-cols-3 gap-6">
            {IMAGES.slice(0, 3).map((image, key) => (
              <div
                key={key}
                className="relative w-full aspect-[356/256] cursor-pointer"
                onClick={() => {
                  setCurrentImageIndex(key);
                  setOpen(true);
                }}
              >
                <Image
                  src={image.src}
                  alt={image.src}
                  width={386}
                  height={278}
                  className="w-full"
                />
              </div>
            ))}
            <span className="col-span-full">
              <Image
                src="/separator-white.svg"
                alt="separator"
                width={1096}
                height={97}
                className="w-full"
              />
            </span>
            {IMAGES.slice(3, 6).map((image, key) => (
              <div
                key={key + 3}
                className="relative w-full aspect-[356/256] cursor-pointer"
                onClick={() => {
                  setCurrentImageIndex(key + 3);
                  setOpen(true);
                }}
              >
                <Image
                  src={image.src}
                  alt={image.src}
                  width={386}
                  height={278}
                  className="w-full"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={slides}
        plugins={[Thumbnails, Zoom]}
        index={currentImageIndex}
        thumbnails={{ imageFit: "cover" }}
      />
    </>
  );
};

export default LuxuryFootages;
