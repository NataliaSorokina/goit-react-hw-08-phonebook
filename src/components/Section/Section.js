import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, MinorTitle } from './Section.styled';

const Section = ({ title, children }) => {
  return (
    <Wrapper>
      <MinorTitle>{title}</MinorTitle>
      {children}
    </Wrapper>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Section;
