import './index.css'

import React from 'react';
import App from './App.tsx'
import { createRoot } from 'react-dom/client'

window.React = React;

createRoot(document.getElementById('root')!).render(
  <App />
)