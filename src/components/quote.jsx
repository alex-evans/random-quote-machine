import React from "react";


class Quote extends React.Component {
    render() {
        return (
            <div>
                <p id="text">{this.props.text}</p>
                <p id="author">{this.props.author}</p>
            </div>
        )
    }
}

export default Quote;