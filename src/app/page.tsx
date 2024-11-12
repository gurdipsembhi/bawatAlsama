import React from 'react';
// import { Provider } from 'react-redux';
// import { PersistGate } from 'redux-persist/integration/react'
// import store from './redux/store'
// import styles from './signup/signup.module.css';
import Image from 'next/image';
// import { persistStore } from 'redux-persist';
import HomePageWapper from '@/component/HomePageWapper/homePageWapper';
// import Homepageskeleton from '../../skeleton/fullskelton/homepageskeleton';

function Index() {
  // const persistor = persistStore(store)
  const useHomepageSkeleton = true;
  return (
    <>
    {/* // <Provider store={store}> */}
      {/* <PersistGate loading={
          useHomepageSkeleton ? <Homepageskeleton /> :<></> 
        } persistor={persistor}> */}
        <div>
          <Image
            src='/decor.jpg'
            alt='hello'
            width={0}
            height={0}
            sizes='100%'
            style={{ width: '100vw', height: '100vh', objectFit: 'cover' }}
            // loading='lazy'
          />
          <HomePageWapper/>
        </div>
      </>
  );
}

export default Index;

