
import React from 'react';

class NewFeed extends React.Component {
    render() {

        return <div class="newfeed-stt" >
            <img class="newfeed" src={this.props.img}></img>
            <div class="newfeed__stt">
                <p class="newfeed-stt">{this.props.title}</p>
                <p class="newfeed-text">{this.props.text}</p>
            </div>


        </div>;
    }

}

export default NewFeed;