import * as React from "react";
import { css } from "aphrodite/no-important";
import { Link } from "react-router-dom";

import Image from "../../Atoms/Image";
import Title from "../../Atoms/Title";

import styles from "./styles";

export interface Props {
  movie: any;
}

class RecommendationCard extends React.PureComponent<Props, {}> {
  render() {
    const { movie } = this.props;
    return (
      movie && (
        <div className={css(styles.cart)}>
          <Link to={`/movies/${movie.id}`}>
            <Image pathImg={movie.poster_path} alt={movie.title} />
            <Title title={movie.title} />
          </Link>
        </div>
      )
    );
  }
}

export default RecommendationCard;
