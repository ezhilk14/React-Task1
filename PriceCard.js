import React from 'react';
import './App.css';

function PriceCard({ plan, price, features, isPro }) {
    return (
        <div className={`price-card ${isPro ? 'pro' : ''}`}>
            <h3>{plan}</h3>
            <h4>{price}</h4>
            <ul>
                {features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                ))}
            </ul>
            <button>BUTTON</button>
        </div>
    );
}

export default PriceCard;
