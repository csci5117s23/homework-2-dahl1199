import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'

import orange404 from '../../public/404orange.svg'
import purple404 from '../../public/404purple.svg'
import gray404 from '../../public/404gray.svg'

export default function Todos() {
  
    return (
      <>
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <div className="flex-404">
            <div className="container-404">
                <div className="blob404-gray-container">
                    <Image className="blob404-gray" fill src={gray404}/>
                </div>
                <div className="blob404-purple-container">
                    <Image className="blob404-purple" fill src={purple404}/>
                </div>
                <div className="blob404-orange-container">
                    <Image className="blob404-orange" fill src={orange404}/>
                </div>
                
                <span className="text404">404 Not found</span>
                <span className="small-text404">Sorry, but we don't have that page.</span>
                <Link className="button404" href="/todos">Go To Todos</Link>
            </div>
        </div>
      </>
    )
  }