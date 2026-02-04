import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import faviconImg from './assets/Codexa IT logo.png'

// Create favicon with white background
const createFaviconWithBg = () => {
  const canvas = document.createElement('canvas');
  canvas.width = 64;
  canvas.height = 64;
  const ctx = canvas.getContext('2d');
  
  // Draw white rounded background
  ctx.fillStyle = '#ffffff';
  ctx.beginPath();
  ctx.roundRect(0, 0, 64, 64, 8);
  ctx.fill();
  
  // Load and draw logo
  const img = new Image();
  img.onload = () => {
    const padding = 6;
    ctx.drawImage(img, padding, padding, 64 - padding * 2, 64 - padding * 2);
    
    // Update favicon
    const link = document.querySelector("link[rel='icon']") || document.createElement('link');
    link.type = 'image/png';
    link.rel = 'icon';
    link.href = canvas.toDataURL('image/png');
    document.head.appendChild(link);
  };
  img.src = faviconImg;
};

createFaviconWithBg();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)