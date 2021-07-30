import React from "react";
import CommentsService from '../../Services/Comments-Service'

export default class CommentForm extends React.Component{
    state = {
        comment: '',
    }
    
    handleSubmit = e => {
        e.preventDefault();
        const locationId = this.props.locationId;
        const { text } = e.target
        console.log(locationId)
        CommentsService.postComment({
            text: text.value,
            location_id: locationId,
        })
        .then(res => {
            text.value = ''
        })
    }

    render() {
        return(
            <form className="comment_form" onSubmit={this.handleSubmit}>
                <div>
                    <textarea
                        // value={this.state.comment}
                        aria-label='Say something about this place'
                        placeholder="Say something about this place"
                        name="text"
                        id="text"
                        rows='5'
                        cols='100'
                    />
                </div>
                <div className="submit_button">
                    <button type='submit'>Post</button>
                </div>
            </form>
        )
    }
}