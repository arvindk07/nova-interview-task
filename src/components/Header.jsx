import React, { useState } from "react";

import SearchIcon from "../assets/icons/search.svg";
import BurgerMenu from "../assets/icons/burgerMenu.svg";
import Logo from "../assets/icons/Logo.svg";
import Frame from "../assets/icons/Frame.svg";
import Kicon from "../assets/icons/K.svg";
import ArrowRight from "../assets/icons/ArrowRight.svg";

const navLinks = ["Service", "Solutions", "Hire & Teams", "Company"];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header-section">
      <div className="flex  items-center justify-between gap-4  inner-section">
        {/* Logo */}
        <a href="#" className="flex shrink-0 items-center gap-2">
          <img src={Logo} alt="ValueCoders Logo" />
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link}
              href="#"
              className="text-sm font-medium text-white/90 transition hover:text-white"
            >
              {link}
            </a>
          ))}
        </nav>

        {/* Desktop right side */}
        <div className="hidden items-center gap-5 lg:flex">
          {/* Search */}
          <div className="Serach-filed relative">
            <img src={SearchIcon} alt="Search" className="h-4 w-4 shrink-0" />

            <input
              type="search"
              placeholder="Search or describe w..."
              className="w-full truncate bg-transparent text-blue-100 placeholder:text-blue-100 pr-10 text-sm focus:outline-none"
            />

            <span className=" bg-[#C1C5D3] flex items-center justify-center gap-1 p-2.5 rounded-full absolute right-1 top-1/2 -translate-y-1/2 ">
              <img src={Frame} alt="K" className="h-3 " />
              <img src={Kicon} alt="K" className="h-3 " />
            </span>
          </div>

          {/* CTA */}
          <a href="#" className="Estimate-btn">
            Get an Estimate
            <img src={ArrowRight} alt="Arrow" className="h-4 w-4" />
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          className="flex h-9 w-9 items-center justify-center rounded-md lg:hidden"
          aria-label="Toggle menu"
        >
          <img src={BurgerMenu} alt="Menu" className="h-6 w-6" />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="border-t border-blue-900 px-4 py-4 lg:hidden">
          {/* Mobile Search */}
          <div className="mb-4 flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-blue-100">
            <img src={SearchIcon} alt="Search" className="h-4 w-4 shrink-0" />

            <span className="flex-1 truncate">Search or describe wh...</span>
          </div>

          {/* Mobile nav */}
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="rounded-md px-2 py-2 text-sm font-medium text-white/90 hover:bg-white/5"
              >
                {link}
              </a>
            ))}
          </nav>

          {/* Mobile CTA */}
          <a
            href="#"
            className="mt-4 flex w-full items-center justify-center gap-2 rounded-full bg-amber-400 px-4 py-2.5 text-sm font-semibold text-slate-900"
          >
            Get an Estimate
            <img src={ArrowRight} alt="Arrow" className="h-4 w-4" />
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
