import { useParams } from "react-router-dom"

const Discover = () => {
  const params = useParams()
  
  return (
    <div>
      Discover: {params.discoverName}
    </div>
  )
}

export default Discover
