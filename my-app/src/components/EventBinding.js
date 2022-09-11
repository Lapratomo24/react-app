import React from "react";

class EventBinding extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            intro: "Hello",
            buttonText: "Exit",
            count: 0,
        }
    }

    handleClick() {
        this.setState((prevState, prevProps) => {
            return {
                intro: prevState.intro === "Hello" ? "Goodbye" : "Hello",
                buttonText: prevState.buttonText === "Exit" ? "Enter" : "Exit",
            }
        })
    }

    increment() {
        this.setState((prevState, prevProps) => {
            return {
                count: prevState.count + 1,
            }
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.intro}, {this.props.greeting}</h1> 
                <button onClick = {() => this.handleClick()}>{this.state.buttonText}</button> 
                <button onClick = {() => this.increment()}>Increment</button> 
                <p> You 've clicked {this.state.count} times!</p>
            </div>
        )
    }
}

export default EventBinding;