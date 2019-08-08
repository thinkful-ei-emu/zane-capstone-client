import React from 'react';
import Header from './LandingPageComponents/Header '
import SignUpSection from './LandingPageComponents/SignUpSection';
import LoginSection from './LandingPageComponents/LoginSection';
import MyInventorySection from './LandingPageComponents/MyInventorySection';
import '../CSS/LandingPage.css'
import LandingFooter from './LandingFooter';


export default function LandingPage(){
  return (
    <div>
     <Header/>
     <SignUpSection/>
     <LoginSection/>
     <LandingFooter/>
     

    </div>
  )
}