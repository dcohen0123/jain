import styles from './index.module.scss'
import StockDropdown from '@components/StockDropdown'
import StockChart from '@components/StockChart'

function Home() {
    return (
        <div className={styles.homeContainer}>
            <div className={styles.dropdownWrapper}>
                <StockDropdown />
            </div>
            <div className={styles.chartWrapper}>
                <StockChart />
            </div>
        </div>
    )
}

export default Home
