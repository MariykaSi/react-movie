import * as React from 'react';
import { css } from "aphrodite/no-important";

import Image from "../../Atoms/Image";
import Title from "../../Atoms/Title";
import Vote from "../../Atoms/Vote";
import ReleaseDate from "../../Atoms/ReleaseDate";
import Genre from "../../Atoms/Genre";

import styles from "./styles";

export interface Props {
  movie: any;
}

class MovieDetails extends React.PureComponent<Props, {}> {
  render() {
    const { movie } = this.props;
    return (
      movie && (
        <div>
          <div className={css(styles.leftContainer)}>
            <Image pathImg={movie.poster_path} alt={movie.title} />
            <Vote vote={movie.vote_average} />
            <Title title={movie.title} />
            <ReleaseDate release={movie.release_date} />
          </div>

          <div className={css(styles.rightContainer)}>
            <p className={css(styles.label)}>Overview:</p>
            <p>{movie.overview}</p>
            <p className={css(styles.label)}>Genres:</p>
            {movie.genres.map(item => (
              <Genre key={item.id} genre={item.name} />
            ))}
          </div>
        </div >
      )
    );
  }
}

export default MovieDetails;
