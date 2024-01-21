import Head from "next/head";

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
      <LandingPageGlobalStyles/>
      <div className="w-full flex flex-col min-h-screen py-20 bg-black">
        <div className="flex flex-col justify-center items-center gap-y-8">
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
        </div>
      </div>
    </>
  )
}