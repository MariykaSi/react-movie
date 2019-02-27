import * as React from 'react';
import { css } from "aphrodite/no-important";

import styles from "./styles";

export interface Props {
  title: string;
}

class Title extends React.PureComponent<Props, {}> {
  render() {
    const { title } = this.props;
    return (
      <h2 className={css(styles.title)}>
        <span className={css(styles.label)}>Title:</span> {title}
      </h2>
    );
  }
}

export default Title;
