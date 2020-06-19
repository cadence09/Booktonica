import React from "react";

class Comments extends React.Component{
    constructor(props){
        super(props);
        this.state={comments:[],userId:"",addComment:"",bookId:""};
        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleUserName=this.handleUserName.bind(this);
        this.handleText=this.handleText.bind(this);
        this.handleBookId=this.handleBookId.bind(this);
    }
   
    handleSubmit(e){
        console.log("enter key success");
        e.preventDefault();
        fetch("/comments",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({
                "text":this.refs.text.value,
                "id":this.refs.id.value,
                "bId":this.refs.bId.value
            })
        });
        window.location.reload(false);
    }

    handleUserName(e){
        this.setState({userId:e.target.value});
    }
    handleBookId(e){
        this.setState({bookId:e.target.value});
    }
    handleText(e){
        this.setState({addComment:e.target.value});
    }
    render(){
   
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    
                    <textarea value={this.state.addComment} placeholder={"place your comment here"} onChange={this.handleText} name="text" ref="text" maxLength={10}/><br/>
                       
                    <input type="number" value={this.state.userId} onChange={this.handleUserName} placeholder={"user id"}name="id" ref="id"/>
                    <input type="number" value={this.state.bookId} onChange={this.handleBookId} placeholder={"book id"} name="bId" ref="bId"/>
                  
                    <div className="wordCount">
                        character: {this.state.addComment.length}
                        {this.state.addComment.length>9? " is over the limit":null}
                    </div>
                    {/* <button>Add Comments</button> */}
                    <button type="submit">Add Comment</button>
                </form>        
            </div>
        );
    }
}

export default Comments;