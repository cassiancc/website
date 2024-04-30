import React from 'react'

export interface Props {
  children: any
  icon: any
  right?: boolean
}

export default function DescLine({children, icon: DescIcon, right}: Props) {
  return <>
    <div className="content-container flex flex-row gap-4 py-2">
      {!right ? (
        <div className="h-fit rounded-xl p-3 border border-neutral-600">
          <DescIcon/>
        </div>
      ) : null}

      <p className="text-2xl text-neutral-500 text-center">
        {children}
      </p>

      {right ? (
        <div className="h-fit rounded-xl p-3 border border-neutral-600">
          <DescIcon/>
        </div>
      ) : null}
    </div>
  </>
}
