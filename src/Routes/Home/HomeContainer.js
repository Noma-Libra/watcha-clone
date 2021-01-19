import { movieApi } from "api";
import React from "react";
import HomePresenter from "./HomePresenter";

export default class extends React.Component {
  state = {
    nowPlaying: null,
    upcoming: null,
    popular: null,
    error: null,
    loading: true,
  };

  async componentDidMount() {
    try {
      const {
        data: { results: nowPlaying },
      } = await movieApi.nowPlaying();

      const {
        data: { results: upcoming },
      } = await movieApi.upcoming();

      const {
        data: { results: popular },
      } = await movieApi.popular();

      this.setState({
        nowPlaying,
        upcoming,
        popular,
      });
    } catch (err) {
      this.setState({ error: "Can't find moive information." });
    } finally {
      this.setState({ loading: false });
    }
  }

  //api 가져오는 것과 에러 로직을 여기다 작성할 것이다.

  render() {
    const { nowPlaying, upcoming, popular, error, loading } = this.state;
    return (
      <HomePresenter
        nowPlaying={nowPlaying}
        upcoming={upcoming}
        popular={popular}
        error={error}
        loading={loading}
      />
    );
  }
}
