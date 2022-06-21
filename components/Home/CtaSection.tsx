

import React from 'react'
import Image from 'next/image'



export const CtaSection = () => {
    return (
        <div className='bg-electricGreen flex w-full items-center justify-center'>
            <div className='section-container h-64 border-t flex-auto'>
                <div className='flex flex-row'>
                    <Image src="/img/quotes.svg" alt="Quotes" width="100%" height="30%" />
                    <div className='text-white font-GloriaHallelujah text-4xl'>Let’s chat about your next project </div>
                    <Image src="/img/quotes.svg" alt="Quotes" width="100%" height="30%" />
                </div>
                <div><button className='mt-6 p-3 px-6 pt-2 border-4 border-black bg-veryLightGray rounded-lg baseline font-Poppins font-medium'> Get in touch</button></div>
            </div>
        </div>
    )
}

export default CtaSection