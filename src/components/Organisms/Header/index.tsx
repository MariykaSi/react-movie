import * as React from 'react';
import { css } from "aphrodite/no-important";

import styles from "./styles";

class Header extends React.PureComponent {
  render() {
    return (
      <header className={css(styles.header)}>
        <div className={css(styles.container, styles.logo)}>
          <a href="/">The Movie</a>
        </div>
      </header>
    );
  }
}

export default Header;
