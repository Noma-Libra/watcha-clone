import React from "react";
import Presenter from "./HomePresenter";
import { movieApi } from "api";

export default class extends React.Component {
  state = {
    nowPlaying: null,
    upcoming: null,
    popular: null,
    error: null,
    loading: true,
  };

  /*
    로직 및 API 호출 그리고 에러 처리를 작성함
  */

  getNowPlaying() {
    return movieApi.nowPlaying();
  }

  getUpcoming() {
    return movieApi.upcoming();
  }

  getPopular() {
    return movieApi.popular();
  }

  async componentDidMount() {
    try {
      const {
        data: { results: nowPlaying },
      } = await this.getNowPlaying();

      const {
        data: { results: upcoming },
      } = await this.getUpcoming();

      const {
        data: { results: popular },
      } = await this.getPopular();

      this.setState({
        nowPlaying,
        upcoming,
        popular,
      });
    } catch {
      this.setState({
        error: "Can't find moives information.",
      });
    } finally {
      this.setState({
        loading: false,
      });
    }
  }

  render() {
    const { nowPlaying, upcoming, popular, error, loading } = this.state;
    console.log(this.state);
    return (
      <Presenter
        nowPlaying={nowPlaying}
        upcoming={upcoming}
        popular={popular}
        error={error}
        loading={loading}
      />
    );
  }
}
