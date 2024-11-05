'use client'

import React, { useState, useEffect, useRef } from "react"

interface BoxProps {
  heading: string
  subheading?: string
  children?: React.ReactNode
  maxHeight?: string
  backgroundImage?: string
  quotes?: string
}

export default function Box({ heading, subheading, children, maxHeight, backgroundImage }: BoxProps) {
  const [isScrolledToBottom, setIsScrolledToBottom] = useState(false)
  const contentRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (contentRef.current) {
        const { scrollTop, scrollHeight, clientHeight } = contentRef.current
        setIsScrolledToBottom(scrollTop + clientHeight >= scrollHeight - 1)
      }
    }

    const contentElement = contentRef.current
    if (contentElement) {
      contentElement.addEventListener("scroll", handleScroll)
    }

    const resizeObserver = new ResizeObserver(() => {
      handleScroll()
    })

    if (containerRef.current) {
      resizeObserver.observe(containerRef.current)
    }

    return () => {
      if (contentElement) {
        contentElement.removeEventListener("scroll", handleScroll)
      }
      resizeObserver.disconnect()
    }
  }, [])

  return (
    <div className="relative" ref={containerRef}>
      <div
        className={`relative bg-white dark:bg-[#1e1e1e] w-full min-w-[165px] border-gray-300 dark:border-[#545454] border-[0.5px] rounded-[8px] border-solid shadow-inner dark:shadow-inner-custom overflow-hidden`}
        style={{
          height: backgroundImage ? "352px" : "auto",
          minHeight: backgroundImage ? "352px" : "165px",
          maxHeight: maxHeight || "auto",
        }}
      >
        {backgroundImage && (
          <>
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${backgroundImage})` }}
            />
            <div className="absolute inset-0 bg-black/20 dark:bg-black/20 backdrop-blur-[2px] z-10" />
          </>
        )}
        {!backgroundImage && (
          <div className={`sticky w-full h-[37px] top-0 bg-white/80 dark:bg-[#1e1e1e]/80 z-20 border-gray-300 dark:border-[#545454] border-b-[0.5px] flex items-end justify-between`}>
            <div className="pb-[10px] px-[10px] flex w-full justify-between items-center">
              <h2 className="text-[11.5px] text-black dark:text-white">
                {heading}
              </h2>
              <p className="text-[11.5px] text-gray-600 dark:text-[#8d8d8d]">
                {subheading}
              </p>
            </div>
          </div>
        )}
        <div 
          className="relative z-20 px-[10px] overflow-y-auto"
          style={{
            maxHeight: backgroundImage
              ? `calc(352px - 37px)`
              : maxHeight
              ? `calc(${maxHeight} - 37px)`
              : 'none',
            height: backgroundImage ? `calc(352px - 37px)` : 'auto',
          }}
          ref={contentRef}
        >
          {children}
        </div>
      </div>
      {!backgroundImage && maxHeight && !isScrolledToBottom && (
        <div className="absolute left-0 right-0 bottom-0 h-12 bg-gradient-to-t from-white/80 dark:from-[#1e1e1e]/80 to-transparent pointer-events-none rounded-b-[10px]" />
      )}
    </div>
  )
}