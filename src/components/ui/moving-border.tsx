"use client";
import React, { ComponentType, HTMLAttributes, ReactNode, useRef, useState } from "react";
import { motion, useAnimationFrame, useMotionValue, useTransform, MotionProps } from "framer-motion";

function cn(...classes: (string | undefined | boolean)[]): string {
  return classes.filter(Boolean).join(' ');
}

type ButtonProps = {
  borderRadius?: string;
  children: ReactNode;
  as?: string | React.ComponentType<any>;
  containerClassName?: string;
  borderClassName?: string;
  duration?: number;
  className?: string;
} & HTMLAttributes<HTMLElement> & MotionProps;

export function Button({
  borderRadius = "1.25rem",
  children,
  as: Component = "button" as any,
  containerClassName,
  borderClassName,
  duration = 3000,
  className,
  ...otherProps
}: ButtonProps) {
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

interface MovingBorderProps {
  children: ReactNode;
  duration?: number;
  strokeWidth?: number;
  color?: string;
  segmentPx?: number;
  [key: string]: any;
}

export const MovingBorder = ({
  children,
  duration = 3000,
  strokeWidth = 2,
  color = "#8cf056",
  segmentPx = 120,
  ...otherProps
}: MovingBorderProps) => {
  const pathRef = useRef<SVGRectElement>(null);
  const offset = useMotionValue(0);
  const [length, setLength] = useState<number>(0);

  useAnimationFrame((time: number) => {
    if (pathRef.current) {
      const len = pathRef.current.getTotalLength();
      if (len && len !== length) setLength(len);
      if (len) {
        const pxPerMs = len / duration;
        offset.set((time * pxPerMs) % len);
      }
    }
  });

  const dasharray = useTransform(offset, (latest) => {
    const len = pathRef.current?.getTotalLength() ?? length;
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
export function MovingBorderDemo() {
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