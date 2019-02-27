import * as React from 'react';
import { connect } from "react-redux";
import { css } from "aphrodite/no-important";

import styles from "./styles";

import { getMoviesStart, searchMoviesStart } from "../../actions/movies";
import { AppState } from '../../reducers'
import Loading from "../../components/Atoms/Loading";
import Header from "../../components/Organisms/Header";
import Footer from "../../components/Organisms/Footer";
import MovieCard from "../../components/Molecules/MovieCard";
import SearchForm from "../../components/Molecules/SearchForm";
import Pagination from "../../components/Molecules/Pagination";

interface StateProps {
  global: any,
  movies: any
}

interface DispatchProps {
  getMoviesStart: (page: number) => void,
  searchMoviesStart: (searchText: number, page: number) => void
}

type Props = StateProps & DispatchProps

interface State {
  searchText: null;
}

class Home extends React.Component<Props, State> {
  state = {
    searchText: null
  };

  componentDidMount() {
    this.props.getMoviesStart(1);
  }

  handleChange = value => {
    this.setState({
      searchText: value
    });
  };

  handleSearch = e => {
    const { searchText } = this.state;
    const searchTextExist = !!searchText;
    e.preventDefault();
    searchTextExist && this.props.searchMoviesStart(searchText, 1);
    !searchTextExist && this.props.getMoviesStart(1);
  };

  paginationClick = value => {
    const page = value.selected + 1;
    this.props.getMoviesStart(page);
  };

  render() {
    const {
      global: { loading },
      movies
    } = this.props;

    const { searchText } = this.state;

    const errorExist = !!movies.error;
    const searchTextExist = !!searchText;
    return (
      <div className={css(styles.page)}>
        {loading && (
          <section className={css(styles.loading)}>
            <Loading />
          </section>
        )}
        <React.Fragment>
          <Header />
          <SearchForm
            handleSearch={this.handleSearch}
            handleChange={this.handleChange}
          />
          <div className={css(styles.main)}>
            {!errorExist && (
              <React.Fragment>
                {movies.list[0] && (
                  <React.Fragment>
                    <div className={css(styles.moviesWrap)}>
                      {movies.list.map(item => (
                        <MovieCard
                          key={item.id}
                          movie={item}
                          genres={movies.genres}
                        />
                      ))}
                    </div>
                    <Pagination
                      pageCount={movies.totalPages}
                      onPageChange={this.paginationClick}
                    />
                  </React.Fragment>
                )}
                {!movies.list[0] && searchTextExist && (
                  <div className={css(styles.error)}>
                    There are no movies that matched your query.
                  </div>
                )}
              </React.Fragment>
            )}
            {errorExist && (
              <div className={css(styles.error)}>
                {`Sorry, ${movies.error}`}{" "}
              </div>
            )}
          </div>
          <Footer />
        </React.Fragment>
      </div>
    );
  }
}

const mapStateToProps = (state: AppState) => state;

const mapDispatchToProps = {
  getMoviesStart,
  searchMoviesStart
}

export default connect<StateProps, DispatchProps, {}>(mapStateToProps, mapDispatchToProps)(Home)


