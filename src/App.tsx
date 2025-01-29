import styles from './App.module.scss'
import Home from '@views/Home'
import '@ant-design/v5-patch-for-react-19'

function App() {
    return (
        <div className={styles.appContainer}>
            <Home />
        </div>
    )
}

export default App
