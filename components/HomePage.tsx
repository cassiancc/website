import Head from "next/head";
import {Feature, Features} from "./features";

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

export function HomePage() {
  return (
      <>
        <style jsx>{`
    .content-container {
      max-width: 90rem;
      padding-left: max(env(safe-area-inset-left),1.5rem);
      padding-right: max(env(safe-area-inset-right),1.5rem);
      margin: 0 auto;
    }
    .features-container {
      margin: 8rem 0 0;
      padding: 4rem 0;
      background-color: #f3f4f6;
      border-bottom: 1px solid #e5e7eb;
    }
    
    .features-container .content-container {
      margin-top: -8rem;
    }
    :global(.dark) .features-container {
      background-color: #000;
      border-bottom: 1px solid rgb(38,38,38);
    }
        `}</style>
        <LandingPageGlobalStyles/>
        <div className="w-full flex flex-col min-h-screen py-20 bg-black">
          <div className="flex flex-col justify-center items-center gap-y-8">
            <img src="/logo.png" width="128" height="128"/>

            <h1 className="text-7xl font-bold text-gray-300">
              Sinytra
            </h1>

            <div className="flex flex-col gap-y-1">
              <p className="text-2xl text-neutral-500 text-center">
                Bridging the gap between platforms.
              </p>
              <p className="text-2xl text-neutral-500 text-center">
                Powered by Free and Open Source Software.
              </p>
            </div>

            <div className="features-container">
              <div className="content-container">
                <Features>
                  <Feature index={1} className="card-with-border" href="/docs/">
                    <div>
                      <h3>Run your favourite mods</h3>
                      <p>With Connector and ForgifiedFabricAPI, you can run your favourite Fabric mods on NeoForge</p>
                    </div>
                  </Feature>

                  <Feature index={2} className="card-with-border" href="https://github.com/Sinytra/MultiLoader-Template">
                    <div>
                      <h3>Write once, run everywhere</h3>
                      <p>ForgifiedFabricAPI allows you to write a Fabric mod that can run on NeoForge without needing a complex MultiLoader setup and without (too much) platform specific code</p>
                    </div>
                  </Feature>

                  <Feature index={3} className="card-with-border" href="https://modrinth.com/mod/connector-extras">
                    <div>
                      <h3>Improved compatibility between mods</h3>
                      <p>ConnectorExtras implements APIs of different mods in such a way that they're compatible with Forge mods</p>
                    </div>
                  </Feature>
                </Features>
              </div>
            </div>
          </div>
        </div>
      </>
  )
}
