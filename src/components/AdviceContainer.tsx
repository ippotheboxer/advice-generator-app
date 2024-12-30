import React from 'react';
import patterndesk from "/images/pattern-divider-desktop.svg";
import patternmob from "/images/pattern-divider-mobile.svg";

const AdviceContainer = () => {
  return (
    <div className='pb-6 relative'>
        <div className='flex flex-col items-center justify-center bg-containerBg py-12 rounded-md adviceBox w-fit'>
            <div className='flex flex-col items-center justify-center text-center w-5/12 lg:w-9/12'>
                <p className='text-neonGreen text-xs adviceNo pb-4'>ADVICE #166</p>
                <p className='text-lightCyan quoteText pb-8'>"The quieter you become, the more you can hear."</p>
            </div>
            <div className='flex items-center justify-center pb-8 w-6/12 lg:w-9/12'>
                <picture>
                    <source srcSet={patterndesk} 
                    media="(max-width: 1440px)"/>
                    <source srcSet={patternmob}
                    media="(max-width: 375px)" />
                    <img src={patterndesk} alt="" />
                    </picture>
            </div>
            <div className='bottom-0 absolute'>
                <button className='bg-neonGreen p-4 rounded-full'>
                    <img src="/images/icon-dice.svg" alt="dice" />
                </button>
            </div>
        </div>
    </div>
  )
}

export default AdviceContainer;