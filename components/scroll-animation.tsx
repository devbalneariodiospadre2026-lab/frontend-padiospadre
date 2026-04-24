"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { cn } from "@/lib/utils"

type AnimationType = "fade-up" | "fade-down" | "fade-left" | "fade-right" | "scale-up" | "blur-in"

interface ScrollAnimationProps {
  children: React.ReactNode
  animation?: AnimationType
  delay?: number
  className?: string
  threshold?: number
}

export function ScrollAnimation({
  children,
  animation = "fade-up",
  delay = 0,
  className,
  threshold = 0.1,
}: ScrollAnimationProps) {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>({ threshold })

  const animationClasses: Record<AnimationType, string> = {
    "fade-up": "translate-y-10 opacity-0",
    "fade-down": "-translate-y-10 opacity-0",
    "fade-left": "translate-x-10 opacity-0",
    "fade-right": "-translate-x-10 opacity-0",
    "scale-up": "scale-95 opacity-0",
    "blur-in": "blur-sm opacity-0",
  }

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-700 ease-out",
        isVisible ? "translate-x-0 translate-y-0 scale-100 opacity-100 blur-0" : animationClasses[animation],
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

interface StaggerContainerProps {
  children: React.ReactNode
  className?: string
  staggerDelay?: number
  animation?: AnimationType
  threshold?: number
}

export function StaggerContainer({
  children,
  className,
  staggerDelay = 100,
  animation = "fade-up",
  threshold = 0.1,
}: StaggerContainerProps) {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>({ threshold })

  const animationClasses: Record<AnimationType, string> = {
    "fade-up": "translate-y-10 opacity-0",
    "fade-down": "-translate-y-10 opacity-0",
    "fade-left": "translate-x-10 opacity-0",
    "fade-right": "-translate-x-10 opacity-0",
    "scale-up": "scale-95 opacity-0",
    "blur-in": "blur-sm opacity-0",
  }

  return (
    <div ref={ref} className={className}>
      {Array.isArray(children)
        ? children.map((child, index) => (
            <div
              key={index}
              className={cn(
                "transition-all duration-700 ease-out",
                isVisible ? "translate-x-0 translate-y-0 scale-100 opacity-100 blur-0" : animationClasses[animation]
              )}
              style={{ transitionDelay: isVisible ? `${index * staggerDelay}ms` : "0ms" }}
            >
              {child}
            </div>
          ))
        : children}
    </div>
  )
}
