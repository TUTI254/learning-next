import React from 'react'
import styles from './styles.module.css'

export const metadata = {
  title: 'About page',
  description: 'about page description',
}

export default function AboutLayout({
    children,
}: {
    children: React.ReactNode
}) {
  return (
   <>
     <nav> About Layout Navbar
        <main className={styles.main}>
            {children}
        </main>
     </nav>
   </>
  )
}
