"use client";

import { useEffect, useState } from "react";

const WIDTH_KEY = "max-width-preference";
const widthOptions = ["max-w-screen-lg", "max-w-screen-2xl", "max-w-full"] as const;
const labels = ["narrow", "wide", "full"] as const;
type WidthOption = (typeof widthOptions)[number];

function getStored(): WidthOption {
  if (typeof window === "undefined") return widthOptions[2];
  return (localStorage.getItem(WIDTH_KEY) as WidthOption) || widthOptions[2];
}

export function useMaxWidth() {
  const [width, setWidth] = useState<WidthOption>(widthOptions[2]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setWidth(getStored());
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    localStorage.setItem(WIDTH_KEY, width);
    const body = document.body;
    widthOptions.forEach((w) => body.classList.remove(w));
    body.classList.add(width);
  }, [width, mounted]);

  return { width, setWidth, mounted };
}

export function WidthToggle() {
  const { width, setWidth, mounted } = useMaxWidth();

  if (!mounted) return <div className="w-5 h-5" />;

  const currentIndex = widthOptions.indexOf(width);
  const nextIndex = (currentIndex + 1) % widthOptions.length;

  return (
    <button
      onClick={() => setWidth(widthOptions[nextIndex])}
      aria-label="Toggle page width"
      title={`Width: ${labels[currentIndex]}`}
      className="p-0.5"
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
        <path fillRule="evenodd" d="M1 4a1 1 0 011-1h16a1 1 0 011 1v8a1 1 0 01-1 1H2a1 1 0 01-1-1V4zm12 3.5a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 0113 7.5zm-6 0a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 017 7.5z" clipRule="evenodd" />
        {currentIndex === 0 && <path d="M9 7.5a.75.75 0 00-.75.75v1.5a.75.75 0 001.5 0v-1.5A.75.75 0 009 7.5zM11 7.5a.75.75 0 00-.75.75v1.5a.75.75 0 001.5 0v-1.5A.75.75 0 0011 7.5z" />}
        <path d="M1 14.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H1.75a.75.75 0 01-.75-.75zM1 16.75a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H1.75a.75.75 0 01-.75-.75z" />
      </svg>
    </button>
  );
}
