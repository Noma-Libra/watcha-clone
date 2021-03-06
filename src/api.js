import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "99bbc97666ad93f13b4a015957941637",
    language: "en-US",
  },
});

export const tvApi = {
  topRated: () => api.get("tv/top_rated"),
  airingToday: () => api.get("tv/airing_today"),
  popular: () => api.get("tv/popular"),
  // 인기있는 티비 쇼들 출력
  tvDetailById: (id) => api.get(`tv/${id}`),
  search: (term) =>
    api.get("search/tv", {
      params: {
        query: encodeURIComponent(term),
      },
    }),
};

export const movieApi = {
  nowPlaying: () => api.get("movie/now_playing"),
  // 현재 상영중인 영화를 출력
  upcoming: () => api.get("movie/upcoming"),
  // 곧 개봉예정인 영화 출력
  popular: () => api.get("movie/popular"),
  // 인기있는 영화들 출력
  movieDetailById: (id) =>
    api.get(`movie/${id}`, {
      params: {
        append_to_response: "videos",
      },
    }),
  search: (term) =>
    api.get("search/movie", {
      params: {
        query: encodeURIComponent(term),
      },
    }),
};
