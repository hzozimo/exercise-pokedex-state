import React from 'react';

class Pokemon extends React.Component {
    render() {
        const { id, name, type, averageWeight, image } = this.props.pokemon;

        return (
            <div className="pokemon" id={ id }>
                <div>
                    <p> {name} </p>
                    <p> {type} </p>
                    <p> {`Average weight: ${averageWeight.value} ${averageWeight.measurementUnit}`}</p>
                </div>
                <img src={image} alt={`${name} sprite`} />
            </div>
        );
    }
}

export default Pokemon;