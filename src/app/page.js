import Image from 'next/image'
import styles from './page.module.css'
import Header from './header'
import Content from './content'

export default function Home() {
  return (
    <>
      <Header />
      <Content />
    </>
  )
}
