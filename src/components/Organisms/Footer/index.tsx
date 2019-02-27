import * as React from 'react';
import { css } from "aphrodite/no-important";

import styles from "./styles";

class Footer extends React.PureComponent {
  render() {
    return (
      <footer className={css(styles.footer)}>
        <div className={css(styles.copyright)}>
          <p>Copyright @ 2019 THE MOVIE</p>
        </div>
      </footer>
    );
  }
}

export default Footer;
