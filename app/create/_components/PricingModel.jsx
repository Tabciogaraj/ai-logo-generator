"use client";
import React, { useEffect } from "react";
import HeadingDescription from "./HeadingDescription";
import Lookup from "../../_data/Lookup";
import Image from "next/image";
import Link from "next/link";
import { SignInButton, useUser } from "@clerk/nextjs";

function PricingModel({ formData }) {

  const {user}=useUser();
  useEffect(() => {
    if (formData?.title && typeof window !== "undefined") {
      localStorage.setItem("formData", JSON.stringify(formData));
    }
  }, [formData]);

  return (
    <div className="my-10">
      <HeadingDescription
        title={Lookup.LogoPricingModelTitle}
        description={Lookup.LogoPricingModelDesc}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-5">
        {Lookup.pricingOption.map((pricing, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-5 rounded-xl border"
          >
            <Image
              src={pricing.icon}
              alt={pricing.title}
              width={60}
              height={60}
            />
            <h2 className="font-medium text-xl">{pricing.title}</h2>
            <div>
              {pricing.features.map((feature, index) => (
                <h2 className="text-lg mt-3" key={index}>
                  {feature}
                </h2>
              ))}
            </div>
            {user?
            <Link
            href="#"
            className="cursor-pointer flex items-center gap-2 px-4 py-2 mt-8 bg-primary text-white rounded-md hover:bg-secondary"
          >{pricing.button}</Link>
            :   <SignInButton mode="modal" redirectUrl={"/generate-logo?type="+pricing.title}>
            <span className="cursor-pointer flex items-center gap-2 px-4 py-2 mt-8 bg-primary text-white rounded-md hover:bg-secondary">
              {pricing.button}
            </span>
          </SignInButton>
            }
            
          </div>
        ))}
      </div>
    </div>
  );
}

export default PricingModel;
