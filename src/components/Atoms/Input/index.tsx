import * as React from 'react';
import { css } from "aphrodite/no-important";

import styles from "./styles";

export interface Props {
  name: string;
  onChange(event: any): void;
}

class Input extends React.PureComponent<Props, {}> {
  render() {
    const { name, onChange } = this.props;
    return (
      <input
        type="text"
        name={name}
        className={css(styles.input)}
        onChange={e => onChange(e.target.value)}
        placeholder={name}
      />
    );
  }
}

export default Input;
