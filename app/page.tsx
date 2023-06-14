import styles from './page.module.css'
import Link from 'next/link'


export default function Home() {
  return (
    <main >
     <h1>home page</h1>
     <Link href="/users">Go to Users Page </Link>
    </main>
  )
}
