import { useState, useEffect } from "react";

function App() {
	const [loading, setLoading] = useState(true);
	const [coins, setCoins] = useState([]);
	const [amount, setAmount] = useState(0);
	const onChange = (event) => {
		setAmount(event.target.value);
	};
	useEffect(() => {
		fetch("https://api.coinpaprika.com/v1/tickers?limit=10")
			.then((response) => response.json())
			.then((json) => {
				setCoins(json);
				setLoading(false);
			});
	}, []);

	return (
		<div>
			<h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
			{loading ? (
				<strong>Loading...</strong>
			) : (
				<div>
					<input type="number" placeholder="Type the amount" value={amount} onChange={onChange} />
					<br />
					<br />
					<select>
						{coins.map((coin) => (
							<option key={coin.id}>
								{coin.name} ({coin.symbol}) : $
								{amount === 0 ? coin.quotes.USD.price : coin.quotes.USD.price / amount} USD
							</option>
						))}
					</select>
				</div>
			)}
		</div>
	);
}

export default App;
