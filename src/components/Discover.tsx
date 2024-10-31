// import { useParams } from "react-router-dom";

import MenuItem from "./common/MenuItem";

interface IDiscoverProps {
  href: string;
  icon: string;
  title: string;
}

const Discover = () => {
  // const params = useParams();
  const discoverData = [
    {
      href: "/discover/popular",
      icon: "fa-heart",
      title: "Popular",
    },
    {
      href: "/discover/top rated",
      icon: "fa-signal-bars",
      title: "Top rated",
    },
    {
      href: "/discover/upcoming",
      icon: "fa-calendar-days",
      title: "Upcoming",
    },
  ];

  const genresData = [
    {
      href: "/genres/action",
      icon: "fa-circle-stop",
      title: "Action",
    },
    {
      href: "/genres/adventure",
      icon: "fa-circle-stop",
      title: "Adventure",
    },
    {
      href: "/genres/animation",
      icon: "fa-circle-stop",
      title: "Animation",
    },
    {
      href: "/genres/comedy",
      icon: "fa-circle-stop",
      title: "Comedy",
    },
    {
      href: "/genres/crime",
      icon: "fa-circle-stop",
      title: "Crime",
    },
    {
      href: "/genres/documentary",
      icon: "fa-circle-stop",
      title: "Documentary",
    },
    {
      href: "/genres/drama",
      icon: "fa-circle-stop",
      title: "Drama",
    },
    {
      href: "/genres/family",
      icon: "fa-circle-stop",
      title: "Family",
    },
    {
      href: "/genres/fantasy",
      icon: "fa-circle-stop",
      title: "Fantasy",
    },
    {
      href: "/genres/history",
      icon: "fa-circle-stop",
      title: "History",
    },
    {
      href: "/genres/horror",
      icon: "fa-circle-stop",
      title: "Horror",
    },
    {
      href: "/genres/music",
      icon: "fa-circle-stop",
      title: "Music",
    },
    {
      href: "/genres/mystery",
      icon: "fa-circle-stop",
      title: "Mystery",
    },
    {
      href: "/genres/romance",
      icon: "fa-circle-stop",
      title: "Romance",
    },
    {
      href: "/genres/science fiction",
      icon: "fa-circle-stop",
      title: "Science fiction",
    },
    {
      href: "/genres/tv movie",
      icon: "fa-circle-stop",
      title: "TV Movie",
    },
    {
      href: "/genres/thriller",
      icon: "fa-circle-stop",
      title: "Thriller",
    },
    {
      href: "/genres/war",
      icon: "fa-circle-stop",
      title: "War",
    },
    {
      href: "/genres/western",
      icon: "fa-circle-stop",
      title: "Western",
    },
  ];

  return (
    <div className="w-full">
      <div className="column-left">
        <div className="discover-page">
          <a className="discover-img" href="/">
            <img
              src="https://maxweb.vn/wp-content/uploads/2020/05/anh-nen-website-bat-dong-san-dep-1.png"
              alt=""
            />
          </a>
          <h2 className="discover-list">DISCOVER</h2>
          {discoverData.map((item: IDiscoverProps, index: number) => (
            <MenuItem
              key={`discover-${index}`}
              hrefName={item.href}
              iconName={item.icon}
              title={item.title}
            />
          ))}
          <h2 className="discover-list">GENRES</h2>
          {genresData.map((item: IDiscoverProps, index: number) => (
            <MenuItem
              key={`discover-${index}`}
              hrefName={item.href}
              iconName={item.icon}
              title={item.title}
            />
          ))}
        </div>
      </div>
      <div className="column-search">
        <form className="search-item">
          <button type="submit" className="search-button"></button>
          {/* <input placeholder="Search for a movie" className="search-input" /> */}
        </form>
      </div>
      <div className="column-right"></div>
    </div>
  );
};

export default Discover;
