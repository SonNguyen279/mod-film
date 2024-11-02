/* eslint-disable for-direction */
import { useMemo } from "react";
import { IMovieItemProps } from "../../interfaces";
import StarItem from "./StarItem";

interface MovieIconItemProps {
  widthStar: string;
}

const MovieItem = ({ imgUrl, hrefMovie, title, point }: IMovieItemProps) => {
  const iconData = useMemo(() => {
    // Logic

    return [
      {
        widthStar: "100%",
      },
      {
        widthStar: "100%",
      },
      {
        widthStar: "100%",
      },
      {
        widthStar: "0%",
      },
      {
        widthStar: "0%",
      },
    ];
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [point]);
  // Neu point la 6 thi tra ve const iconData = [
  //   {
  //     widthStar: "100%",
  //   },
  //   {
  //     widthStar: "100%",
  //   },
  //   {
  //     widthStar: "0%",
  //   },
  //   {
  //     widthStar: "0%",
  //   },
  //   {
  //     widthStar: "0%",
  //   },
  // ];
  // Neu la 10 diem thi tra ve const iconData = [
  //   {
  //     widthStar: "100%",
  //   },
  //   {
  //     widthStar: "100%",
  //   },
  //   {
  //     widthStar: "100%",
  //   },
  //   {
  //     widthStar: "100%",
  //   },
  //   {
  //     widthStar: "100%",
  //   },
  // ];

  return (
    <a className="movie-one" href={hrefMovie}>
      <img src={imgUrl} alt="" className="movie-img" />
      <div className="movie-name">
        <h2>{title}</h2>
        <div className="movie-icon-add">
          {iconData.map((item: MovieIconItemProps, index: number) => (
            <StarItem key={`movie-icon-${index}`} widthStar={item.widthStar} />
          ))}
        </div>
      </div>
    </a>
  );
};

export default MovieItem;
