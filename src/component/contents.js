import React from 'react';

class Contents extends React.Component {
    render() {

        // return <p>{this.props.text}</p>;
        return <div class="content-stt" >

            <img src={this.props.img}   ></img>
            <div class="context">

                <p id="title">{this.props.title}</p>
                <p class="by">Posted by Quốc Duy | Th10 09 2020 | javascript. </p>
                <p>{this.props.text}</p>
                <button id="read-more">READ MORE</button>
            </div>
        </div>;
    }
}




export default Contents;