import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface IDiscoverItemProps {
  hrefName: string;
  iconName: IconProp;
  title: string;
}

const MenuItem = ({ hrefName, iconName, title }: IDiscoverItemProps) => {
  return (
    <a className="discover-item" href={hrefName}>
      <div className="discover-add">
        <FontAwesomeIcon icon={iconName} className="discover-icon" />
        {title}
      </div>
    </a>
  );
};

export default MenuItem;
