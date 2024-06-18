import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import { Provider } from 'react-redux';
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';
import { store } from '../store/store';
import BarChartComp from './BarChartComp';


describe('BarChartComp', () => {
    test('renders loading state initially', () => {
        render(
            <Provider store={store}>
                <I18nextProvider i18n={i18next}>
                    <BarChartComp />
                </I18nextProvider>
            </Provider>
        );

        expect(screen.getByText(/Loading.../i)).toBeInTheDocument();
    });

    // loading + weeklyExpenses component
    test('renders chart after loading', async () => {
        render(
            <Provider store={store}>
                <I18nextProvider i18n={i18next}>
                    <BarChartComp />
                </I18nextProvider>
            </Provider>
        );

        expect(await screen.findByText(/weeklyExpenses/i)).toBeInTheDocument();
        expect(screen.getByText(/todayExpenses/i)).toBeInTheDocument();
    });
});
