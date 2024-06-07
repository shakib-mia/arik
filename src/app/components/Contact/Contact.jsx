import { GoArrowUpRight } from "react-icons/go";
import React from "react";
import Marquee from "react-fast-marquee";
import Button from "../Button/Button";

const Contact = () => {
  return (
    <>
      <div className="bg-bg py-4 xl:py-10" id="contact">
        <Marquee>
          <div className="flex w-full gap-8">
            <div className="flex gap-8 text-meta lg:text-2xl">
              <aside>{"Let's Talk"}</aside> <aside>{"+++"}</aside>
            </div>

            <div className="flex gap-8 text-meta lg:text-2xl">
              <aside>{"Let's Talk"}</aside> <aside>{"+++"}</aside>
            </div>

            <div className="flex gap-8 text-meta lg:text-2xl">
              <aside>{"Let's Talk"}</aside> <aside>{"+++"}</aside>
            </div>
            <div className="flex gap-8 text-meta lg:text-2xl">
              <aside>{"Let's Talk"}</aside> <aside>{"+++"}</aside>
            </div>
            <div className="flex gap-8 text-meta lg:text-2xl">
              <aside>{"Let's Talk"}</aside> <aside>{"+++"}</aside>
            </div>
            <div className="flex gap-8 text-meta lg:text-2xl">
              <aside>{"Let's Talk"}</aside> <aside>{"+++"}</aside>
            </div>
            <div className="flex gap-8 text-meta lg:text-2xl">
              <aside>{"Let's Talk"}</aside> <aside>{"+++"}</aside>
            </div>
            <div className="flex gap-8 text-meta lg:text-2xl">
              <aside>{"Let's Talk"}</aside> <aside>{"+++"}</aside>
            </div>
            <div className="flex gap-8 text-meta lg:text-2xl">
              <aside>{"Let's Talk"}</aside> <aside>{"+++"}</aside>
            </div>
            <div className="flex gap-8 text-meta lg:text-2xl">
              <aside>{"Let's Talk"}</aside> <aside>{"+++"}</aside>
            </div>
            <div className="flex gap-8 text-meta lg:text-2xl">
              <aside>{"Let's Talk"}</aside> <aside>{"+++"}</aside>
            </div>
          </div>
        </Marquee>
      </div>

      <div className="flex flex-col items-center justify-center bg-bg-muted py-10 xl:h-screen">
        <div className="w-full xl:w-1/3">
          <p
            className="mb-2 text-center text-meta uppercase text-text"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            Project in mind?
          </p>
          <h2
            className="mx-auto mb-2 text-center font-satoshi text-h4 font-light md:mb-4 lg:text-heading-md"
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="500"
          >
            {"Let's make your"}{" "}
            <span className="font-gambetta italic">Website shine</span>
          </h2>

          <p
            className="mx-auto w-9/12 text-center font-chillax text-md text-text-muted lg:text-lg"
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="1000"
          >
            Premium web design, webflow, and SEO services to help your business
            stand out.
          </p>

          <div
            className="flex justify-center"
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-delay="1500"
          >
            <Button className="mt-8 flex items-center justify-center gap-2 uppercase">
              get in touch
              <GoArrowUpRight />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;