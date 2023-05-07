import React from 'react';
import PropTypes from 'prop-types';
import { Title, SectionStyle } from './Section.styled';

export default function Section({ title, children }) {
  return (
    <SectionStyle>
      <Title>{title}</Title>
      {children}
    </SectionStyle>
  );
}

Section.protTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
