import React from "react";
import Head from "next/head";
import Link from "next/link";
import faker from "faker";

import { Header, Jumbo, JumboFrom, Container, Breadcrums } from "../components";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
      </Head>
      <Header />
      <Container>
        <Breadcrums
          links={[
            { href: "/", title: "Home" },
            { href: "/", title: "Banos" },
            { href: "/", title: "Activities" },
            { href: "/", title: "Rafting" },
          ]}
        />
        <div className="flex justify-between">
          <h1 className="mb-10 text-gray-700 text-5xl font-semibold">
            Canyoning en Baños de Agua Santa - Ecuador
          </h1>
          <div>
            <div className="flex">
              <div className="text-gray-400 border-2 border-gray-200 rounded-full p-2 h-10 w- ml-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                  />
                </svg>
              </div>
              <div className="text-gray-400 border-2 border-gray-200 rounded-full p-2 h-10 w- ml-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Container isMin>
        <div className="relative lg:rounded-3xl w-full h-3/4 lg:h-[650px] py-16 overflow-hidden">
          <div className="absolute z-0 top-0 left-0 w-full h-full ">
            <img
              src="https://v1.nitrocdn.com/PlCATPkBFeOnftDsPDvpHIHaHyykpjHs/assets/static/optimized/rev-77f359a/wp-content/uploads/2016/06/extreme-canyoning-banos-ecuador4-960x640.jpg"
              alt="cover"
              className="w-full absolute top-1/2 -translate-y-1/2"
            />
          </div>

          <div className="absolute z-10 top-0 left-0 w-full h-full bg-black opacity-60"></div>
        </div>
      </Container>
    </div>
  );
}
