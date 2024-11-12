import React from 'react'
import HelloMessage from '@/commerWork/sliderText'
import MenuBar from '../navbar/menubar'
import SecondSection from '../secondComponent/secondSection'
import Footer from '../footerComponent/footerBuilder'
import CollectionSection from '../CollectionSection/collectionSection'

function HomePageWapper() {
  return (
    <>
        <MenuBar />
        <HelloMessage />
        <SecondSection/>
        <CollectionSection />
        <Footer/>
    </>
  )
}

export default HomePageWapper
