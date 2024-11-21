import React, { useEffect, useRef, useState, memo } from "react";

function TradingViewWidget() {
  const container = useRef();
  const [prediction, setPrediction] = useState(null); // State for stock prediction
  const [showPayment, setShowPayment] = useState(false); // State for showing payment modal

  useEffect(() => {
    // TradingView widget setup
    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
      {
        "autosize": true,
        "interval": "D",
        "timezone": "Etc/UTC",
        "theme": "dark",
        "style": "1",
        "locale": "en",
        "allow_symbol_change": false,
        "calendar": false,
        "support_host": "https://www.tradingview.com"
      }`;
    container.current.appendChild(script);

    // Simulate stock prediction data
    const fetchPrediction = () => {
      setPrediction({
        trend: "up", // Possible values: "up", "down"
        confidence: 85, // Confidence level percentage
      });
    };

    fetchPrediction(); // Mock prediction data
  }, []);

  // Handle "Buy Now" button
  const handleBuyNow = () => {
    setShowPayment(true);
  };

  return (
    <div
      className="tradingview-widget-container"
      ref={container}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        height: "100vh",
        width: "100vw",
        zIndex: 9999,
      }}
    >
      {/* Widget Container */}
      <div
        className="tradingview-widget-container__widget"
        style={{
          height: "100%",
          width: "100%",
        }}
      ></div>

      {/* Prediction Section */}
      {prediction && (
        <div
          style={{
            position: "absolute",
            bottom: "20px",
            left: "20px",
            background: "#fff",
            borderRadius: "10px",
            padding: "15px",
            boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
          }}
        >
          <h4>Stock Prediction</h4>
          <p>
            <strong>Trend:</strong> {prediction.trend === "up" ? "📈 Up" : "📉 Down"}
          </p>
          <p>
            <strong>Confidence:</strong> {prediction.confidence}%
          </p>
          <button
            style={{
              background: prediction.trend === "up" ? "green" : "gray",
              color: "#fff",
              padding: "10px 15px",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              marginTop: "10px",
            }}
            onClick={handleBuyNow}
          >
            Buy Now
          </button>
        </div>
      )}

      {/* Payment Modal */}
      {showPayment && (
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            background: "#fff",
            borderRadius: "10px",
            padding: "20px",
            width: "90%",
            maxWidth: "400px",
            boxShadow: "0 2px 10px rgba(0,0,0,0.3)",
          }}
        >
          <h3>Checkout</h3>
          <p>Selected Stock: XYZ</p>
          <p>Price: $1350</p>
          <h4>Payment Method</h4>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li>
              <input type="radio" id="paypal" name="payment" />
              <label htmlFor="paypal">PayPal</label>
            </li>
            <li>
              <input type="radio" id="credit-card" name="payment" />
              <label htmlFor="credit-card">Credit Card</label>
            </li>
            <li>
              <input type="radio" id="apple-pay" name="payment" />
              <label htmlFor="apple-pay">Apple Pay</label>
            </li>
          </ul>
          <button
            style={{
              background: "#007BFF",
              color: "#fff",
              padding: "10px 15px",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              width: "100%",
              marginTop: "10px",
            }}
            onClick={() => alert("Payment processed!")}
          >
            Pay $1350
          </button>
          <button
            style={{
              background: "red",
              color: "#fff",
              padding: "10px 15px",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              width: "100%",
              marginTop: "10px",
            }}
            onClick={() => setShowPayment(false)}
          >
            Cancel
          </button>
        </div>
      )}
    </div>
  );
}

export default memo(TradingViewWidget);