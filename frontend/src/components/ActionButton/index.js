import React from 'react';

import PropTypes from 'prop-types';

import Button from './styles';

export default function ActionButton({ title, Icon, background, ...rest }) {
  return (
    <Button background={background} {...rest}>
      <Icon color="#fff" size={16} />
      {title}
    </Button>
  );
}

ActionButton.propTypes = {
  title: PropTypes.string.isRequired,
  Icon: PropTypes.func.isRequired,
  background: PropTypes.string,
};

ActionButton.defaultProps = {
  background: '',
};
