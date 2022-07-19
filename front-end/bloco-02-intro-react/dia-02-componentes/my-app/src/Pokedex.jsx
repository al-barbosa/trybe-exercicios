// arquivo Order.js
import React from 'react';
import PropTypes from 'prop-types'

class Pokedex extends React.Component {
  render() {
    const { name, type, averageWeight, image } = this.props.pokemon;

    return (
      <div className='pokemon'>
        <div className='info'>
          <p>{name}</p>
          <p>{type}</p>
          <p>{averageWeight.value} {averageWeight.measurementUnit}</p>
        </div>
        <div className='pic'>
          <img src={image} alt={name} />
        </div>
      </div>
    );
  }
}

Pokedex.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  averageWeight: PropTypes.object
}

export default Pokedex;