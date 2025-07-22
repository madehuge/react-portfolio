import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

// Import Global CSS
import './assets/css/bootstrap.css'
import './assets/css/all.css'
import './assets/css/jquery.animatedheadline.css'
import './assets/css/animate.css'
import './assets/css/swiper.css'
import './assets/css/fancybox.css'
import './assets/css/odometer-theme-minimal.css'
import './assets/css/style_light.css'
import './assets/css/responsive.css'

import './index.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <BrowserRouter>
        <App />
      </BrowserRouter>
  </StrictMode>
);
