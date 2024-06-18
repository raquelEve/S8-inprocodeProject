import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';
import ChangeLanguage from './ChangeLanguage';
import global_es from '../translations/es/global.json';
import global_ca from '../translations/ca/global.json';
import global_en from '../translations/en/global.json';

i18next.init({
    interpolation: { escapeValue: false },
    lng: 'en',
    resources: {
        es: { global: global_es },
        ca: { global: global_ca },
        en: { global: global_en },
    },
});

//Buttons are render??
describe('ChangeLanguage', () => {
    test('renders language buttons', () => {
        render(
            <I18nextProvider i18n={i18next}>
                <ChangeLanguage />
            </I18nextProvider>
        );

        expect(screen.getByAltText(/español/i)).toBeInTheDocument();
        expect(screen.getByAltText(/catalan/i)).toBeInTheDocument();
        expect(screen.getByAltText(/ingles/i)).toBeInTheDocument();
    });

    //change language on click?
    test('changes language onClick', () => {
        render(
            <I18nextProvider i18n={i18next}>
                <ChangeLanguage />
            </I18nextProvider>
        );

        fireEvent.click(screen.getByAltText(/español/i));
        expect(i18next.language).toBe('es');

        fireEvent.click(screen.getByAltText(/catalan/i));
        expect(i18next.language).toBe('ca');

        fireEvent.click(screen.getByAltText(/ingles/i));
        expect(i18next.language).toBe('en');
    });
});
