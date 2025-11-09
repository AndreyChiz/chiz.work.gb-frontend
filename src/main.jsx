
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { Provider } from 'react-redux';
import { store } from './store';

import './assets/css/bootstrap.min.css'
import './assets/css/jquery.fancybox.min.css'
import './assets/css/owl.carousel.min.css'
import './assets/css/owl.theme.default.min.css'
import './assets/css/aos.css'
import './assets/css/style.css'
import './assets/fonts/icomoon/style.css'
import './assets/fonts/flaticon/font/flaticon.css'


createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider >

)
