import React from 'react'
import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
const Format = ({children}) => {
  return (
    <>
    <Head>
    <title>Blog</title>
    </Head>
    <Header></Header>
    <main>{children}</main>
    <Footer></Footer>

    </>
  )
}

export default Format