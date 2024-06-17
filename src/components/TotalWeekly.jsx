import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { calcTotalWeek, incrementWeekIndex, decrementWeekIndex } from '../store/slices/chartSlice';
import { useTranslation } from 'react-i18next'


export default function TotalWeekly() {

    const [t, i18n] = useTranslation("global");

    const dispatch = useDispatch();
    const totalWeek = useSelector((state) => state.chart.totalweek);
    const currentWeekIndex = useSelector((state) => state.chart.currentWeekIndex);
    const totalweeks = useSelector((state) => state.chart.totalWeeks);



    useEffect(() => {
        // Calcula el total de la semana actual cuando carga el componente
        dispatch(calcTotalWeek());
    }, [dispatch, currentWeekIndex]);

    const nextWeek = () => {
        dispatch(incrementWeekIndex()); // Llama la función para despachar la acción
        console.log("next");
        console.log("currentWeekIndex", currentWeekIndex);
    }
    const prevWeek = () => {
        dispatch(decrementWeekIndex()); // Llama la función para despachar la acción
        console.log("prev");
        console.log("currentWeekIndex", currentWeekIndex);
        console.log("total",);
    }




    return (
        <div className='p-4 bg-warning-subtle rounded-3 d-flex justify-content-between'>
            <div>{t("totalWeek")}<strong> {totalWeek}</strong></div>
            <div>
                <button className="btn btn-primary" onClick={prevWeek} disabled={(currentWeekIndex === 0) ? true : false}>Prev</button>
                <button className="btn btn-primary me-2" onClick={nextWeek} disabled={(currentWeekIndex === totalweeks - 1) ? true : false}>Next</button>
            </div>
        </div>
    )
}
