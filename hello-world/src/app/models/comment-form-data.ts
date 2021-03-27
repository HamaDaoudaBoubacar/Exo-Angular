import { Comment } from "./comment";

export interface CommentFormData {
    toUpdate: boolean;
    comment: Comment;
}