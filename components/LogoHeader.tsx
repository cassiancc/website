import React from 'react';

export interface Props {
  title: string
  curseforge?: string
  modrinth?: string
  github?: string
  icon: any
}

export default function LogoHeader({title, curseforge, modrinth, github, icon: Icon}: Props) {
  return <>
    <div className="flex flex-row w-full items-center">
      <h1 className="text-4xl font-bold">{title}</h1>
      <div className="ml-auto flex flex-row items-center gap-2">
        { curseforge && <a href={curseforge} target="_blank">
          <img src="https://github.com/intergrav/devins-badges/blob/v3/assets/compact-minimal/available/curseforge_46h.png?raw=true" alt="CurseForge"/>
        </a>}
        {modrinth && <a href={modrinth} target="_blank">
          <img src="https://github.com/intergrav/devins-badges/blob/v3/assets/compact-minimal/available/modrinth_46h.png?raw=true" alt="Modrinth"/>
        </a>}
        {github && <a href={github} target="_blank">
          <img src="https://github.com/intergrav/devins-badges/blob/v3/assets/compact-minimal/available/github_46h.png?raw=true" alt="GitHub"/>
        </a>}
        <div className="ml-2">
          <Icon/>
        </div>
      </div>
    </div>
  </>
}
