import React from 'react';
import styles from './index.module.scss';

const NoDataOverlay: React.FC = () => {
    return (
        <div className={styles.noDataOverlay}>
            <h4>No Data</h4>
        </div>
    );
};

export default NoDataOverlay;
