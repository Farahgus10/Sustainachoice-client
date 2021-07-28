import React from "react";

export default class CommentForm extends React.Component{
    state = {
        comment: '',
    }
    
    handleSubmit = () => {

    }

    handleFieldChange = (e) => {
        const { value } = e.target;
        this.setState({
            comment: value
        })
        console.log(this.state.comment)
    }

    render() {
        return(
            <div className="comment_form">
                <form onSubmit={this.handleSubmit}>
                    <textarea
                        onChange={this.handleFieldChange}
                        value={this.state.comment}
                        placeholder="Say something about this place"
                        name="comment"
                        rows='5'
                        cols='100'
                    />
                    <div className="submit_button">
                        <button>Post</button>
                    </div>
                </form>
            </div>
        )
    }
}