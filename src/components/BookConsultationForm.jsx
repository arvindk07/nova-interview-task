import { useState } from "react";

import ArrowRight from "../assets/icons/rightarrow.svg";
import RefreshIcon from "../assets/icons/refress.svg";
import PhoneIcon from "../assets/icons/phone.png";
import WhatsAppIcon from "../assets/icons/whatsapp.png";
import MailIcon from "../assets/icons/mails.png";
import TrophyIcon from "../assets/icons/price.png";
import AwardIcon from "../assets/icons/award.png";
import UsersIcon from "../assets/icons/employee.png";

import affilates1 from "../assets/icons/affilates (1).svg";
import affilates2 from "../assets/icons/affilates (2).svg";
import affilates3 from "../assets/icons/affilates (3).svg";
import affilates4 from "../assets/icons/affilates (4).svg";
import affilates5 from "../assets/icons/affilates (5).svg";
import affilates6 from "../assets/icons/affilates (6).svg";
import affilates7 from "../assets/icons/affilates (7).svg";
import affilates8 from "../assets/icons/affilates (8).svg";

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
  { img: affilates1, name: "Microsoft" },
  { img: affilates2, name: "AWS" },
  { img: affilates3, name: "Google Cloud" },
  { img: affilates4, name: "Clutch" },
  { img: affilates5, name: "CMMI" },
  { img: affilates6, name: "Deloitte" },
  { img: affilates7, name: "Partner" },
  { img: affilates8, name: "Certified" },
];

const HIGHLIGHTS = [
  {
    icon: TrophyIcon,
    title: "21+ years of experience",
    subtitle: "We can handle projects",
  },
  {
    icon: AwardIcon,
    title: "2500+ satisfied customers",
    subtitle: "Startups to Fortune 500.",
  },
  {
    icon: UsersIcon,
    title: "675+ in-house team",
    subtitle: "Ensure your digital success.",
  },
];

// random 1-9 number, used for the captcha operands
const randomDigit = () => Math.floor(Math.random() * 9) + 1;

const BookConsultationForm = () => {
  const [country, setCountry] = useState("");
  const [countryOpen, setCountryOpen] = useState(false);
  const [fileName, setFileName] = useState("");
  const [num1, setNum1] = useState(() => randomDigit());
  const [num2, setNum2] = useState(() => randomDigit());
  const [captchaAnswer, setCaptchaAnswer] = useState("");

  const refreshCaptcha = () => {
    setNum1(randomDigit());
    setNum2(randomDigit());
    setCaptchaAnswer("");
  };

  return (
    <div className="flex w-full flex-col bg-white md:flex-row">
      {/* ---------------- Sidebar ---------------- */}
      <aside className="w-full flex-shrink-0 border-b border-gray-100 bg-gray-50 pl-6! md:pl-20! pr-6 sm:p-8 md:w-[480px] md:border-b-0 md:border-r md:p-10 lg:w-[501px] flex justify-center items-center">
        <div className="w-full">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-gray-800">
            <a
              href="tel:"
              className="flex cursor-pointer items-center gap-1.5 underline underline-offset-2 hover:text-gray-950"
            >
              <img src={PhoneIcon} alt="" className="h-4 w-4" />
              Book A Call
            </a>
            <span className="text-gray-300">|</span>
            <a
              href="https://wa.me/"
              className="flex cursor-pointer items-center gap-1.5 text-green-600 underline underline-offset-2 hover:text-green-700"
            >
              <img src={WhatsAppIcon} alt="" className="h-4 w-4" />
              WhatsApp
            </a>
            <span className="text-gray-300">|</span>
            <a
              href="mailto:"
              className="flex cursor-pointer items-center gap-1.5 hover:text-gray-950"
            >
              <img src={MailIcon} alt="" className="h-4 w-4" />
              Email us
            </a>
          </div>

          <h2 className="mt-6 text-lg font-bold leading-snug text-gray-900 sm:mt-8 sm:text-xl">
            Startups &amp; Fortune 500+ companies
          </h2>

          <ul className="mt-5 space-y-4 sm:mt-6 sm:space-y-5">
            {HIGHLIGHTS.map((item) => (
              <li key={item.title} className="flex items-start gap-3">
                <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-gray-200 text-gray-600">
                  <img src={item.icon} alt="" className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-gray-900">
                    {item.title}
                  </p>
                  <p className="text-sm text-gray-500">{item.subtitle}</p>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-16 grid grid-cols-2 gap-2 sm:grid-cols-4">
            {BADGES.map((badge) => (
              <div
                key={badge.name}
                className="flex h-14 flex-col items-center justify-center rounded border border-gray-200 bg-gray-100 p-3 text-center"
              >
                <img
                  src={badge.img}
                  alt={badge.name}
                  className="h-full max-w-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </aside>

      {/* ---------------- Form ---------------- */}
      <main className="flex-1 pr-6! pl-6 py-10 md:py-24 md:pr-20! sm:p-8 md:p-10 flex items-center">
        <div className=" w-full">
          <h1 className="text-2xl font-extrabold text-gray-900 sm:text-3xl md:text-4xl">
            Book Free Consultation
          </h1>
          <p className="mt-2 text-sm text-gray-500 sm:text-base">
            Guaranteed response within 8 business hours.
          </p>

          <form
            className="mt-6 grid grid-cols-1 gap-x-6 gap-y-6 sm:mt-8 md:grid-cols-2"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="relative">
              <label
                htmlFor="fullName"
                className="absolute -top-2.5 left-3 bg-white px-1 text-xs text-gray-600"
              >
                Full Name
              </label>
              <input
                id="fullName"
                type="text"
                placeholder="Enter Your Name"
                className="w-full rounded-lg border border-gray-900 px-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-900"
              />
            </div>

            <div className="relative">
              <label
                htmlFor="email"
                className="absolute -top-2.5 left-3 bg-white px-1 text-xs text-gray-600"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter Your Email"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400"
              />
            </div>

            <div className="relative">
              <label
                htmlFor="phone"
                className="absolute -top-2.5 left-3 bg-white px-1 text-xs text-gray-600"
              >
                Phone No.
              </label>
              <div className="flex items-center rounded-lg border border-gray-300 px-3 py-3 focus-within:ring-1 focus-within:ring-gray-400">
                <span className="mr-1 text-base leading-none">🇮🇳</span>
                <span className="text-sm text-gray-700">+91</span>
                <span className="mx-1 text-[10px] text-gray-400">▾</span>
                <span className="mx-2 h-4 w-px flex-shrink-0 bg-gray-300" />
                <input
                  id="phone"
                  type="tel"
                  placeholder="(Optional)"
                  className="w-full min-w-0 text-sm text-gray-700 placeholder-gray-400 focus:outline-none"
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
                  className="w-full resize-none rounded-t-lg px-4 pt-4 pb-2 text-sm text-gray-700 focus:outline-none"
                />
                <div
                  className="flex items-center justify-between gap-3 border-t border-gray-200 px-3 py-2"
                  onDragOver={(e) => e.preventDefault()}
                  onDrop={(e) => {
                    e.preventDefault();
                    const file = e.dataTransfer.files?.[0];
                    if (file) setFileName(file.name);
                  }}
                >
                  <label className="cursor-pointer rounded border border-gray-300 px-3 py-1 text-xs text-gray-500 hover:bg-gray-50">
                    Browse | Drop Files Here
                    <input
                      type="file"
                      className="hidden"
                      onChange={(e) =>
                        setFileName(e.target.files?.[0]?.name || "")
                      }
                    />
                  </label>
                  {fileName && (
                    <span className="truncate text-xs text-gray-500">
                      {fileName}
                    </span>
                  )}
                </div>
              </div>
            </div>

            <div className="flex flex-col items-stretch gap-4 sm:flex-row sm:items-center sm:justify-between md:col-span-2">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-2 rounded-lg border border-dashed border-gray-300 px-3 py-2 text-base text-gray-600 sm:px-4 sm:text-lg">
                  <span>{num1}</span>
                  <span>+</span>
                  <span>{num2}</span>
                  <img
                    src={RefreshIcon}
                    alt="Refresh captcha"
                    role="button"
                    tabIndex={0}
                    onClick={refreshCaptcha}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        refreshCaptcha();
                      }
                    }}
                    className="ml-2 h-4 w-4 flex-shrink-0 cursor-pointer select-none"
                  />
                </div>
                <span className="text-base text-gray-600 sm:text-lg">=</span>
                <input
                  type="text"
                  placeholder="??"
                  aria-label="Captcha answer"
                  value={captchaAnswer}
                  onChange={(e) => setCaptchaAnswer(e.target.value)}
                  className="h-11 w-14 flex-shrink-0 rounded-lg border border-gray-300 text-center text-sm text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400"
                />
              </div>

              <button
                type="submit"
                className="flex items-center justify-center gap-2 rounded-full border border-gray-900 px-6 py-3 text-sm font-medium text-gray-900 transition-colors hover:bg-gray-900 hover:text-white min-w-[150px]"
              >
                Enquire Now
                <img src={ArrowRight} alt="" className="h-4 w-4" />
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default BookConsultationForm;
