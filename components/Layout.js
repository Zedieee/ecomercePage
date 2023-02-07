import React from "react";
import Head from "next/head";
import Link from "next/link";
export default function Layout({title, children }) {
  return (
    <>
      <Head>
        <title> {title ? title +  ' - Ecomerce' : 'Ecomerce'} </title>
        <meta name="description" content="Ecomerce Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex min-h-screen flex-col justify-between">
        <header>
          <nav className="flex h-12 justify-between shadow-md items-center">
            <Link href="/" className="text-lg font-bold px-4 ">
                Ecomerce
            </Link>
            <div>
              <Link href="/cart" className="p-2">
                Carrito
              </Link>
              <Link href="/Login" className="p-2">
                Login
              </Link>
            </div>
          </nav>
        </header>
        <main className="container m-auto mt-4 px-4">{children}</main>
        <footer className="flex justify-center items-center h-10 shadow-inner">Ecomerce Page  </footer>
      </div>
    </>
  );
}
