"use client";

import Image from "next/image";
import { Carousel } from "react-bootstrap";

export default function Home() {
  return (
    <div className="flex overflow-x-auto">
      <Carousel>
        <Carousel.Item>
          <Image
            src="/images/business-image.jpg"
            alt=""
            width={2250}
            height={700}
            className="object-cover w-full"
          />
        </Carousel.Item>

        <Carousel.Item>
          <Image
            src="/images/solution-image.jpeg"
            alt=""
            width={2250}
            height={700}
            className="object-cover w-full"
          />
        </Carousel.Item>

        <Carousel.Item>
          <Image
            src="/images/stacks-of-cash.png"
            alt=""
            width={2250}
            height={700}
            className="object-cover w-full"
          />
        </Carousel.Item>

        <Carousel.Item>
          <Image
            src="/images/supercar-image.jpeg"
            alt=""
            width={2250}
            height={700}
            className="object-cover w-full"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
