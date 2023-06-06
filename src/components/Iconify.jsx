import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';

const Iconify = ({ icon, style, ...props }) => {
  return <Icon style={{ margin: 0, ...style }} icon={icon} {...props} />;
};

Iconify.propTypes = {
  icon: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
};

export default Iconify;
