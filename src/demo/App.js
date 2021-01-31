/* eslint no-magic-numbers: 0 */
import React, {Component} from 'react';

import {EditableDiv} from '../lib';

class App extends Component {
    constructor() {
        super();
        this.state = {
            value: 'INIT',
        };
        this.setProps = this.setProps.bind(this);
    }

    setProps(newProps) {
        this.setState(newProps);
    }

    render() {
        return (
            <div>
                <EditableDiv setProps={this.setProps}>
                    <b>Testing it</b>
                </EditableDiv>
                <div>{JSON.stringify(this.state.value)}</div>
            </div>
        );
    }
}

export default App;
