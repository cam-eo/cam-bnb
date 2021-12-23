import styles from '../styles/Search.module.css'

const Layout = () => {
    return (
        <div className={styles.container}>
            <div className={styles.searchBar}>
                <div className={styles.searchBarLocationContainer}>
                    <span>Location</span>
                    <span>Where are you going?</span>
                </div>
                <div className={styles.searchBarCheckInContainer}>
                    <span>Check in</span>
                    <span>Add dates</span>
                </div>
                <div className={styles.searchBarCheckOutContainer}>
                    <span>Check out</span>
                    <span>Add dates</span>
                </div>
                <div className={styles.searchBarGuestsContainer}>
                    <span>Guests</span>
                    <span>Add Guests</span>
                </div>
            </div>
        </div>
    )
}

export default Layout