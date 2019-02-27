import * as React from 'react';
import { css } from "aphrodite/no-important";
import { Link } from "react-router-dom";

import Image from "../../Atoms/Image";
import Title from "../../Atoms/Title";
import ReleaseDate from "../../Atoms/ReleaseDate";
import Genre from "../../Atoms/Genre";
const uuidv1 = require("uuid/v1");

import styles from "./styles";

export interface Props {
  genres?: Array<any>;
  movie: any;
}

class MovieCard extends React.PureComponent<Props, {}> {
  public render() {
    const { movie, genres } = this.props;
    return (
      <div className={css(styles.movie)}>
        <Link to={`/movies/${movie.id}`}>
          <Image pathImg={movie.poster_path} alt={movie.title} />
          <Title title={movie.title} />
        </Link>
        <ReleaseDate release={movie.release_date} />
        {movie.genre_ids[0] && genres[0] && (
          <div className={css(styles.genres)}>
            Genges:
            {movie.genre_ids.map(genre => {
              const currentGenre = genres.find(item => item.id == genre);
              return <Genre key={uuidv1()} genre={currentGenre.name} />;
            })}
          </div>
        )}
      </div>
    );
  }
}

export default MovieCard;
