import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Detail() {
	const { id } = useParams();
	const [movie, setMovie] = useState([]);
	const getMovie = async () => {
		const json = await (
			await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
		).json();
		setMovie(json.data.movie);
		// console.log(json.data.movie);
	};
	useEffect(() => {
		getMovie();
	}, []);
	return (
		<div>
			<h1>{movie.title_long}</h1>
			<img src={movie.medium_cover_image} alt="poster" />
			<ul>{movie.genres ? movie.genres.map((g) => <li key={g}>{g}</li>) : <li>Loading</li>}</ul>
		</div>
	);
}
export default Detail;
