import React from 'react';
import { Spin } from 'antd';
import styles from './index.module.scss';
import { LoadingOutlined } from '@ant-design/icons';

const LoadingOverlay: React.FC = () => {
    return (
        <div className={styles.loadingOverlay}>
            <h4>Loading</h4>
            <Spin indicator={<LoadingOutlined spin />} size="large" />
        </div>
    );
};

export default LoadingOverlay;
