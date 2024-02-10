import React from 'react';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import ContentLayout from '../contentLayout/contentLayout';
import styles from './appLayout.module.css'; // Import CSS module
const AppLayout = () => {
    return (
        <div className={styles.container}>
        <Header className={styles.header}></Header>
        <ContentLayout className={styles.contentLayout}></ContentLayout>
        <Footer className={styles.footer}></Footer>
        </div>
    );
}

export default AppLayout;
