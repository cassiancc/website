import React from 'react';
import CurseForgeCompactMinimal from "./icons/devin/CurseForgeCompactMinimal";
import ModrinthCompactMinimal from "./icons/devin/ModrinthCompactMinimal";
import GitHubCompactMinimal from "./icons/devin/GitHubCompactMinimal";

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
          <CurseForgeCompactMinimal />
        </a>}
        {modrinth && <a href={modrinth} target="_blank">
          <ModrinthCompactMinimal />
        </a>}
        {github && <a href={github} target="_blank">
          <GitHubCompactMinimal />
        </a>}
        <div className="ml-2">
          <Icon/>
        </div>
      </div>
    </div>
  </>
}
