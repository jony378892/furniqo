"use client";

import React from "react";
import { Typewriter } from "react-simple-typewriter";

export default function HeroTypewriter() {
  return (
    <Typewriter
      words={[
        "Wooden furniture",
        "Metal furniture",
        "Glass furniture",
        "Plastic furniture",
      ]}
      cursor={true}
      loop={false}
    />
  );
}
