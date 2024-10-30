interface IDiscoverItemProps {
  hrefName: string;
  iconName: string;
  title: string;
}

const MenuItem = ({ hrefName, iconName, title }: IDiscoverItemProps) => {
  return (
    <a className="discover-item" href={hrefName}>
      <div className="discover-add">
        <i className={`fa-solid ${iconName}`}></i>
        {title}
      </div>
    </a>
  );
};

export default MenuItem;
