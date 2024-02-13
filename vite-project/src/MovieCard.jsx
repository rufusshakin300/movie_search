import PropTypes from 'prop-types';

const MovieCard = ({ movie }) => {
  return (
    <div className="container">
        <div className="movie">
          <div>
             <p>{movie.Title}</p>
             <p>{movie.Year}</p>         
          </div>
          <div>
             <img src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/400' } alt={movie.Title} />
          </div>
          <div>
             <span>{movie.Type}</span>
             <h3>{movie.Title}</h3>
          </div>
        </div>
    </div>
  )
}
MovieCard.propTypes = {
    movie: PropTypes.shape({
      Title: PropTypes.string,
      Year: PropTypes.string,
      Poster: PropTypes.string,
      Type: PropTypes.string,
    }),
  };
export default MovieCard