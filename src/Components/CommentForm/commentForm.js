import React from "react";


export default class CommentForm extends React.Component{
    state = {
        comment: '',
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
        const { locationId } = this.props.locationId;
        const { text } = e.target


    }

    render() {
        return(
            <form className="comment_form" onSubmit={this.handleSubmit}>
                <div>
                    <textarea
                        value={this.state.comment}
                        aria-label='Say something about this place'
                        placeholder="Say something about this place"
                        name="comment"
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