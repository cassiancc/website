import Head from "next/head";
import {Feature, Features, Features2} from "./features";
import cn from "clsx";
import styles from './style.module.css';
import React from "react";
import DiscordBadge from "./badges/DiscordBadge";
import GetStartedBadge from "./badges/GetStartedBadge";
import DescLine from "./DescLine";
import Package from "./icons/Package";
import WrenchScrewdriver from "./icons/WrenchScrewdriver";
import Heart from "./icons/Heart";

export function LandingPageGlobalStyles() {
  return (
    <Head>
      <style>
        {`
          .dark footer,
          .dark body {
            background-color: black !important;
          }

          .dark .nextra-nav-container .nextra-nav-container-blur  {
            background-color: rgba(0,0,0,.5) !important;
          }
    `}
      </style>
    </Head>
  );
}

function Background() {
  return (
    <>
      <div
        className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <span
          className={cn(styles.rightLights, "opacity-50 dark:opacity-100")}/>
      </div>
    </>
  )
}

function ConnectorLogo() {
  return <>
    <img src="/connector.png" alt="icon"/>
  </>
}

function MatyrobbrtLogo() {
  return <>
    <img src="https://github.com/Matyrobbrt.png" alt="icon" className="rounded-image"/>
  </>
}

function Su5eDLogo() {
  return <>
    <img src="https://github.com/Su5eD.png" alt="icon" className="rounded-image"/>
  </>
}

function ConnectorExtrasLogo() {
  return <>
    <img src="/connector-extras.png" alt="icon"/>
  </>
}

function FFAPILogo() {
  return <>
    <img src="/ffapi.png" alt="icon"/>
  </>
}

export function HomePage() {
  return (
    <>
      <style jsx>{`
        *:global(span), *:global(p), *:global(li) {
          font-family: 'Inter', sans-serif;
        }

        :global(.nextra-nav-container) {
          z-index: 99;
        }

        :global(.nextra-sidebar-container) {
          z-index: 90;
        }

        .content-container {
          max-width: 90rem;
          padding-left: max(env(safe-area-inset-left), 1.5rem);
          padding-right: max(env(safe-area-inset-right), 1.5rem);
          margin: 0 auto;
        }

        .features-container {
          margin: 9rem 0 0;
          padding: 4rem 0;
          background-color: #f3f4f6;
        }

        .features-border {
          border-bottom: 1px solid #e5e7eb;
        }

        .features-container .content-container {
          margin-top: -8rem;
        }

        :global(.dark) .features-container {
          background-color: #000;
        }

        :global(.dark) .features-border {
          border-bottom: 1px solid rgb(38, 38, 38);
        }

        .feature-reverse {
          border-top: 1px solid #e5e7eb;
          border-radius: 1rem;
        }

        :global(.dark) .feature-reverse {
          border-top: 1px solid rgb(38, 38, 38);
        }

        img {
          object-fit: cover;
          object-position: left;
          z-index: 0;
          user-select: none;
          pointer-events: none;
        }

        .funny-gradient {
          background: linear-gradient(180deg, rgba(255, 0, 0, 0.94) 0%, #000 50%, #000 100%);
          width: calc(100% + 4px);
          height: 1rem;
        }
      `}</style>
      <Background/>
      <LandingPageGlobalStyles/>
      <div className="w-full flex flex-col min-h-screen py-14 bg-black">
        <div className="flex flex-col justify-center items-center gap-y-8 z-50">
          <img src="/logo.png" width="128" height="128" className="z-50"/>

          <h1 className="text-7xl font-bold text-neutral-300">
            Sinytra
          </h1>

          <div className="flex flex-col gap-y-1">
            <h2 className="text-2xl text-neutral-500 text-center">
              Bridging the gap between platforms.
            </h2>
            <h2 className="text-2xl text-neutral-500 text-center">
              Powered by Free and Open Source Software.
            </h2>
          </div>

          <div className="mb-2 flex flex-row flex-wrap justify-center gap-4">
            <GetStartedBadge/>
            <DiscordBadge/>
          </div>

          <div className="features-container">
            <div className="content-container">
              <Features>
                <Feature index={1} className="card-with-border" href="/docs/connector"
                         title="Play your favourite mods" icon={ConnectorLogo}>
                  With Connector and ForgifiedFabricAPI, you can run your favourite Fabric mods on NeoForge
                </Feature>

                <Feature index={2} className="card-with-border"
                         href="https://www.curseforge.com/minecraft/mc-mods/forgified-fabric-api"
                         title="Write once, run anywhere" icon={FFAPILogo}>
                  ForgifiedFabricAPI allows you to write a Fabric mod that can run on NeoForge without needing a complex MultiLoader setup and without
                  (too much) platform specific code
                </Feature>

                <Feature index={3} className="card-with-border"
                         href="https://www.curseforge.com/minecraft/mc-mods/connector-extras"
                         title="Improved compatibility" icon={ConnectorExtrasLogo}>
                  ConnectorExtras implements APIs of different mods in such a way that they're compatible with Forge mods
                </Feature>
              </Features>
            </div>
          </div>

          <div className="feature-reverse relative flex flex-col justify-center items-center gap-y-8 pt-10">
            <div className="absolute -top-0.5 left-0 -translate-y-1/2 -z-50">
              <div aria-hidden="true"
                   className="h-[300px] w-[320px] sm:left-auto user-select-none center pointer-events-none max-w-full"
                   style={{background: "conic-gradient(from 90deg at 50% 50%, #00000000 50%, #000000 50%),radial-gradient(rgba(200,200,200,0.1) 0%, transparent 80%)"}}></div>
            </div>

            <h2 className="text-6xl text-neutral-300">
              About us
            </h2>

            <div className="features-container !mt-20 sm:w-2/3">
              <div className="content-container flex flex-col gap-y-8">
                <DescLine icon={Package} index={1}>
                  Sinytra provides <b className="text-neutral-400">high-quality cross-platform tools</b> for both developers and users in Minecraft
                  modding.
                </DescLine>
                <DescLine icon={Heart} right index={3}>
                  We aim to enhance users' experience by bringing mod loaders closer together, allowing them to <b className="text-neutral-400">enjoy
                  playing all the mods</b> they love.
                </DescLine>
                <DescLine icon={WrenchScrewdriver} index={5}>
                  Using our libraries, developers can <b className="text-neutral-400">spend less time porting</b> and focus on improving their works
                  instead
                </DescLine>
              </div>
            </div>
          </div>

          <h2 className="text-6xl text-neutral-300">
            The team
          </h2>

          <div className="features-container features-border">
            <div className="content-container">
              <Features2>
                <Feature index={1} className="card-with-border" href="https://github.com/Su5eD" title="Su5eD" icon={Su5eDLogo} pad>
                  Founder & Lead Developer
                </Feature>

                <Feature index={3} className="card-with-border" href="https://github.com/Matyrobbrt" title="Matyrobbrt" icon={MatyrobbrtLogo} pad>
                  Core Developer
                </Feature>
              </Features2>
            </div>
          </div>

          <h2 className="text-6xl text-neutral-300 mt-5">
            Ready?
          </h2>

          <span className="text-2xl text-neutral-500 text-center my-8">The world of unified minecraft modding awaits.</span>

          <GetStartedBadge/>
        </div>
      </div>
    </>
  )
}
