import { Inter } from 'next/font/google'
import { useAuth, SignIn } from '@clerk/nextjs'
import { useRouter } from 'next/router'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const { isLoaded, userId, sessionId, getToken } = useAuth();
  const router = useRouter()

  // user is logged in, automatically redirect to /todos
  if(userId){
    router.push('/todos')
  } 
  // user is not logged in, render root page with title and clerk signIn
  else {
    return (
      <>
        <div className="rootTitle">Isabel's To-Do App! Yay!</div>
        <SignIn/>
      </>
    )
  }
  
}
