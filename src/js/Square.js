import React from 'react';
import '../css/index.css';

export default class Square extends React.Component {

    render() {
        return (
            <button
                className="square"
                onClick={() => this.props.handleClick()}>
                {this.props.value}
            </button>
        );
    }

}