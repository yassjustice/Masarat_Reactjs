import React from 'react';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import ContentLayout from '../contentLayout/contentLayout';

const AppLayout = () => {
    return (
        <>
        <Header></Header>
        <ContentLayout></ContentLayout>
        <Footer></Footer>
        </>
    );
}

export default AppLayout;
