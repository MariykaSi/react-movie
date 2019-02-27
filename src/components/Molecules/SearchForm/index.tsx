import * as React from "react";
import { css } from "aphrodite/no-important";

import Input from "../../Atoms/Input";

import styles from "./styles";
export interface Props {
  handleSearch(event: any): void;
  handleChange(event: any): void;
}

class SearchForm extends React.PureComponent<Props, {}> {
  render() {
    const { handleSearch, handleChange } = this.props;
    return (
      <div className={css(styles.search)}>
        <form onSubmit={e => handleSearch(e)} className={css(styles.container)}>
          <Input name="Search" onChange={handleChange} />
        </form>
      </div>
    );
  }
}

export default SearchForm;
