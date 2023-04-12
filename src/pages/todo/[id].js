import ToDoList from './ToDoList'
import Link from 'next/link'
import Head from 'next/head'

export default function Todo() {
    return (
      <>
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Link href="/">root page</Link>
        <Link href="/done">done</Link>
        <ToDoItem/>
      </>
    )
  }