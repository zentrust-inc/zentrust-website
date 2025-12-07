"use client"

import { useEffect, useRef, useState } from 'react'
import { animate, useInView } from 'framer-motion'

type CounterProps = {
  from?: number
  to: number
  duration?: number
  className?: string
  suffix?: string
  prefix?: string
  startDelayMs?: number
}

export function Counter({
  from = 0,
  to,
  duration = 1.2,
  className,
  suffix = '',
  prefix = '',
  startDelayMs = 50,
}: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.6 })
  const [value, setValue] = useState(from)

  useEffect(() => {
    if (!inView) return
    let stop: (() => void) | undefined
    const timer = setTimeout(() => {
      const controls = animate(from, to, {
        duration,
        ease: 'easeOut',
        onUpdate: (v) => setValue(Math.round(v)),
      })
      stop = () => controls.stop()
    }, startDelayMs)

    return () => {
      clearTimeout(timer)
      stop?.()
    }
  }, [from, to, duration, inView, startDelayMs])

  return (
    <span ref={ref} className={className}>
      {prefix}
      {value.toLocaleString()}
      {suffix}
    </span>
  )
}
