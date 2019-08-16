import React from 'react';
import Header from './LandingPageComponents/Header '
import SignUpSection from './LandingPageComponents/SignUpSection';
import LoginSection from './LandingPageComponents/LoginSection';

import '../CSS/LandingPage.css'
import LandingFooter from './LandingFooter';
import IntroSection from './LandingPageComponents/Intro-Section';



export default function LandingPage(){
  return (
    <div>
      
      
     <Header/>
     <IntroSection/>
     <SignUpSection/>
     <LoginSection/>
     <LandingFooter/>
    

     

    </div>
  )
}