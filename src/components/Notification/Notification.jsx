import React from 'react';
import PropTypes from 'prop-types';

import { EmptyMessage } from './Notification.styled';

export default function Notification({ message }) {
  return <EmptyMessage>{message}</EmptyMessage>;
}

Notification.propType = {
  message: PropTypes.string.isRequired,
};
