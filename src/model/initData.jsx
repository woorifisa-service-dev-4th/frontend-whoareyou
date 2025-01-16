import { Post } from './post';
import { Comment } from './comment';
import { Image } from './image';
import { Status } from './status';
export const postDummyData = [
    {
        id: 0,
        post: new Post(
            { title: "Test Data 0", content: "This is the first test data" }
        ),
        status: Status[0]
    }
]

export const commentDummyData = [
    {
        id: 0,
        comment: new Comment(
            { post_id: 0, content: "This is the first comment" }
        ),
        status: Status[0]
    },
    {
        id: 1,
        comment: new Comment(
            { post_id: 0, comment_id: 0, content: "This is the firt comment's comment" }
        ),
        status: Status[0]
    }
]

export const imageDummyData = [
    {
        id: 0, 
        image: new Image(
            { type: "post", id: 0, url: "./src/assets/react.svg" }
        ),
    },
    {
        id: 1, 
        image: new Image(
            { type: "comment", id: 0, url: "./src/assets/react.svg" }
        ),
    },
    {
        id: 2, 
        image: new Image(
            { type: "comment-comment", id: 1, url: "./src/assets/react.svg" }
        ),
    }

]
    
