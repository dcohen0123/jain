import React from 'react'
import { Spin } from 'antd'
import styles from './index.module.scss'
import { LoadingOutlined } from '@ant-design/icons'

const LoadingOverlay: React.FC = () => {
    return (
        <div className={styles.loadingOverlay}>
            <span>Loading</span>
            <Spin indicator={<LoadingOutlined spin />} size="large" />
        </div>
    )
}

export default LoadingOverlay
