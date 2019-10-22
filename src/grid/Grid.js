import React from 'react';

class Col extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const dims = this.props.dims;
        let styling = {
            height: dims.height * dims.size / dims.height + 'em',
            width: dims.width * dims.size / dims.width + 'em'
        }
        return (
            <div className='col p-0 border' style={styling}>
                {this.props.children}
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
                <Col key={idx} dims={this.props.dims}>
                    {item}
                    </Col>
            );
        })
    }
    render() {
        return (
            <div className='row p-0' style={{width: this.props.dims.width * this.props.dims.size + 'em'}}>
                {this.makeCols()}
            </div>
        )
    }
}


class Grid extends React.Component {
    constructor(props) {
        super(props);
        this.dims = {
            height: this.props.array.length,
            width: this.props.array[0].length,
            size: this.props.size
        }
    }

    makeRows() {
        return this.props.array.map((item, idx) => {
            return (
                <Row key={idx} dims={this.dims} array={item} />
            )
        })
        
    }
    render() {
        let styling = {
            height: this.dims.height * this.dims.size + 'em',
            width: this.dims.width * this.dims.size + 'em'
        }
        return (
            <div className='container p-0' style={styling}>
                {this.makeRows()}
            </div>
        );
    }
}

export default Grid;