import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentWeek } from '../store/slices/chartSlice';
import { Bar } from 'react-chartjs-2';
import { useTranslation } from 'react-i18next'

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
);


export default function BarChartComp() {
  const [t, i18n] = useTranslation("global");

  const dispatch = useDispatch();

  const indexWeek = useSelector((state) => state.chart.currentWeekIndex);
  const currentWeekData = useSelector((state) => state.chart.currentWeek);

  const expenses = currentWeekData.datasets[0].data;
  const week = currentWeekData.labels;
  const bgColors = [...currentWeekData.datasets[0].backgroundColor];
  let auxToday = new Date().getDay();
  const [today, setToday] = useState(auxToday - 1);
  const [yesterdayPercent, setYesterdayPercent] = useState(0);
  bgColors[today] = "blue";

  const todayExpense = expenses[today];
  // useEffect(() => {
  //   dispatch(setCurrentWeek());
  // }, [currentWeekData]);


  useEffect(() => {
    expenses
    dispatch(setCurrentWeek());
    today
    calcPercentYesterday();
  }, [indexWeek, dispatch,]);

  const calcPercentYesterday = () => {
    if (today > 0 && today < expenses.length) { // Only calculate if today is not Monday
      let difference = todayExpense - expenses[today - 1];
      let percentDifference = (difference / expenses[today - 1]) * 100;
      setYesterdayPercent(percentDifference.toFixed(2));
    }
  }


  if (!currentWeekData || !currentWeekData.datasets) {
    return <div>Loading...</div>;
  }

  var myOptions = {
    animation: true,
    plugins: {
      legend: {
        display: true
      }
    },
    responsive: true,
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      }
    }
  };
  const myData = {
    labels: week,
    datasets: [
      {
        label: 'Despeses',
        data: expenses,
        backgroundColor: bgColors,
        stack: 'Stack 0',
      }
    ]
  };


  return (
    <div className='p-4 bg-white rounded-3'>
      <h2>{t("chart.weeklyExpenses")} {indexWeek + 1}</h2>
      <Bar data={myData} options={myOptions} />
      <h1>{t("chart.todayExpenses")} <span id="todayExpenses">{todayExpense}</span>€</h1>
      <h3>{t("chart.difFromYesterday")} <span id="difFromYesterday">{yesterdayPercent}</span> %</h3>
    </div>
  )
}
