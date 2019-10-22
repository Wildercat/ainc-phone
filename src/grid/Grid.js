import React from 'react';

class Col extends React.Component {
    render() {
        return (
            <div className='col'>
                a
            </div>
        );
    }
}

class Row extends React.Component {
    constructor(props) {
        super(props);
    }
    makeCols() {
        return this.props.array.map((item, idx) => {
            return (
                <Col />
            );
        })
    }
    render() {
        return (
            <div className='row'>
                {this.makeCols()}
            </div>
        )
    }
}


class Grid extends React.Component {
    render() {
        return (
            <div className='container'>
            <Row array={['', '']} />
            </div>
        );
    }
}

export default Grid;