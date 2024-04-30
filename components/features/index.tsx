import cn from 'clsx'
import {motion} from 'framer-motion'
import Link from 'next/link'
import React, {ReactNode} from 'react'
import styles from './style.module.css'

export interface Props {
  title: string
  large?: boolean
  centered?: boolean
  lightOnly?: boolean
  className: string
  href: string
  index: number
  children: any
  icon: any
  pad?: boolean
}

export function Feature({title, children, icon: FeatureIcon, large, centered, lightOnly, className, href, index, pad, ...props}: Props) {
  return (
    <motion.div
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      viewport={{once: true, margin: '-20px'}}
      transition={{duration: Math.min(0.25 + index * 0.2, 0.8)}}
      className={"rounded-2xl px-4 py-5 outline-x outline-t " + cn(
        styles.feature,
        large && styles.large,
        centered && styles.centered,
        lightOnly && styles['light-only'],
        className
      )}
      {...props}
    >

      <div className={"p-1.5 rounded-full absolute border border-neutral-800 bg-gradient-to-br from-neutral-500 to-black to-50% -top-[4.5rem] left-1/2 -translate-x-1/2"}>
        <div className="w-[5.5rem] h-[5.5rem]">
          <div className="flex justify-center items-center w-full h-full text-neutral-300 relative">
            <div className="absolute w-full h-full rounded-full bg-gradient-to-tl from-[rgba(0,0,0,0.3)] from-5% to-60%">

            </div>
            <FeatureIcon />
          </div>
        </div>
      </div>

      <div className={"mt-5 flex flex-col gap-y-5 pb-5 " + (!pad ? "sm:pb-0" : "")}>
        <h2 className="text-3xl">{title}</h2>
        <div className="py-3 mb-4">
          <span className="text-neutral-400">{children}</span>
        </div>
      </div>

      {href ? (
        <Link className={styles.link} href={href}>
          <svg width="1.5em"
               xmlns="http://www.w3.org/2000/svg"
               viewBox="0 0 20 20"
               fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </Link>
      ) : null}
    </motion.div>
  )
}

export function Features({children}: { children: ReactNode }) {
  return <div className={styles.features}>{children}</div>
}

export function Features2({children}: { children: ReactNode }) {
  return <div className={[styles.features, styles.w2].join(" ")}>{children}</div>
}
