import styles from '../styles/AboveTheFold.module.css'
import Image from 'next/image'
import aboveTheFoldImage from '../public/images/aboveTheFoldImage.jpeg'


const AboveTheFold = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <h1 className={styles.heading}>Not sure where to go? Perfect.</h1>
                <div className={styles.button}>
                    <span className={styles.buttonText}>I{`'`}m flexible</span>
                </div>
                <Image src={aboveTheFoldImage} alt='AboveTheFoldImage'/>
            </div>
        </div>
    )
}

export default AboveTheFold