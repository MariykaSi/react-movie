import * as React from 'react';
import { css } from "aphrodite/no-important";

import styles from "./styles";

export interface Props {
  release: string;
}

class ReleaseDate extends React.PureComponent<Props, {}> {
  render() {
    const { release } = this.props;
    return (
      <p className={css(styles.release)}>
        <span className={css(styles.label)}>Release Date:</span> {release}
      </p>
    );
  }
}

export default ReleaseDate;
