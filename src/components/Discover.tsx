// import { useParams } from "react-router-dom";

import { faHeart } from "@fortawesome/free-regular-svg-icons";
import MenuItem from "./common/MenuItem";
import {
  faCalendar,
  faCircleDot,
  faSquarePollVertical,
} from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

interface IDiscoverProps {
  href: string;
  icon: IconProp;
  title: string;
}

const Discover = () => {
  // const params = useParams();
  const discoverData = [
    {
      href: "/discover/popular",
      icon: faHeart,
      title: "Popular",
    },
    {
      href: "/discover/top rated",
      icon: faSquarePollVertical,
      title: "Top rated",
    },
    {
      href: "/discover/upcoming",
      icon: faCalendar,
      title: "Upcoming",
    },
  ];

  const genresData = [
    {
      href: "/genres/action",
      icon: faCircleDot,
      title: "Action",
    },
    {
      href: "/genres/adventure",
      icon: faCircleDot,
      title: "Adventure",
    },
    {
      href: "/genres/animation",
      icon: faCircleDot,
      title: "Animation",
    },
    {
      href: "/genres/comedy",
      icon: faCircleDot,
      title: "Comedy",
    },
    {
      href: "/genres/crime",
      icon: faCircleDot,
      title: "Crime",
    },
    {
      href: "/genres/documentary",
      icon: faCircleDot,
      title: "Documentary",
    },
    {
      href: "/genres/drama",
      icon: faCircleDot,
      title: "Drama",
    },
    {
      href: "/genres/family",
      icon: faCircleDot,
      title: "Family",
    },
    {
      href: "/genres/fantasy",
      icon: faCircleDot,
      title: "Fantasy",
    },
    {
      href: "/genres/history",
      icon: faCircleDot,
      title: "History",
    },
    {
      href: "/genres/horror",
      icon: faCircleDot,
      title: "Horror",
    },
    {
      href: "/genres/music",
      icon: faCircleDot,
      title: "Music",
    },
    {
      href: "/genres/mystery",
      icon: faCircleDot,
      title: "Mystery",
    },
    {
      href: "/genres/romance",
      icon: faCircleDot,
      title: "Romance",
    },
    {
      href: "/genres/science fiction",
      icon: faCircleDot,
      title: "Science fiction",
    },
    {
      href: "/genres/tv movie",
      icon: faCircleDot,
      title: "TV Movie",
    },
    {
      href: "/genres/thriller",
      icon: faCircleDot,
      title: "Thriller",
    },
    {
      href: "/genres/war",
      icon: faCircleDot,
      title: "War",
    },
    {
      href: "/genres/western",
      icon: faCircleDot,
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
        <form className="search-item search-item-action">
          <button className="search-button search-button-action"></button>
          <input
            placeholder="Search for a movie"
            className="search-input search-input-action"
          />
        </form>
      </div>
      <div className="column-right">
        <div className="right-full">
          <div className="header-name">
            <h1>POPULAR</h1>
            <p>MOVIES</p>
          </div>
          <div className="list-movie">
            <a className="one-movie">
              <img
                src="https://image.tmdb.org/t/p/w342/k42Owka8v91trK1qMYwCQCNwJKr.jpg"
                alt=""
              />
              <div className="movie-name">
                <h2>Venom: The Last Dance</h2>
              </div>
              <div className="evaluate-movie"></div>
            </a>
            <a className="one-movie">
              <img
                src="https://image.tmdb.org/t/p/w342/wTnV3PCVW5O92JMrFvvrRcV39RU.jpg"
                alt=""
              />
              <div className="movie-name">
                <h2>Venom: The Last Dance</h2>
              </div>
              <div className="evaluate-movie"></div>
            </a>
            <a className="one-movie">
              <img
                src="https://image.tmdb.org/t/p/w342/63xYQj1BwRFielxsBDXvHIJyXVm.jpg"
                alt=""
              />
              <div className="movie-name">
                <h2>Venom: The Last Dance</h2>
              </div>
              <div className="evaluate-movie"></div>
            </a>
            <a className="one-movie">
              <img
                src="https://image.tmdb.org/t/p/w342/qrwI2T844nrBUv3eDwQZRDdgSFs.jpg"
                alt=""
              />
              <div className="movie-name">
                <h2>Venom: The Last Dance</h2>
              </div>
              <div className="evaluate-movie"></div>
            </a>
            <a className="one-movie">
              <img
                src="https://image.tmdb.org/t/p/w342/b33nnKl1GSFbao4l3fZDDqsMx0F.jpg"
                alt=""
              />
              <div className="movie-name">
                <h2>Venom: The Last Dance</h2>
              </div>
              <div className="evaluate-movie"></div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discover;
