import React from "react";
import Quote from "./quote";


class QuoteBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: 'quote...',
            author: 'author...'
        }
        this.getNewQuote = this.getNewQuote.bind(this);
    }

    getNewQuote() {
        fetch('https://api.quotable.io/random')
            .then(response => response.json())
            .then(data => {
                this.setState(
                    {
                        text: data.content,
                        author: data.author
                    }
                )
            })
    };

    componentDidMount() {
        this.getNewQuote()
    }

    render() {
        return (
            <div id="quote-box">
                <Quote text={this.state.text} author={this.state.author} />
                <a href="twitter.com/intent/tweet" id="tweet-quote">Tweet This Quote</a>
                <div>
                    <button onClick={this.getNewQuote} id="new-quote">New Quote</button>
                </div>
            </div>
        )
    }
}

export default QuoteBox;