import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './store/store.jsx'
import { I18nextProvider } from "react-i18next"
import i18next from "i18next"
import global_es from "./translations/es/global.json"
import global_ca from "./translations/ca/global.json"
import global_en from "./translations/en/global.json"

i18next.init({
  interpolation: { escapeValue: false },
  lng: 'en',
  resources: {
    es: {
      global: global_es
    },
    ca: {
      global: global_ca
    },
    en: {
      global: global_en
    },
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <I18nextProvider i18n={i18next}>
        <App />
      </I18nextProvider>
    </Provider>
  </React.StrictMode>,
)
