import { movieApi, tvApi } from "api";
import React from "react";
import DetailPresenter from "./DetailPresenter";

export default class extends React.Component {
  constructor(props) {
    super(props);
    const {
      location: { pathname },
    } = props;

    this.state = {
      result: null,
      error: null,
      loading: true,
      isMovie: pathname.includes("/movie/"),
    };
  }

  async componentDidMount() {
    const {
      match: {
        params: { id },
      },
      history: { push },
    } = this.props;
    const parseId = parseInt(id);
    const { isMovie } = this.state;

    if (isNaN(parseId)) {
      return push("/"); //return 하는 이유는 함수가 종료되서 홈으로 돌아가서도 함수가 실행되지 않게하기 위해서이다.
    }

    let result = null;
    try {
      if (isMovie) {
        ({ data: result } = await movieApi.movieDetailById(parseId));
      } else {
        ({ data: result } = await tvApi.tvDetailById(parseId));
      }
    } catch {
      this.setState({ error: "Can't find anything." });
    } finally {
      this.setState({ loading: false, result });
    }
  }

  render() {
    const { result, error, loading } = this.state;
    return <DetailPresenter result={result} error={error} loading={loading} />;
  }
}
