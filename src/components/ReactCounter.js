import React from 'react'

class ReactCounter extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            counter: 0
        }
    }
    onIncrement = () => {
        this.setState(
            state => ({
                counter: this.state.counter + 1
            })
        )
    }

    onDecrement = () => {
        this.setState(
            state => ({
                counter: this.state.counter - 1
            })
        )
    }

    onReset = () => {
        this.setState(
            state => ({
                counter:  0
            })
        )
    }
    render(){
        return (
            <div>
                {this.state.counter} <br/>
                <button onClick={this.onIncrement}>Increment</button>
                <button onClick={this.state.counter > 0 ? this.onDecrement : null}>Decrement</button>
                <button onClick={this.onReset}>Reset</button>
            </div>
        )
    }
}
export default ReactCounter;