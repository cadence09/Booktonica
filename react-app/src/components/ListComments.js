import React, { Component }  from "react";

class ListComments extends Component{
    render() {
        return (
            <div>
                {this.props.comments.map((comment, index) => (
                    <div className="text-muted" key={comment.id}>
                        {index+1}.{comment.user_name}:<br/>{comment.comment} 
                    </div>
                ))}
            </div>
        );
    }
}

export default ListComments ;