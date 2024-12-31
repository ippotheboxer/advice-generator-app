import React, { useEffect, useState } from 'react';

// Images
import patterndesk from "/assets/images/pattern-divider-desktop.svg";
import patternmob from "/assets/images/pattern-divider-mobile.svg";
import diceImg from "/assets/images/icon-dice.svg";

// API get response
import { getAdvice } from '../api/advice';

interface adviceResponse {
    slip: {
        id: number;
        advice: string;
    }
}

const AdviceContainer: React.FC = () => {
    const [advice, setAdvice] = useState<adviceResponse>();

    useEffect(() => {
        getNewAdvice()
    }, []);

    const getNewAdvice = () => {
        try {
            (async () => {
            const {data} = await getAdvice();
            console.log(data);
            setAdvice(data);
            })(); 
        } catch (error) {
            console.log("Error getting countries");
        }
}
  return (
    <div className='pb-6 relative'>
        <div className='flex flex-col items-center justify-center bg-containerBg py-12 rounded-md adviceBox'>
            <div className='flex flex-col items-center justify-center text-center w-8/12'>
                    {advice !== undefined && 
                    <>
                    <p className='text-neonGreen text-xs adviceNo pb-4'>ADVICE #{advice.slip.id} </p>
                    <p className='text-lightCyan quoteText pb-8'>{advice.slip.advice}</p>
                </>
                    }
                
            </div>
            <div className='flex items-center justify-center pb-8 w-6/12 lg:w-9/12'>
                <picture>
                    <source srcSet={patterndesk} 
                    media="(max-width: 1440px)"/>
                    <source srcSet={patternmob}
                    media="(max-width: 375px)" />
                    <img src={patterndesk} alt="divider" />
                    </picture>
            </div>
            <div className='bottom-0 absolute'>
                <button 
                className='bg-neonGreen p-4 rounded-full diceButton'
                onClick={getNewAdvice}
                >
                    <img src={diceImg} alt="dice" />
                </button>
            </div>
        </div>
    </div>
  )
}

export default AdviceContainer;