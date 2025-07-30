"use client";

import React from "react";
import { ElegantImage } from "../shared/BgImga";

// Glass Effect Wrapper Component
const GlassEffect = ({
  children,
  className = "",
  style = {},
  href,
  target = "_blank",
}) => {
  const glassStyle = {
    boxShadow: "0 6px 6px rgba(0, 0, 0, 0.2), 0 0 20px rgba(0, 0, 0, 0.1)",
    transitionTimingFunction: "cubic-bezier(0.175, 0.885, 0.32, 2.2)",
    ...style,
  };

  const content = (
    <div
      className={`relative flex font-semibold overflow-hidden text-black cursor-pointer transition-all duration-700 ${className}`}
      style={glassStyle}
    >
      {/* Glass Layers */}
      <div
        className="absolute inset-0 z-0 overflow-hidden rounded-inherit rounded-3xl"
        style={{
          backdropFilter: "blur(3px)",
          filter: "url(#glass-distortion)",
          isolation: "isolate",
        }}
      />
      <div
        className="absolute inset-0 z-10 rounded-inherit"
        style={{ background: "rgba(255, 255, 255, 0.25)" }}
      />
      <div
        className="absolute inset-0 z-20 rounded-inherit rounded-3xl overflow-hidden"
        style={{
          boxShadow:
            "inset 2px 2px 1px 0 rgba(255, 255, 255, 0.5), inset -1px -1px 1px 1px rgba(255, 255, 255, 0.5)",
        }}
      />

      {/* Content */}
      <div className="relative z-30">{children}</div>
    </div>
  );

  return href ? (
    <a href={href} target={target} rel="noopener noreferrer" className="block">
      {content}
    </a>
  ) : (
    content
  );
};

// SVG Filter Component
const GlassFilter = () => (
  <svg style={{ display: "none" }}>
    <filter
      id="glass-distortion"
      x="0%"
      y="0%"
      width="100%"
      height="100%"
      filterUnits="objectBoundingBox"
    >
      <feTurbulence
        type="fractalNoise"
        baseFrequency="0.001 0.005"
        numOctaves="1"
        seed="17"
        result="turbulence"
      />
      <feComponentTransfer in="turbulence" result="mapped">
        <feFuncR type="gamma" amplitude="1" exponent="10" offset="0.5" />
        <feFuncG type="gamma" amplitude="0" exponent="1" offset="0" />
        <feFuncB type="gamma" amplitude="0" exponent="1" offset="0.5" />
      </feComponentTransfer>
      <feGaussianBlur in="turbulence" stdDeviation="3" result="softMap" />
      <feSpecularLighting
        in="softMap"
        surfaceScale="5"
        specularConstant="1"
        specularExponent="100"
        lightingColor="white"
        result="specLight"
      >
        <fePointLight x="-200" y="-200" z="300" />
      </feSpecularLighting>
      <feComposite
        in="specLight"
        operator="arithmetic"
        k1="0"
        k2="1"
        k3="1"
        k4="0"
        result="litImage"
      />
      <feDisplacementMap
        in="SourceGraphic"
        in2="softMap"
        scale="200"
        xChannelSelector="R"
        yChannelSelector="G"
      />
    </filter>
  </svg>
);

// Main Component
export const Component = () => {
  const dockIcons = [
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png",
      alt: "Inst",
      link: "https://www.instagram.com/__abdufattokhov__/",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Telegram_Messenger.png",
      alt: "Tg",
      link: "https://t.me/abdufattokh0v",
    },
    {
      src: "/public/assets/photo_2024-11-16_12-58-23.jpg",
      alt: "Tg-chanel",
      link: "https://t.me/+a8Z8yBGWw6Q5ZTli",
    },
  ];

  return (
    <div
      className="min-h-screen h-full flex items-center justify-center font-light relative overflow-hidden w-full"
      style={{
        background: `url("https://images.unsplash.com/photo-1432251407527-504a6b4174a2?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D") center center`,
        animation: "moveBackground 60s linear infinite",
      }}
    >
      <div className="absolute inset-0 overflow-hidden ">
        <ElegantImage
          src="/assets/IMG_7610.JPG"
          alt="img"
          width={150}
          height={200}
          rotate={10}
          delay={0.6}
          className="absolute left-[3%] top-[2%] rounded-xl"
        />

        <ElegantImage
          src="/assets/IMG_7679.JPG"
          alt="img"
          width={135}
          height={180}
          rotate={-8}
          delay={0.7}
          className="absolute right-[0%] top-[10%] rounded-xl"
        />
        <ElegantImage
          src="/assets/IMG_7688.JPG"
          alt="img"
          width={115}
          height={150}
          rotate={15}
          delay={0.9}
          className="absolute right-[12%] bottom-[5%] rounded-xl"
        />

        <ElegantImage
          src="/assets/IMG_7689.JPG"
          alt="img"
          width={120}
          height={160}
          rotate={-12}
          delay={1.0}
          className="absolute left-[30%] top-[25%] rounded-xl"
        />

        <ElegantImage
          src="/assets/IMG_7867.JPG"
          alt="img"
          width={135}
          height={180}
          rotate={20}
          delay={1.1}
          className="absolute left-[3%] top-[40%] rounded-xl"
        />

        <ElegantImage
          src="/assets/IMG_7869.JPG"
          alt="img"
          width={150}
          height={200}
          rotate={-10}
          delay={1.2}
          className="absolute left-[10%] bottom-[15%] rounded-xl "
        />

        <ElegantImage
          src="/assets/IMG_7878.JPG"
          alt="img"
          width={155}
          height={200}
          rotate={8}
          delay={1.3}
          className="absolute right-[1%] bottom-[30%] rounded-xl"
        />
      </div>

      <div className="flex flex-col items-center justify-center w-full max-w-3xl px-4 gap-10">
        {/* Title Block */}
        <GlassEffect className="rounded-3xl px-8 py-6 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-wide drop-shadow-md">
            Welcome to my World
          </h1>
        </GlassEffect>

        {/* Social Icons Block */}
        <GlassEffect className="rounded-3xl px-6 py-4">
          <ul className="flex items-center justify-center gap-4 sm:gap-6">
            {dockIcons.map((i, index) => (
              <li key={index}>
                <a href={i.link} target="_blank" rel="noopener noreferrer">
                  <img
                    className="w-14 h-14 sm:w-18 sm:h-16 transition-all duration-500 hover:scale-110 hover:rotate-2 cursor-pointer drop-shadow-md rounded-xl"
                    src={i.src}
                    alt={i.alt}
                  />
                </a>
              </li>
            ))}
          </ul>
        </GlassEffect>

        <GlassEffect className="rounded-3xl px-6 py-4">
          <div className="flex col items-center justify-center gap-6">
            <img
              className="w-14 h-14 sm:w-16 sm:h-16 transition-all duration-500 hover:scale-110 hover:rotate-2 cursor-pointer drop-shadow-md"
              src="https://cdn-icons-png.flaticon.com/512/724/724664.png"
              alt=""
            />
            <h1 className="text-white text-2xl">+998 99 835 79 85</h1>
          </div>
        </GlassEffect>
      </div>
    </div>
  );
};
