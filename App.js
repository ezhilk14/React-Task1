import React from 'react';
import ReactDOM from 'react-dom';
import PriceCard from './PriceCard';

class App extends React.Component {
    render() {
        const cardData = [
            {
                plan: "FREE",
                price: "$0/month",
                features: [
                    "Single User", 
                    "50GB Storage", 
                    "Unlimited Public Projects", 
                    "Community Access", 
                    "Unlimited Private Projects", 
                    "Dedicated Phone Support", 
                    "Free Subdomain", 
                    "Monthly Status Reports"
                ],
                isPro: false
            },
            {
                plan: "PLUS",
                price: "$9/month",
                features: [
                    "5 Users", 
                    "50GB Storage", 
                    "Unlimited Public Projects", 
                    "Community Access", 
                    "Unlimited Private Projects", 
                    "Dedicated Phone Support", 
                    "Free Subdomain", 
                    "Monthly Status Reports"
                ],
                isPro: false
            },
            {
                plan: "PRO",
                price: "$49/month",
                features: [
                    "Unlimited Users", 
                    "50GB Storage", 
                    "Unlimited Public Projects", 
                    "Community Access", 
                    "Unlimited Private Projects", 
                    "Dedicated Phone Support", 
                    "Free Subdomain", 
                    "Monthly Status Reports"
                ],
                isPro: true
            }
        ];

        return (
            <div className="app">
                {cardData.map((card, index) => (
                    <PriceCard key={index} {...card} />
                ))}
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
