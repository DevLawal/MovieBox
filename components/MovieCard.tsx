// MovieCard.js

const MovieCard = ({ movie }) => {
  const { title, overview, poster_path, release_date } = movie;

  return (
    <div className="max-w-md rounded overflow-hidden shadow-lg">
      <img
        src={`https://image.tmdb.org/t/p/w300${poster_path}`}
        alt={title}
        className="w-full"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{overview}</p>
        <p className="text-gray-600 text-base">Release Date: {release_date}</p>
      </div>
    </div>
  );
};
export default MovieCard;