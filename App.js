class PriceCard extends React.Component {
    render() {
        const { title, price, features } = this.props;
        return (
            <div className="price-card">
                <h2>{title}</h2>
                <h3>{price}</h3>
                <ul>
                    {features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

class App extends React.Component {
    render() {
        const cardData = [
            {
                title: "Basic",
                price: "$9.99",
                features: ["Feature 1", "Feature 2", "Feature 3"]
            },
            {
                title: "Standard",
                price: "$19.99",
                features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4"]
            },
            {
                title: "Premium",
                price: "$29.99",
                features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4", "Feature 5"]
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
