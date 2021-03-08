import React from "react";
import Preasenter from "./SearchPresenter";
import { tvApi, movieApi } from "api";

export default class extends React.Component {
  state = {
    movieResults: null,
    tvResults: null,
    searchTerm: "",
    loading: false,
    error: null,
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { searchTerm } = this.state;
    if (searchTerm !== "") {
      this.searchByTerm();
    }
  };

  updateTerm = (event) => {
    const {
      target: { value },
    } = event;

    this.setState({
      searchTerm: value,
    });
  };

  getSearchTV(searchTerm) {
    return tvApi.search(searchTerm);
  }

  getSearchMovie(searchTerm) {
    return movieApi.search(searchTerm);
  }

  async searchByTerm() {
    const { searchTerm } = this.state;
    this.setState({
      loading: true,
    });

    try {
      const {
        data: { results: movieResults },
      } = await this.getSearchMovie(searchTerm);

      const {
        data: { results: tvResults },
      } = await this.getSearchTV(searchTerm);

      this.setState({
        movieResults,
        tvResults,
      });
    } catch (err) {
      console.error(err.message);
      this.setState({
        error: "Can't find results",
      });
    } finally {
      this.setState({
        loading: false,
      });
    }
  }

  /*
    테스트 용 ComponentDidMount 삭제해야 함
  */

  render() {
    const { movieResults, tvResults, searchTerm, loading, error } = this.state;

    return (
      <Preasenter
        movieResults={movieResults}
        tvResults={tvResults}
        searchTerm={searchTerm}
        loading={loading}
        error={error}
        handleSubmit={this.handleSubmit}
        updateTerm={this.updateTerm}
      />
    );
  }
}
