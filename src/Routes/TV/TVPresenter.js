import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";
import Section from "Components/Section";
import Loader from "Components/Loader";
import Message from "Components/Message";
import Poster from "Components/Poster";

const Container = styled.div`
  padding: 0px 20px;
`;

const Presenter = ({ topRated, popular, airingToday, loading, error }) =>
  loading ? (
    <>
      <Helmet>
        <title>Loading... | ReactFlix </title>
      </Helmet>
      <Loader />
    </>
  ) : (
    <>
      <Helmet>
        <title>TV Shows | ReactFlix </title>
      </Helmet>
      <Container>
        {topRated && topRated.length > 0 && (
          <Section title="Top Rated Shows">
            {topRated.map((x) => (
              <Poster
                key={x.id}
                id={x.id}
                imageUrl={x.poster_path}
                title={x.original_name}
                rating={x.vote_average}
                year={x.first_air_date && x.first_air_date.split("-")[0]}
                isMovie={false}
              />
            ))}
          </Section>
        )}
        {popular && popular.length > 0 && (
          <Section title="Popular Shows">
            {popular.map((x) => (
              <Poster
                key={x.id}
                id={x.id}
                imageUrl={x.poster_path}
                title={x.original_name}
                rating={x.vote_average}
                year={x.first_air_date && x.first_air_date.split("-")[0]}
                isMovie={false}
              />
            ))}
          </Section>
        )}
        {airingToday && airingToday.length > 0 && (
          <Section title="Airing Today">
            {airingToday.map((x) => (
              <Poster
                key={x.id}
                id={x.id}
                imageUrl={x.poster_path}
                title={x.original_name}
                rating={x.vote_average}
                year={x.first_air_date && x.first_air_date.split("-")[0]}
                isMovie={false}
              />
            ))}
          </Section>
        )}
        {error && <Message color="#e74c3c" text={error} />}
      </Container>
    </>
  );

Presenter.propTypes = {
  topRated: PropTypes.array,
  popular: PropTypes.array,
  airingToday: PropTypes.array,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

export default Presenter;
