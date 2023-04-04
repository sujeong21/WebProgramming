import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CommentHome from '../components/comments/CommentHome'
import '../css/Detail.css';
import '../components/comments/List.css';

export default function Detail() {
  const { id } = useParams();
  // 현재 페이지의 마지막 부분을 id로 받아온다.
  const [movie, setMovie] = useState();
  const [loading, setLoading] = useState(true);
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(json.data.movie);
    setLoading(false);
  };
  useEffect(getMovie, []);

  return (
    <>
      {loading ? (
        "loading..."
      ) : (
         <div className="movie__detail">
          <h1 id = 'title'>{movie.title}</h1>
          <div>
            <img src={movie.medium_cover_image}></img>
          </div>
          <div className="movie_info" style={{textAlign:"center"}}>rating: {movie.rating} | year:{movie.year} | runtime : {movie.runtime} | genres: {movie.genres.map((genre) => genre+", ")} </div>
          <div className="movie__summary">{movie.description_full}</div>
          <CommentHome/>
        </div> 
      )}
    </>
  );
}