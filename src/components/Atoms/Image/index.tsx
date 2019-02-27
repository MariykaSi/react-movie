import * as React from 'react';
import { css } from "aphrodite/no-important";

import { imageUrl } from "../../../constants/global";

import styles from "./styles";

export interface Props {
  pathImg: string;
  alt: string;
}

class Image extends React.PureComponent<Props, {}> {
  render() {
    const { pathImg, alt } = this.props;
    return (
      <img
        src={`${imageUrl}${pathImg}`}
        alt={alt}
        className={css(styles.image)}
      />
    );
  }
}

export default Image;
