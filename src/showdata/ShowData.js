import { useEffect, useState } from "react";
import Movie from "../components/Movie";
import styles from "../css/Home.module.css";
import SearchBar from '../components/searchData/SearchBar'

function ShowData() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [text, setSearch] = useState("");

  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?`
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);

  const onChange = (e) => {
    setSearch(e.target.value)
}

const filterTitle = movies.filter((p) => {
  return p.title.replace(" "," ").toLocaleLowerCase().includes(text.toLocaleLowerCase().replace(" ",""))
})

   return (
    <div className={styles.container}>
                <SearchBar value={text} onChange={onChange}/>

      {loading ? (
        <div className={styles.loader}>
        <span>Loading...</span>
      </div>
      ) : (
        <div className={styles.movies}>
        {filterTitle.map((movie) => (
          <Movie
            key={movie.id}
            id={movie.id}
            year={movie.year}
            coverImg={movie.medium_cover_image}
            title={movie.title}
            summary={movie.summary}
            genres={movie.genres}
          />
          ))}
          </div>
      )}
    </div>
  ); 
}
export default ShowData;
