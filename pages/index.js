import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import logo from '../public/images/cambnb_logo.svg'
import Search from '../components/Search'
import AboveTheFold from '../components/AboveTheFold'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Cambnb: Vacation Rentals, Cabins</title>
        <meta name='keywords' content='vacation, rentals, bookings, holidays' />
      </Head>
      <div className={styles.header}>
        <div className={styles.headerInnerContainer}>
          <div className={styles.headerLeftContainer}>
            <div className={styles.headerLogo}>
              <Image src={logo} alt='logo'/>
            </div>
            <span className={styles.headerText}>cambnb</span>
          </div>
          <div className={styles.headerMiddleContainer}>
            <div className={styles.headerMiddleContainerInnerContainer}>
              <div className={styles.headerMiddleContainerItem}>
                <span>Places to stay</span>
              </div>
              <div className={styles.headerMiddleContainerItem}>
                <span>Experiences</span>
              </div>
              <div className={styles.headerMiddleContainerItem}>
                <span>Online Experiences</span>
              </div>
            </div>
            
          </div>
          <div className={styles.headerRightContainer}>
            <span>Become a Host</span>
          </div>
        </div>
      </div>
      <Search />
      <AboveTheFold />
    </div>
  )
}
