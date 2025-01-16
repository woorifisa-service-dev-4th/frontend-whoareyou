class Comment {
    constructor(post_id, content) {
        this.post_id = post_id;
        this.content = content;
        this.timestamp = new Date();
    }
    constructor(post_id, comment_id, content){
        this.post_id = post_id;
        this.comment_id = comment_id;
        this.content = content;
        this.timestamp = new Date();
    }
    
    getCommentData() {
        return {post_id: this.post_id, comment_id: this.comment_id, content: this.content, timestamp: this.timestamp};
    }
}

export default Comment;