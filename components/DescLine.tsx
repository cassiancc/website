import React from 'react'
import {motion} from 'framer-motion'

export interface Props {
  children: any
  icon: any
  right?: boolean
  index: number
}

export default function DescLine({children, index, icon: DescIcon, right}: Props) {
  return <>
    <motion.div
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      viewport={{once: true, margin: '-20px'}}
      transition={{duration: Math.min(0.25 + index * 0.2, 0.8)}}
      className={`content-container flex sm:flex-nowrap sm:flex-row gap-4 py-2 justify-center items-center ${right ? 'flex-wrap-reverse' : 'flex-col'}`}
    >
      {!right ? (
        <div className="w-fit h-fit rounded-xl p-3 border border-neutral-600">
          <DescIcon/>
        </div>
      ) : null}

      <p className="text-2xl text-neutral-500 text-center">
        {children}
      </p>

      {right ? (
        <div className="w-fit rounded-xl p-3 border border-neutral-600">
          <DescIcon/>
        </div>
      ) : null}
    </motion.div>
  </>
}
