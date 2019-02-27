import * as React from 'react';
import { Dispatch } from 'redux'
import { connect } from "react-redux";
import { css } from "aphrodite/no-important";

import styles from "./styles";
import { getMovieStart } from "../../actions/movie";
import { getRecommendationsStart } from "../../actions/recommendations";
import { AppState } from '../../reducers'
import Loading from "../../components/Atoms/Loading";
import Header from "../../components/Organisms/Header";
import Footer from "../../components/Organisms/Footer";
import MovieDetails from "../../components/Molecules/MovieDetails";
import RecommendationCard from "../../components/Molecules/RecommendationCard";

interface StateProps {
  global: any,
  movie: any,
  match?: any
}

interface DispatchProps {
  getMovieStart: (id: string) => void,
  getRecommendationsStart: (id: string) => void
}

type Props = StateProps & DispatchProps

class Movie extends React.Component<Props, {}> {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getMovieStart(id);
    this.props.getRecommendationsStart(id);
  }

  componentDidUpdate(prevProps) {
    const { id } = this.props.match.params;
    if (prevProps.match.params.id !== id) {
      this.props.getMovieStart(id);
      this.props.getRecommendationsStart(id);
    }
  }

  render() {
    const {
      global: { loading },
      movie
    } = this.props;

    const errorExist = movie.error;
    const errorRecommendationsExist = movie.errorRecommendations;
    return (
      <div className={css(styles.page)}>
        {loading && (
          <section className={css(styles.loading)}>
            <Loading />
          </section>
        )}
        <React.Fragment>
          <Header />
          <div className={css(styles.main)}>
            <div className={css(styles.container)}>
              {!errorExist && <MovieDetails movie={movie.details} />}
              {errorExist && (
                <div className={css(styles.error)}>{`Sorry, ${
                  movie.error
                  }`}</div>
              )}
              {movie.recommendations[0] && (
                <React.Fragment>
                  <p className={css(styles.subTitle)}>Recommendation:</p>
                  <div className={css(styles.recommendation)}>
                    {movie.recommendations.slice(0, 10).map(item => (
                      <RecommendationCard key={item.id} movie={item} />
                    ))}
                  </div>
                </React.Fragment>
              )}
              {errorRecommendationsExist && (
                <div className={css(styles.error)}>{`Sorry, ${
                  movie.errorRecommendations
                  }`}</div>
              )}
            </div>
          </div>
          <Footer />
        </React.Fragment>
      </div>
    );
  }
}

const mapStateToProps = (state: AppState) => state;

const mapDispatchToProps = {
  getMovieStart,
  getRecommendationsStart,
}

export default connect<StateProps, DispatchProps, {}>(mapStateToProps, mapDispatchToProps)(Movie)
