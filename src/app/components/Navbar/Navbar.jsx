"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaBars } from "react-icons/fa";
import logo from "./../../../assets/images/logo.png";
import Button from "../Button/Button";

const Navbar = () => {
  const [navChecked, setNavChecked] = useState(false);

  return (
    <>
      <nav
        className="absolute left-0 right-0 z-50 mx-auto mt-4 flex w-full max-w-[95%] items-center justify-between rounded-sm border border-border bg-bg-muted p-3 text-text backdrop-blur md:mt-6 md:max-w-[41.25rem] lg:mt-12"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <Link href="/" className="sm:w-auto">
          <Image src={logo} alt="Logo" className="w-14" />
        </Link>

        <label className="sm:hidden">
          <FaBars />
          <input
            type="checkbox"
            onChange={(e) => setNavChecked(e.target.checked)}
            className="hidden"
          />
        </label>

        <ul
          className={`absolute left-0 top-16 z-10 hidden h-fit w-full flex-col items-end gap-5 overflow-hidden border-t-0 border-border px-3 text-meta uppercase text-text transition-all duration-300 sm:static sm:flex sm:w-auto sm:flex-row sm:items-center sm:border-0 sm:bg-transparent`}
        >
          <li className="mt-3 sm:mt-0">
            <Link href="/Services">Services</Link>
          </li>
          <li>
            <Link href="/Work">Work</Link>
          </li>
          <li>
            <Link href="/About">About</Link>
          </li>
          <li>
            <Link href="/Blog">Blog</Link>
          </li>
          <li>
            <Link href="/Pages">Pages</Link>
          </li>
          <Button className="mb-3 sm:hidden">{"Let's"} Talk</Button>
        </ul>

        <Button className="hidden sm:block">{"Let's"} Talk</Button>
      </nav>

      <ul
        className={`absolute left-0 top-16 z-10 ${navChecked ? "flex" : "hidden"} h-fit w-full flex-col items-end gap-5 overflow-hidden border-t-0 border-border px-3 text-meta uppercase text-text backdrop-blur transition-all duration-300 sm:static sm:hidden sm:w-auto sm:flex-row sm:items-center sm:border-0 sm:bg-transparent sm:backdrop-blur-0`}
      >
        <li className="mt-3 sm:mt-0">
          <Link href="/Services">Services</Link>
        </li>
        <li>
          <Link href="/Work">Work</Link>
        </li>
        <li>
          <Link href="/About">About</Link>
        </li>
        <li>
          <Link href="/Blog">Blog</Link>
        </li>
        <li>
          <Link href="/Pages">Pages</Link>
        </li>
        <Button className="mb-3 sm:hidden">{"Let's"} Talk</Button>
      </ul>
    </>
  );
};

export default Navbar;