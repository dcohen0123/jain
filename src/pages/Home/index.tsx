import styles from './index.module.scss';
import StockDropdown from '@components/StockDropdown';
import StockChart from '@components/StockChart';
import StockSymbol from '@components/StockSymbol';

function Home() {
    return (
        <div className={styles.homeContainer}>
            <div className={styles.inputWrapper}>
                <div>
                    <StockDropdown />
                </div>
                <div>
                    <StockSymbol />
                </div>
            </div>
            <div className={styles.chartWrapper}>
                <StockChart />
            </div>
        </div>
    );
}

export default Home;
