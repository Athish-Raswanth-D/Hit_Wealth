import React, { useEffect, useRef, memo } from 'react';

function Livetrading() {
  const container = useRef();

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
      {
        "autosize": true,
        "symbol": "NASDAQ:AAPL",
        "interval": "D",
        "timezone": "Etc/UTC",
        "theme": "dark",
        "style": "1",
        "locale": "en",
        "allow_symbol_change": true,
        "calendar": false,
        "support_host": "https://www.tradingview.com"
      }`;
    container.current.appendChild(script);
  }, []);

  return (
    <div
      ref={container}
      style={{
        position: 'fixed', // Keeps the widget in a fixed position
        top: 0,
        left: 0,
        width: '100vw', // Takes full viewport width
        height: '100vh', // Takes full viewport height
        margin: 0,
        padding: 0,
        zIndex: 999, // Keeps the widget on top of other content
      }}
    >
      <div
        className="tradingview-widget-container__widget"
        style={{
          width: '100%',
          height: '100%',
        }}
      ></div>
    </div>
  );
}

export default memo(Livetrading);
