import React from "react";
import {HeaderLogo} from "./HeaderLogo";
import Link from "next/link";

function Copyright() {
  return <>
    <div className="flex flex-col items-center sm:items-start sm:basis-96">
      <div>
        <HeaderLogo/>
      </div>
      <p className="mt-6 text-sm">
        © {new Date().getFullYear()} The Sinytra Project.
      </p>
    </div>
  </>
}

function LinkEntry({title, href}: { title: string, href: string }) {
  return <>
    <ul>
      <li>
        <Link className="rounded-md px-1 py-0.5 text-sm text-neutral-400 outline-none hover:text-neutral-400" href={href}>
          {title}
        </Link>
      </li>
    </ul>
  </>
}

function LinkColumn({title, className, children}: { title: string, className?: string, children: React.ReactNode }) {
  return <>
    <div className={`flex flex-col gap-4 ${className}`}>
      <p className="mb-2 ml-1.5 text-sm text-neutral-300 font-normal">{title}</p>

      {children}
    </div>
  </>
}

export default function PageFooter() {
  return <>
    <footer className="bg-neutral-900 text-gray-400 w-full">
      <div className="flex flex-wrap-reverse sm:flex-nowrap sm:flex-row w-full justify-center gap-y-8 sm:justify-between">
        <Copyright/>

        <div className="grid w-full ml-auto grid-cols-2 gap-8 sm:w-2/3 lg:grid-cols-4">
          <LinkColumn title="Navigation">
            <LinkEntry title="Homepage" href="/"/>
            <LinkEntry title="Documentation" href="/docs"/>
          </LinkColumn>

          <LinkColumn title="Links">
            <LinkEntry title="GitHub" href="https://github.com/Sinytra"/>
            <LinkEntry title="OpenCollective" href="https://opencollective.com/sinytra"/>
            <LinkEntry title="CurseForge" href="https://www.curseforge.com/members/su5ed/projects"/>
            <LinkEntry title="Modrinth" href="https://modrinth.com/organization/sinytra"/>
          </LinkColumn>

          <LinkColumn title="Community">
            <LinkEntry title="Discord" href="https://discord.sinytra.org"/>
            <LinkEntry title="GitHub Discussions" href="https://github.com/Sinytra/Connector/discussions"/>
          </LinkColumn>

          <LinkColumn title="Projects">
            <LinkEntry title="Connector" href="/docs/connector"/>
            <LinkEntry title="Forgified Fabric API" href="/docs/forgified-fabric-api"/>
            <LinkEntry title="Connector Extras" href="/docs#connector-extras"/>
          </LinkColumn>
        </div>
      </div>
    </footer>
  </>
}
