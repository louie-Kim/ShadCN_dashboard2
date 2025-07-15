"use client";
import { type CarouselApi } from "@/components/ui/carousel";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "./ui/card";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { Badge } from "./ui/badge";

const TeamMember = [
  {
    id: 1,
    title: "Subscription Renewal",
    name: "John Doe",
    position: "Product Manager",
    image:
      "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=800",
    count: 1400,
  },
  {
    id: 2,
    title: "Payment for Services",
    name: "Jane Smith",
    position: "Finance Director",
    image:
      "https://images.pexels.com/photos/4969918/pexels-photo-4969918.jpeg?auto=compress&cs=tinysrgb&w=800",
    count: 2100,
  },
  {
    id: 3,
    title: "Subscription Renewal",
    name: "Michael",
    position: "Marketing Lead",
    image:
      "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=800",
    count: 1300,
  },
  {
    id: 4,
    title: "Payment for Services",
    name: "Lily Adams",
    position: "Operations Manager",
    image:
      "https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=800",
    count: 2500,
  },
  {
    id: 5,
    title: "Subscription Renewal",
    name: "Sam Brown",
    position: "Customer Success Specialist",
    image:
      "https://images.pexels.com/photos/1680175/pexels-photo-1680175.jpeg?auto=compress&cs=tinysrgb&w=800",
    count: 1400,
  },
];

const AppCarousel = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length); // 전체 슬라이드 수
    setCurrent(api.selectedScrollSnap() + 1); // 현재 슬라이드 번호 (0-indexed → 1-indexed)

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1); // 슬라이드 변경 시 현재 슬라이드 번호 업데이트
    });
  }, [api]);

  return (
    <div className="">
      <div className="mx-auto w-[210px]">
        <Carousel
          setApi={setApi}
          className="w-full max-w-xs"
          // 자동으로 넘기기
          // plugins={[plugin.current]}
          //   onMouseEnter={plugin.current.stop}
          //   onMouseLeave={plugin.current.reset}
        >
          <CarouselContent>
            {TeamMember.map((item) => (
              <CarouselItem key={item.id}>
                <Card className="p-2">
                  <CardContent className="flex aspect-auto items-center justify-center p-2 mx-auto">
                    <div className="flex items-center justify-center gap-2 mx-auto">
                      <div className="w-20 h-20 rounded-xl relative overflow-hidden ">
                        {/* fill -> relative 포지션해야 함 */}
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex flex-col items-start  gap-2">
                        <Badge className="text-sm p-2" variant="secondary">
                          {item.name}
                        </Badge>
                        <span className="text-sm text-muted-foreground font-semibold">
                          {item.position}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
        </Carousel>
        <div className="text-muted-foreground py-2 text-center text-sm">
          Slide {current} of {count}
        </div>
      </div>
    </div>
  );
};

export default AppCarousel;
