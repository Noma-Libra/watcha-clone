import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Presenter = ({ results, error, loading }) => null;

Presenter.propTypes = {
  results: PropTypes.object,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};

export default Presenter;
