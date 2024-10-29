import { useParams } from "react-router-dom"

const Genres = () => {
  const params = useParams()
  return (
    <div>
      Genres: {params.genresName}
    </div>
  )
}

export default Genres
