
# Inprocode
<p align="left">
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/768px-React-icon.svg.png" height="40px">
<img src="https://imgs.search.brave.com/1uSbVQcXzqfrmBBQl2IoV_LtkH2xXY-A7Kgn7SNY934/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9zZWVr/bG9nby5jb20vaW1h/Z2VzL1Yvdml0ZS1s/b2dvLUJGRDQyODM5/OTEtc2Vla2xvZ28u/Y29tLnBuZw" height="40px">
<img src="https://imgs.search.brave.com/EKsk4xtJu-qcCLu6v_GJEiJbWXakB9PzJp_snmXg4ak/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jZG4u/d29ybGR2ZWN0b3Js/b2dvLmNvbS9sb2dv/cy90YWlsd2luZC1j/c3MtMi5zdmc.svg" height="30px">
<img src="https://img.daisyui.com/images/daisyui-logo/daisyui-logomark.svg" height="40px">
<img src="https://imgs.search.brave.com/c4-kyke9Ab0X9ZN4Xt9DUV3AqD2ucLxoBpDzDMqQcUc/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc3RpY2twbmcu/Y29tL2ltYWdlcy81/ODQ4MzA5YmNlZjEw/MTRjMGI1ZTRhOWEu/cG5n" height="40px">
<img src"https://redux-toolkit.js.org/img/redux.svg" height="40px" />
</p>

## Geting Started
```
$ npm create vite@latest my-proyect
select framework:    react
select variant:      javascript + SWC
$ cd my-project
$ npm install
$ npm run dev

```
## Install Reactstrap
```
$ npm install reactstrap react react-dom
$ npm install --save bootstrap
```
&#128459; App.js
```
 import 'bootstrap/dist/css/bootstrap.min.css';
```
&#128459; html
```
<head>
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css"
  />
</head>
```

## Install React Router
```
$ npm install react-router-dom
```
## Install Redux Toolkit
```
$ npm install @reduxjs/toolkit
$ npm install react-redux
```
## react-chartjs-2
```
$ npm install --save chart.js react-chartjs-2
```
 import individual component
```
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

<Doughnut data={...} />
```
## install I18n
```
 $ npm install i18next
 $ npm install react-i18next
```
#### Install Vitest + testing library + jsdom
```
$ npm install -D vitest
$ npm install @testing-library/react @testing-library/user-event @testing-library/jest-dom jsdom
```
&#128459; vite.config.js add
```
 test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTest.js',
    css: true,
  }
```
&#128459; in src/ create the setupTest.js file
```
import '@testing-library/jest-dom'
```