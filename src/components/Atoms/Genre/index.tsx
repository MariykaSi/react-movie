import * as React from 'react';
import { css } from "aphrodite/no-important";

import styles from "./styles";

export interface Props {
  genre: string;
}

class Genre extends React.PureComponent<Props, {}> {
  render() {
    const { genre } = this.props;
    return <p className={css(styles.genre)}>{genre}</p>;
  }
}

export default Genre;
