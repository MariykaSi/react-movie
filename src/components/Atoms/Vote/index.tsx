import * as React from 'react';
import { css } from "aphrodite/no-important";

import styles from "./styles";

export interface Props {
  vote: string;
}

class Vote extends React.PureComponent<Props, {}> {
  render() {
    const { vote } = this.props;
    return <div className={css(styles.vote)}>{vote}</div>;
  }
}

export default Vote;
