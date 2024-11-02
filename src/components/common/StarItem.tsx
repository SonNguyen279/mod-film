import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons/faStar";
import { faStar as faStarThin } from "@fortawesome/free-regular-svg-icons";

interface IStarItemProps {
  widthStar: string;
}

const StarItem = ({ widthStar }: IStarItemProps) => {
  return (
    <span className="movie-icon-span1">
      <FontAwesomeIcon icon={faStarThin} className="movie-icon" />
      <span style={{ width: widthStar }} className="movie-icon-span2">
        <FontAwesomeIcon icon={faStar} className="movie-icon" />
      </span>
    </span>
  );
};

export default StarItem;
