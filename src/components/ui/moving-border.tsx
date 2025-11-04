"use client";
import React, { useRef, useState } from "react";
import { motion, useAnimationFrame, useMotionValue, useTransform } from "framer-motion";

function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}

export function Button({
  borderRadius = "1.25rem",
  children,
  as: Component = "button",
  containerClassName,
  borderClassName,
  duration,
  className,
  ...otherProps
}) {
  return (
    <Component
      className={cn(
        "relative  w-40 overflow-hidden bg-transparent p-[1px] text-xl",
        containerClassName,
      )}
      style={{
        borderRadius: borderRadius,
      }}
      {...otherProps}
    >
      <div
        className="absolute inset-0"
        style={{ borderRadius: `calc(${borderRadius} * 0.96)` }}
      >
        <MovingBorder duration={duration}>
          <div
            className={cn(
              "h-2 w-2 bg-[radial-gradient(#0ea5e9_80%,transparent_81%)] opacity-[0.9]",
              borderClassName,
            )}
          />
        </MovingBorder>
      </div>

      <div
        className={cn(
          "relative flex h-full w-full items-center justify-center border border-slate-800 bg-slate-900/[0.8] text-sm text-white antialiased backdrop-blur-xl",
          className,
        )}
        style={{
          borderRadius: `calc(${borderRadius} * 0.96)`,
        }}
      >
        {children}
      </div>
    </Component>
  );
}

export const MovingBorder = ({
  children,
  duration = 3000,
  strokeWidth = 2,
  color = "#8cf056",
  segmentPx = 120,
  ...otherProps
}) => {
  const pathRef = useRef(null);
  const offset = useMotionValue(0);
  const [length, setLength] = useState(0);

  useAnimationFrame((time) => {
    const len = pathRef.current?.getTotalLength?.() ?? 0;
    if (len && len !== length) setLength(len);
    if (len) {
      const pxPerMs = len / duration;
      offset.set((time * pxPerMs) % len);
    }
  });

  const dasharray = useTransform(offset, () => {
    const len = pathRef.current?.getTotalLength?.() ?? length;
    const seg = Math.min(segmentPx, Math.max(1, len - 1));
    return `${seg} ${Math.max(0, len - seg)}`;
  });

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      className="absolute h-full w-full"
      width="100%"
      height="100%"
      {...otherProps}
    >
      <motion.rect
        fill="none"
        width="100%"
        height="100%"
        rx="0"
        ry="0"
        ref={pathRef}
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="square"
        style={{ strokeDasharray: dasharray, strokeDashoffset: offset }}
      />
    </svg>
  );
};

// Demo component
export default function App() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-950">
      <Button
        borderRadius="1rem"
        className="bg-slate-900 text-white border-slate-700"
      >
        Click Me
      </Button>
    </div>
  );
}