"use client"

import { Menu, Transition } from "@headlessui/react";
import React,  { Fragment, memo } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { SignalIcon } from "@heroicons/react/24/solid";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";


// session?.user?.image;

export interface StaticImageData {
  src: string;
  height: number;
  width: number;
  blurDataURL?: string;
  blurWidth?: number;
  blurHeight?: number;
}

interface StaticRequire {
  default: StaticImageData;
}
type StaticImport = StaticRequire | StaticImageData;

type DropProps = {
  src: string | StaticImport;
};

function Dropdown({src}: DropProps) {
  const { data: session } = useSession();

  return (
    <Menu as="div" className="w-24 h-12 relative flex items-center">
      <div className="w-full absolute right-1 group">
        <Menu.Button className="flex items-center w-full px-4 py-3 text-sm font-medium text-white bg-[#1A1A1A] rounded-full hover:bg-[#3E3E3E]">
          <ChevronDownIcon className="h-6 text-[#686868]" aria-hidden="true" />
          <Image
            src={src}
            alt=""
            className="rounded-full w-11 h-11 absolute -right-1 object-cover"
          />
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 w-56 mt-24 origin-top-right bg-[#1A1A1A] divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="px-1 py-1 ">
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active && "bg-white/10"
                  } group flex rounded-md items-center w-full px-2 py-2 text-sm font-semibold tracking-wide text-white cursor-default`}
                  onClick={() => signOut({ redirect: false })}
                >
                  <SignalIcon className="w-5 h-5 mr-2" aria-hidden="true" />
                  Log out
                </button>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

export default memo(Dropdown);