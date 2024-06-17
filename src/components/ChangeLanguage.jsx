
import React from 'react'
import esp from '../assets/images/esp.png'
import eng from '../assets/images/en.png'
import cat from '../assets/images/cat.svg'

import { useTranslation } from 'react-i18next'


export default function ChangeLanguage() {

    const [t, i18n] = useTranslation("global");

    return (
        <div>
            <img src={esp} alt="español" className='languageLang'
                onClick={() => i18n.changeLanguage("es")} />
            <img src={cat} alt="catalan" className='languageLang'
                onClick={() => i18n.changeLanguage("ca")} />
            <img src={eng} alt="ingles" className='languageLang'
                onClick={() => i18n.changeLanguage("en")} />
        </div>
    )
}
