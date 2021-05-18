import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';

// components
import Head from 'next/head';
import Header from '../components/Header/index';
import Footer from '../components/Footer/index';

// frames
import OrderFrame from '../pagesAssets/Index/OrderFrame';
import ServicesFrame from '../pagesAssets/Index/ServicesFrame';
import AboutFrame from '../pagesAssets/Index/AboutFrame';
import ContactsFrame from '../pagesAssets/Index/ContactsFrame';

// styles
import styles from '../pagesAssets/Index/style.module.css';
import Widget from "../components/Widget";

const frameMap = {
  order: <OrderFrame />,
  services: <ServicesFrame />,
  about: <AboutFrame />,
  contacts: <ContactsFrame />,
};

const Index = () => {
  const { mainTab } = useSelector((s) => ({
    mainTab: s.app.mainTab,
  }));

  const memorizedContent = useMemo(() => frameMap[mainTab], [mainTab]);

  return (
    <>
      <Head>
        <title>All IN - barbers and more</title>
        <meta
          name="description"
          content='All IN - это не просто барбершоп.Это место, в котором мы собрали профессионалов с многолетним опытом работы и им доверяем.Мы создали пространство где можно не думать о результате, потому что он всегда будет предвосхищать, ведь за вашу голову мы отвечаем своей.'
        />
        <link rel="icon" href="/header/all-in-logo.svg" />
        <link rel='canonical' href='https://all-in-barbers.com' />
        <meta name='viewport' content='width=device-width,initial-scale=1:2'/>
        <meta content='true' name='HandheldFriendly'/>
        <meta content='width' name='MobileOptimized'/>
        <meta content='yes' name='apple-mobile-web-app-capable'/>
        <meta property="twitter:title" content='All IN - barbers and more' />
        <meta property="twitter:url" content='https://all-in-barbers.com' />
        <meta property="twitter:creator" content='https://all-in-barbers.com' />
        <meta property="twitter:description" content='All IN - это не просто барбершоп.Это место, в котором мы собрали профессионалов с многолетним опытом работы и им доверяем.Мы создали пространство где можно не думать о результате, потому что он всегда будет предвосхищать, ведь за вашу голову мы отвечаем своей.' />
        <meta property="twitter:site" content='https://all-in-barbers.com' />

        <meta property="og:type" content='product' />
        <meta property="og:url" content='https://all-in-barbers.com' />
        <meta property="og:title" content='All IN - barbers and more' />
        <meta property="og:image" content='/header/logo.jpg' />
        <meta property="og:description" content='All IN - это не просто барбершоп.Это место, в котором мы собрали профессионалов с многолетним опытом работы и им доверяем.Мы создали пространство где можно не думать о результате, потому что он всегда будет предвосхищать, ведь за вашу голову мы отвечаем своей.' />
        <meta property="og:site_name" content='https://all-in-barbers.com' />
      </Head>
      <div className={styles.pageContainer}>
        <div className={styles.pageWrapper}>
          <Header />
          {memorizedContent}
        </div>
        <Footer />
        <Widget />
      </div>
    </>
  );
};

export default Index;
