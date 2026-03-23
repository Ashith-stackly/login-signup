"use client";

import Link from "next/link";
import { FaCheckCircle } from "react-icons/fa";

const plans = [
  {
    name: "Basic",
    oldPrice: "$80",
    newPrice: "$40",
    features: [
      "Free domain for 1 year",
      "20 GB storage space",
      "Multi-cloud hosting",
      "Light marketing suite",
      "2 site collaborators",
    ],
  },
  {
    name: "Business Plan",
    oldPrice: "$300",
    newPrice: "$150",
    isRecommended: true,
    features: [
      "Free domain for 1 year",
      "100 GB storage space",
      "Multi-cloud hosting",
      "Standard marketing suite",
      "Accept payments",
      "Basic eCommerce",
      "Scheduling and services",
      "10 site collaborators",
    ],
  },
  {
    name: "Advanced",
    oldPrice: "$400",
    newPrice: "$180",
    features: [
      "Free domain for 1 year",
      "300 GB storage space",
      "Multi-cloud hosting",
      "Legacy marketing suite",
      "Accept payments",
      "Basic eCommerce",
      "Scheduling and services",
      "5 site collaborators",
    ],
  },
];

export default function PlanningPage() {
  return (
    <main className="min-h-screen bg-[#efefef]">
      <nav className="w-full bg-[#06224C]">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-3 py-2 sm:px-6">
          <div className="flex items-center gap-6">
            <div className="flex h-7 w-[78px] items-center justify-center overflow-hidden rounded-[999px] bg-white sm:h-8 sm:w-[92px]">
              <img
                src="/stackly-logo.webp"
                alt="Stackly logo"
                className="h-[16px] w-auto sm:h-[18px]"
              />
            </div>

            <nav className="hidden items-center gap-8 text-[11px] text-white/90 md:flex">
              <span>Workspace</span>
              <span>My Websites</span>
              <span>Templates</span>
              <span>Domains</span>
              <span>Billing</span>
            </nav>
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden items-center gap-2 lg:flex">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white">
                <img
                  src="/logoplan.png"
                  alt="Logo 1"
                  className="h-4 w-4 object-contain"
                />
              </span>
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white">
                <img
                  src="/logoplan2.png"
                  alt="Logo 2"
                  className="h-4 w-4 object-contain"
                />
              </span>
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white">
                <img
                  src="/logoplan3.png"
                  alt="Logo 3"
                  className="h-4 w-4 object-contain"
                />
              </span>
            </div>

            <div className="hidden items-center gap-2 lg:flex">
              <img
                src="/photo.png"
                alt="Profile"
                className="h-7 w-7 rounded-full object-cover"
              />
              <span className="text-[11px] text-white/80 whitespace-nowrap">
                Srinivas Penakota
              </span>
              <svg
                width="10"
                height="10"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden
              >
                <path
                  d="M3.5 5L6 7.5L8.5 5"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  opacity="0.85"
                />
              </svg>
            </div>
          </div>
        </div>
      </nav>

      <div className="mx-auto max-w-6xl px-3 py-4 sm:px-6 sm:py-6">
        <div className="rounded-sm border border-[#dbe3ef] bg-white shadow-sm">
          <section className="px-3 py-5 sm:px-8 sm:py-8">
            <div className="mx-auto mb-4 max-w-5xl rounded bg-gradient-to-r from-[#06224C] to-[#1A5BBC] px-4 py-2 text-center text-[11px] font-semibold text-white sm:text-xs">
              Upgrade Now: Get - 50% Off on Selected Plans
            </div>

          <div className="rounded bg-[#edf3fb] px-3 py-6 sm:px-8">
            <h1 className="text-center text-3xl font-bold text-[#0b3268] sm:text-[44px] sm:leading-tight">
              Choose the Best Plan for You
            </h1>
            <p className="mt-2 text-center text-[11px] text-[#6d7f9d] sm:text-xs">
              Create your website for free and upgrade when you’re ready.
            </p>

            <div className="mt-3 text-center">
              <Link
                href="/login"
                className="inline-flex items-center rounded-full bg-gradient-to-r from-[#06224C] to-[#1A5BBC] px-5 py-2 text-[11px] font-semibold text-white hover:opacity-90 sm:text-xs"
              >
                Start Your Free Plan
              </Link>
            </div>

            <p className="mt-4 text-center text-[11px] font-semibold text-[#2d3f5d]">
              What you get with every plan:
            </p>
            <div className="mt-2 flex flex-wrap items-center justify-center gap-x-7 gap-y-2 text-[10px] text-[#63789b] sm:text-[11px]">
              <span>Custom Domain</span>
              <span>Reliable web hosting</span>
              <span>24/7 customer care</span>
            </div>

            <div className="mt-4 text-center text-[11px] font-semibold text-[#1f3861]">
              Bill Monthly <span className="mx-2 text-gray-400">◉</span> Bill Yearly
            </div>

            <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
              {plans.map((plan) => (
                <article
                  key={plan.name}
                  className="group relative rounded border border-[#d8e1ec] bg-white p-4 text-[#17335c] shadow-sm transition-all duration-200 hover:border-transparent hover:bg-gradient-to-b hover:from-[#06224C] hover:to-[#1A5BBC] hover:text-white hover:shadow-md"
                >
                  {plan.isRecommended && (
                    <div className="absolute right-2 top-2 z-10 rounded-[3px] border border-white/10 bg-[#1A5BBC] px-2 py-0.5 text-[8px] font-bold leading-3 text-white shadow-[0_2px_6px_rgba(0,0,0,0.12)] transition-colors group-hover:bg-white group-hover:text-[#06224C] group-hover:border-[#06224C]/40 hover:bg-white hover:text-[#06224C] hover:border-[#06224C]/40">
                      RECOMMENDED
                    </div>
                  )}
                  <div className="mb-3 flex items-center justify-between gap-2">
                    <div>
                      <h2 className="text-base font-bold">{plan.name}</h2>
                      <p className="text-xs opacity-80">Per month</p>
                    </div>
                  </div>

                  <div className="mb-3 flex items-end justify-between">
                    <div className="text-sm opacity-70 line-through">{plan.oldPrice}</div>
                    <div className="rounded border border-[#bed2f3] bg-[#f4f8ff] px-2 py-1 text-lg font-bold text-[#0f3e87] group-hover:border-white/30 group-hover:bg-white group-hover:text-[#0f3e87]">
                      {plan.newPrice}
                    </div>
                  </div>

                  <ul className="space-y-2 text-xs leading-relaxed sm:text-sm">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <FaCheckCircle className="mt-0.5 text-[11px] opacity-90" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/login"
                    className="mt-4 block rounded-full bg-gradient-to-r from-[#06224C] to-[#1A5BBC] py-2 text-center text-sm font-semibold text-white shadow-sm transition-colors transition-opacity duration-200 group-hover:bg-none group-hover:bg-white group-hover:text-[#154fa2] group-hover:opacity-100 hover:bg-none hover:bg-white hover:text-[#154fa2]"
                  >
                    Purchase Plan
                  </Link>
                </article>
              ))}
            </div>
          </div>
          </section>
        </div>
      </div>
    </main>
  );
}
