import { useState } from "react";

import ArrowRight from "../assets/icons/rightarrow.svg";
import RefreshIcon from "../assets/icons/refress.svg";
import PhoneIcon from "../assets/icons/phone.png";
import WhatsAppIcon from "../assets/icons/whatsapp.png";
import MailIcon from "../assets/icons/mails.png";
import TrophyIcon from "../assets/icons/price.png";
import AwardIcon from "../assets/icons/award.png";
import UsersIcon from "../assets/icons/employee.png";

import affilates1 from "../assets/icons/affilates (1).png";
import affilates2 from "../assets/icons/affilates (2).png";
import affilates3 from "../assets/icons/affilates (3).png";
import affilates4 from "../assets/icons/affilates (4).png";
import affilates5 from "../assets/icons/affilates (5).png";
import affilates6 from "../assets/icons/affilates (6).png";
import affilates7 from "../assets/icons/affilates (7).png";
import affilates8 from "../assets/icons/affilates (8).png";

const COUNTRIES = [
  "India",
  "United States",
  "United Kingdom",
  "Canada",
  "Australia",
  "Germany",
  "France",
  "Singapore",
  "United Arab Emirates",
  "Japan",
  "Brazil",
  "South Africa",
];

const BADGES = [
  { img: affilates1 },
  { img: affilates2 },
  { img: affilates3 },
  { img: affilates4 },
  { img: affilates5 },
  { img: affilates6 },
  { img: affilates7 },
  { img: affilates8 },
];

const BookConsultationForm = () => {
  const [country, setCountry] = useState("");
  const [countryOpen, setCountryOpen] = useState(false);
  const [num1] = useState(9);
  const [num2] = useState(7);

  return (
    <div className="flex min-h-screen w-full flex-col bg-white md:flex-row">
      <aside className="w-full flex-shrink-0 bg-gray-50 p-8 sm:p-10 md:w-[480px]">
        <div className="flex flex-wrap items-center gap-3 text-sm text-gray-800">
          <span className="flex cursor-pointer items-center gap-1.5 underline underline-offset-2">
            <img src={PhoneIcon} alt="Phone" className="h-4 w-4" />
            Book A Call
          </span>
          <span className="text-gray-300">|</span>
          <span className="flex cursor-pointer items-center gap-1.5 text-green-600 underline underline-offset-2">
            <img src={WhatsAppIcon} alt="WhatsApp" className="h-4 w-4" />
            WhatsApp
          </span>
          <span className="text-gray-300">|</span>
          <span className="flex cursor-pointer items-center gap-1.5">
            <img src={MailIcon} alt="Mail" className="h-4 w-4" />
            Email us
          </span>
        </div>

        <h2 className="mt-8 text-xl font-bold text-gray-900">
          Startups &amp; Fortune 500+ companies
        </h2>

        <ul className="mt-6 space-y-5">
          <li className="flex items-start gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-200 text-gray-600">
              <img src={TrophyIcon} alt="Trophy" className="h-4 w-4" />
            </span>
            <div>
              <p className="text-sm font-semibold text-gray-900">
                21+ years of experience
              </p>
              <p className="text-sm text-gray-500">We can handle projects</p>
            </div>
          </li>

          <li className="flex items-start gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-200 text-gray-600">
              <img src={AwardIcon} alt="Award" className="h-4 w-4" />
            </span>
            <div>
              <p className="text-sm font-semibold text-gray-900">
                2500+ satisfied customers
              </p>
              <p className="text-sm text-gray-500">Startups to Fortune 500.</p>
            </div>
          </li>

          <li className="flex items-start gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-200 text-gray-600">
              <img src={UsersIcon} alt="Users" className="h-4 w-4" />
            </span>
            <div>
              <p className="text-sm font-semibold text-gray-900">
                675+ in-house team
              </p>
              <p className="text-sm text-gray-500">
                Ensure your digital success.
              </p>
            </div>
          </li>
        </ul>

        <div className="mt-8 grid grid-cols-4 gap-2">
          {BADGES.map((badge) => (
            <div
              key={badge.img}
              className="flex h-14 p-3 flex-col items-center justify-center rounded border border-gray-200 bg-gray-100 px-1 text-center"
            >
              <img
                src={badge.img}
                alt={badge.name}
                className="h-full  object-contain"
              />
            </div>
          ))}
        </div>
      </aside>

      <main className="flex-1 p-6 sm:p-10">
        <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Book Free Consultation
        </h1>
        <p className="mt-2 text-gray-500">
          Guaranteed response within 8 business hours.
        </p>

        <form className="mt-8 grid grid-cols-1 gap-x-6 gap-y-6 md:grid-cols-2">
          <div className="relative">
            <label className="absolute -top-2.5 left-3 bg-white px-1 text-xs text-gray-600">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter Your Name"
              className="w-full rounded-lg border border-gray-900 px-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-900"
            />
          </div>

          <div className="relative">
            <label className="absolute -top-2.5 left-3 bg-white px-1 text-xs text-gray-600">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter Your Email"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400"
            />
          </div>

          <div className="relative">
            <label className="absolute -top-2.5 left-3 bg-white px-1 text-xs text-gray-600">
              Phone No.
            </label>
            <div className="flex items-center rounded-lg border border-gray-300 px-3 py-3 focus-within:ring-1 focus-within:ring-gray-400">
              <span className="mr-1 text-base leading-none">🇮🇳</span>
              <span className="text-sm text-gray-700">+91</span>
              <span className="mx-1 text-[10px] text-gray-400">▾</span>
              <span className="mx-2 h-4 w-px bg-gray-300" />
              <input
                type="tel"
                placeholder="(Optional)"
                className="w-full text-sm text-gray-700 placeholder-gray-400 focus:outline-none"
              />
            </div>
          </div>

          <div className="relative">
            <label className="absolute -top-2.5 left-3 z-10 bg-white px-1 text-xs text-gray-600">
              Select Country
            </label>
            <button
              type="button"
              onClick={() => setCountryOpen((open) => !open)}
              className={`flex w-full items-center justify-between rounded-lg border px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400 ${
                country
                  ? "border-gray-300 text-gray-700"
                  : "border-gray-300 text-gray-400"
              }`}
            >
              {country || "Select your Country"}
              <span
                className={`text-[10px] text-gray-400 transition-transform ${
                  countryOpen ? "rotate-180" : ""
                }`}
              >
                ▾
              </span>
            </button>

            {countryOpen && (
              <ul className="absolute z-20 mt-1 max-h-48 w-full overflow-y-auto rounded-lg border border-gray-200 bg-white shadow-lg">
                {COUNTRIES.map((item) => (
                  <li
                    key={item}
                    onClick={() => {
                      setCountry(item);
                      setCountryOpen(false);
                    }}
                    className="cursor-pointer px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="relative md:col-span-2">
            <label className="absolute -top-2.5 left-3 bg-white px-1 text-xs text-gray-600">
              Your Requirements
            </label>
            <div className="rounded-lg border border-gray-300 focus-within:ring-1 focus-within:ring-gray-400">
              <textarea
                rows={4}
                className="w-full resize-none rounded-t-lg px-4 pt-4 text-sm text-gray-700 focus:outline-none"
              />
              <div className="border-t border-gray-200 px-3 py-2">
                <button
                  type="button"
                  className="rounded border border-gray-300 px-3 py-1 text-xs text-gray-500 hover:bg-gray-50"
                >
                  Browse | Drop Files Here
                </button>
              </div>
            </div>
          </div>

          <div className="md:col-span-2 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-2 rounded-lg border border-dashed border-gray-300 px-4 py-2 text-lg text-gray-600">
                <span>{num1}</span>
                <span>+</span>
                <span>{num2}</span>
                <img
                  src={RefreshIcon}
                  alt="Refresh captcha"
                  className="ml-2 h-4 w-4 cursor-pointer"
                />
              </div>
              <span className="text-lg text-gray-600">=</span>
              <input
                type="text"
                placeholder="??"
                className="h-11 w-14 rounded-lg border border-gray-300 text-center text-sm text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400"
              />
            </div>

            <button
              type="submit"
              className="flex items-center gap-2 rounded-full border border-gray-900 px-6 py-3 text-sm font-medium text-gray-900 transition-colors hover:bg-gray-900 hover:text-white"
            >
              Enquire Now
              <img src={ArrowRight} alt="Submit" className="h-4 w-4" />
            </button>
          </div>
        </form>
      </main>
    </div>
  );
};

export default BookConsultationForm;
