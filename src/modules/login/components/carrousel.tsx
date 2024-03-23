"use client";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import {
  poster1,
  poster2,
  poster3,
} from "@/shared/providers/ImageLocalProvider";

export function CarouselPlugin() {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );

  const imagenes = [poster1, poster2, poster3];

  return (
    <Carousel
      className="w-full h-screen hidden lg:block"
      plugins={[plugin.current]}
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent className="h-full relative">
        {imagenes.map((imagen, index) => (
          <CarouselItem key={index} className="w-full h-full relative">
            <Image
              priority={true}
              src={imagen}
              alt="Gimnasio"
              fill
              sizes="100%"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
