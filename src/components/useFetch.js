import { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';

const useFetch = () => {
  const isMounted = useRef(false);
  const [movie, setMovie] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    isMounted.current = true;
    async function fetchData() {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/top_rated?api_key=dc49f98101ca64a4660533265f036686`
        );
        if (response.ok) {
          const json = await response.json();
          if (isMounted.current) setMovie(json.results);
        } else {
          throw response;
        }
      } catch (e) {
        if (isMounted.current) setError(e);
      } finally {
        if (isMounted.current) setLoading(false);
      }
    }
    fetchData();
    return () => {
      isMounted.current = false;
    };
  }, []);
  console.log(movie);
  return { movie, error, loading };
};

export default useFetch;
