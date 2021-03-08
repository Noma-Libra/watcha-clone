import React from "react";
import Presenter from "./TVPresenter";
import { tvApi } from "api";

export default class extends React.Component {
  state = {
    topRated: null,
    airingToday: null,
    popular: null,
    error: null,
    loading: true,
  };

  getTopRated() {
    return tvApi.topRated();
  }

  getAiringToday() {
    return tvApi.airingToday();
  }

  getPopular() {
    return tvApi.popular();
  }

  async componentDidMount() {
    try {
      const {
        data: { results: topRated },
      } = await this.getTopRated();

      const {
        data: { results: airingToday },
      } = await this.getAiringToday();

      const {
        data: { results: popular },
      } = await this.getPopular();

      this.setState({
        topRated,
        airingToday,
        popular,
      });
    } catch (err) {
      //   console.error(err.message);
      this.setState({
        error: "Can't find TV programs information.",
      });
    } finally {
      this.setState({
        loading: false,
      });
    }
  }

  render() {
    const { topRated, airingToday, popular, error, loading } = this.state;

    return (
      <Presenter
        topRated={topRated}
        airingToday={airingToday}
        popular={popular}
        error={error}
        loading={loading}
      />
    );
  }
}
