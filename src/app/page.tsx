//Path: http://localhost:3000/ 

import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <h1>Index Page</h1>
      <h3><Link href='/login-page/login-page'>Login</Link></h3>      
      <h3><Link href='/top-songs'>Top Songs</Link></h3>
      <h3><Link href='/top-artists'>Top Artists</Link></h3>
    </>
    
  )
}
