import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as ArrowIcon } from '../../svg/arrow.svg';

import './GoBack.scss';

const GoBack = () => {
  return (
    <Link to='/' className="goback">
      <ArrowIcon />
    </Link>
  );
};

export default GoBack;