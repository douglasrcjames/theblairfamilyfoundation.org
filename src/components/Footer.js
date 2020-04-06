import React, { Component } from 'react'

export default class Footer extends Component {
    constructor(props) {
        super(props);

        this.state = { 
          year: new Date().getFullYear(),
        };
    }

    render() {
        return (
            <footer>
                <div style={{textAlign: "center"}}>
                    &copy;
                    {' '}
                    {this.state.year}
                    {' '}
                    The Blair Family Foundation
                </div>
            </footer>
        )
    }
}
