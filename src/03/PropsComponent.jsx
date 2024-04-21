import React from 'react';
import PropTypes from 'prop-types';

const PropsComponent = (props, { children }) => {

  return (
    <div>
      <div className={'message-container'}>
        {props.name}
        {props.age}
          {props.bored ? '지루해' : '아니'}
          {children}
      </div>
    </div>
  );
};


// 기본값
PropsComponent.defaultProps = {
    name : 0
}

// 필수값
PropsComponent.propTypes = {
    name : PropTypes.string
}


export default PropsComponent;
