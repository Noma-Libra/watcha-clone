import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Section from "Components/Section";
import Loader from "Components/Loader";
import Message from "Components/Message";
import Poster from "Components/Poster";

const Container = styled.div`
  padding: 0px 20px;
`;

const Presenter = ({ nowPlaying, upcoming, popular, error, loading }) =>
  loading ? (
    <Loader />
  ) : (
    <Container>
      {upcoming && upcoming.length > 0 && (
        <Section title="Upcoming Movies">
          {upcoming.map((x) => (
            <Poster
              key={x.id}
              id={x.id}
              imageUrl={x.poster_path}
              title={x.original_title}
              rating={x.vote_average}
              year={x.release_date && x.release_date.split("-")[0]}
              isMovie={true}
            />
          ))}
        </Section>
      )}
      {nowPlaying && nowPlaying.length > 0 && (
        <Section title="Now Playing">
          {nowPlaying.map((x) => (
            <Poster
              key={x.id}
              id={x.id}
              imageUrl={x.poster_path}
              title={x.original_title}
              rating={x.vote_average}
              year={x.release_date && x.release_date.split("-")[0]}
              isMovie={true}
            />
          ))}
        </Section>
      )}

      {popular && popular.length > 0 && (
        <Section title="Popular Movies">
          {popular.map((x) => (
            <Poster
              key={x.id}
              id={x.id}
              imageUrl={x.poster_path}
              title={x.original_title}
              rating={x.vote_average}
              year={x.release_date && x.release_date.split("-")[0]}
              isMovie={true}
            />
          ))}
        </Section>
      )}
      {error && <Message color="#e74c3c" text={error} />}
    </Container>
  );

Presenter.propTypes = {
  nowPlaying: PropTypes.array,
  upcoming: PropTypes.array,
  popular: PropTypes.array,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};

export default Presenter;
