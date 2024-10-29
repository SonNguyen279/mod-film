import { useParams } from "react-router-dom"

const Movie = () => {
  const params = useParams()

  return (
    <div>
      Movie: {params.movieId}
    </div>
  )
}

export default Movie
