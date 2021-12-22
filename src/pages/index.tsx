import React from "react";
import Head from "next/head";
import Link from "next/link";
import faker from "faker";

import { Header, Jumbo, JumboFrom, Container } from "../components";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
      </Head>
      <Header />
      <Container isMin>
        <Jumbo />
        <JumboFrom />
        <h2 className="text-center text-3xl mb-8">
          Popular places in Banos de Agua Santa
        </h2>
        <div className="text-center">
          {new Array(20).fill(null).map((item, index) => (
            <Link href="/" key={index}>
              <a className="inline-block px-8 py-2 border-2 border-gray-200 rounded-xl text-gray-400 text-lg ml-4 mb-4 hover:border-gray-400 hover:text-gray-600 active:border-gray-600 active:text-gray-700 transition duration-30">
                {faker.address.city()}
              </a>
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
}
