import React from "react";

import CursorSVG from "@/public/assets/CursorSVG";

type Props = {
  color: string;
  message: string;
  x: number;
  y: number;
};

export const Cursor = ({ color, x, y, message }: Props) => {
  return (
    <div
      className="pointer-events-none absolute left-0 top-0"
      style={{ transform: `translateX(${x}px) translateY(${y}px)` }}
    >
      <CursorSVG color={color} />

      {message && (
        <div
          className="absolute top-5 left-2 rounded-3xl px-4 py-2"
          style={{
            backgroundColor: color,
          }}
        >
          <p className="text-white whitespace-nowrap text-sm leading-relaxed">
            {message}
          </p>
        </div>
      )}
    </div>
  );
};
