import React, { useEffect } from 'react';
import './Stocknews.css'; // Assuming you want to add custom CSS here

const Stocknews = () => {

  useEffect(() => {
    // Dynamically load the script
    const script = document.createElement('script');
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-timeline.js";
    script.async = true;
    script.onload = () => {
      // Initialize the TradingView widget after the script has loaded
      new window.TradingView.widget({
        "feedMode": "all_symbols",
        "isTransparent": false,
        "displayMode": "regular",
        "width": "100%",
        "height": "100%",
        "colorTheme": "dark",
        "locale": "en"
      });
    };
    document.body.appendChild(script);

    // Clean up the script when component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="tradingview-widget-container">
      <div className="tradingview-widget-container__widget"></div>
      <div className="tradingview-widget-copyright">
        <a 
          href="https://www.tradingview.com/" 
          rel="noopener nofollow" 
          target="_blank"
        >
        </a>
      </div>
    </div>
  );
}
export default Stocknews;

