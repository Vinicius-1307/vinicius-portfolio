import { Icon } from "@iconify/react";
import Image from "next/image";
import { NextRouter, useRouter } from "next/router";
import { useState } from "react";

export default function Navbar({
  activeIndex = null
}) {
  const [openMenu, setOpenMenu] = useState(false);

  function handleLinkMenu() {
    setOpenMenu(false);
  }

  return (
    <>
      <header
        className={`w-full fixed flex justify-around items-center sm:py-5 py-2 border-b-2 border-teal-200 border-opacity-5 backdrop-blur-sm backdrop-brightness-90 z-40 ${
          openMenu
            ? "max-[769px]:flex-col max-[769px]:h-screen max-[769px]:justify-start max-[769px]:backdrop-brightness-50 max-[769px]:transition-all"
            : ""
        }`}
      >
        <div className="max-[769px]:flex max-[769px]:justify-around max-[769px]:items-center max-[769px]:w-full">
          <div
            className="cursor-pointer z-50"
          >
            <span className="font-mono">Vinicius José</span>
          </div>
          <Icon
            icon="ep:close-bold"
            color="#004bc3"
            width={40}
            height={40}
            className={`min-[769px]:hidden cursor-pointer z-50 hover:scale-110 ${
              openMenu ? "" : "max-[769px]:hidden"
            }`}
            onClick={() => setOpenMenu(false)}
          />
          <Icon
            icon="ci:menu-alt-01"
            color="#004bc3"
            width={40}
            height={40}
            className={`min-[769px]:hidden cursor-pointer z-50 hover:scale-110 ${
              openMenu ? "max-[769px]:hidden" : ""
            }`}
            onClick={() => setOpenMenu(true)}
          />
        </div>
        <nav
          className={`z-50 text-white ${
            openMenu ? "max-[769px]:flex mt-10" : "max-[769px]:hidden"
          }`}
        >
          <ul
            className={`flex gap-5 items-center max-[769px]:flex-col ${
              openMenu ? "max-[769px]:text-center" : ""
            }`}
          >
            <li
              className="hover:text-[#64ffda] transition-all flex flex-col"
            >
              <h2 className="cursor-pointer font-mono"><span className="font-mono text-[#64ffda]">01.</span>Home</h2>
              <span
                className={`p-[1px] rounded transition-all duration-300 ${
                  activeIndex == 0
                    ? "bg-[#5eead4] w-full"
                    : "bg-transparent w-0"
                }`}
              ></span>
            </li>
            <li
              className="hover:text-[#64ffda] transition-all flex flex-col"
            >
              <h2 className="cursor-pointer font-mono"><span className="font-mono text-[#64ffda]">02.</span>Sobre</h2>
              <span
                className={`p-[1px] rounded transition-all duration-300 ${
                  activeIndex == 1
                    ? "bg-[#5eead4] w-full"
                    : "bg-transparent w-0"
                }`}
              ></span>
            </li>
            <li
              className="hover:text-[#64ffda] transition-all flex flex-col"
            >
              <h2 className="cursor-pointer font-mono"><span className="font-mono text-[#64ffda]">03.</span>Tecnologias</h2>
              <span
                className={`p-[1px] rounded transition-all duration-300 ${
                  activeIndex == 2
                    ? "bg-[#5eead4] w-full"
                    : "bg-transparent w-0"
                }`}
              ></span>
            </li>
            <li
              className="hover:text-[#64ffda] flex flex-col"
            >
              <h2 className="cursor-pointer font-mono"><span className="font-mono text-[#64ffda]">04.</span>Contato</h2>
              <span
                className={`p-[1px] rounded transition-all duration-300 ${
                  activeIndex == 3
                    ? "bg-[#5eead4] w-full"
                    : "bg-transparent w-0"
                }`}
              ></span>
            </li>

            <li className="hover:scale-105 transition-all flex flex-col">
              <a className="cursor-pointer text-[#64ffda] font-mono border-2 border-[#64ffda] p-2 rounded-md" href="./curriculo-vinicius-jose.pdf">Curriculo</a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}