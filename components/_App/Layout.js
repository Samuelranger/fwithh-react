import React from 'react';
import Head from "next/head";
import { Container } from "semantic-ui-react";
import Footer from "./Footer";
import GoTop from './GoTop';
import StaticHeader from './StaticHeader';

const Layout = ({ children, user }) => {
    
  return (
    <React.Fragment>
        <Head>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1" />
            <title>FwithH - Fashion with Heart</title>
            <meta name="description" content="Buy high-quality bicycle parts and save money while riding through Nevada." />
            <meta name="og:title" property="og:title" content="FwithH - Fashion with Heart"></meta>
            <meta name="twitter:card" content="FwithH - Fashion with Heart"></meta>
            <link rel="canonical" href="#0"></link>
            <meta property="og:image" content="https://res.cloudinary.com/dev-empty/image/upload/v1590078952/qlm6qb1hzxd6iccmaf82.jpg" />
        </Head>
        
        <StaticHeader user={user} />
            <Container fluid>
                {children}
            </Container>
        <Footer user={user} />
        <GoTop scrollStepInPx="100" delayInMs="10.50" />
    </React.Fragment>
  );
}

export default Layout;