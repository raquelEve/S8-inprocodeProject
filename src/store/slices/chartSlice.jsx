import React from 'react'
import { createSlice } from '@reduxjs/toolkit';
import barChartData from "../../data/BarChartData";



const initialState = {
    weeklyExpenses: barChartData.weeklyExpenses,
    // currentWeek: barChartData.weeklyExpenses[0].datasets,
    currentWeek: barChartData.weeklyExpenses[0],
    currentWeekIndex: 0,
    totalweek: 0,
    totalWeeks: barChartData.weeklyExpenses.length
};
// const shallowCopy = JSON.parse(JSON.stringify(state.weeklyExpenses));
// console.log("data22", shallowCopy);
// console.log("data33", shallowCopy[state.currentWeekIndex].datasets[0].data);

const chartSlice = createSlice({
    name: 'chart',
    initialState,
    reducers: {
        currentWeekIndex: (state, action) => {
            state.currentWeekIndex = action.payload;
        },
        setCurrentWeekExpenses: (state, action) => {
            state.weeklyExpenses[state.currentWeekIndex] = action.payload;
        },
        setCurrentWeek: (state) => {
            state.currentWeek = state.weeklyExpenses[state.currentWeekIndex];
        },
        incrementWeekIndex: (state) => {
            if (state.currentWeekIndex < state.weeklyExpenses.length - 1) {
                state.currentWeekIndex += 1;
            }
            console.log("state.currentWeekIndex", state.currentWeekIndex);
        },
        decrementWeekIndex: (state) => {
            if (state.currentWeekIndex > 0) {
                state.currentWeekIndex -= 1;
            }
        },
        calcTotalWeek: (state) => {
            const currentWeekExpenses = state.weeklyExpenses[state.currentWeekIndex].datasets[0].data;
            state.totalweek = currentWeekExpenses.reduce(
                (sum, currentValue) => sum + currentValue, 0
            );
        }
    }
});

export const {
    setCurrentWeekIndex,
    setCurrentWeekExpenses,
    incrementWeekIndex,
    decrementWeekIndex,
    calcTotalWeek,
    setCurrentWeek
} = chartSlice.actions;

export default chartSlice.reducer;