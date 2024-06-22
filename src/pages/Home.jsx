import React from 'react'
import TotalWeekly from '../components/TotalWeekly'
import BarChartComp from '../components/BarChartComp'


import { useTranslation } from 'react-i18next'
import ChangeLanguage from '../components/ChangeLanguage'

export default function Home() {
    const [t, i18n] = useTranslation("global");


    return (
        <>
            <ChangeLanguage></ChangeLanguage>
            <main className='container'>
                <TotalWeekly></TotalWeekly>
                <BarChartComp></BarChartComp>
            </main>
        </>
    )
}
