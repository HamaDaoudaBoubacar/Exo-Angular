import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { CommentService } from 'src/app/core/services/http/comment.service';
import { Comment } from 'src/app/models/comment';
import { CommentListComponent } from '../../pages/comment-list/comment-list.component';
@Component({
  selector: 'app-delete-comment',
  templateUrl: './delete-comment.component.html',
  styleUrls: ['./delete-comment.component.scss']
})
export class DeleteCommentComponent implements OnInit {

  commentForm: FormGroup;

  constructor(private fb: FormBuilder, private _commentService: CommentService, private _dialogRef: MatDialogRef<DeleteCommentComponent>) {

    this.commentForm = this.fb.group({
      id: [CommentListComponent.selected.id],
      text: [CommentListComponent.selected.text],
      idProduct: [CommentListComponent.selected.idProduct]
    })
  }

  ngOnInit(): void {
  }

  onSubmit(comment: Comment) {
    if (this.commentForm.valid) {
      this._commentService.delete(comment).subscribe((next) => {
        this.commentForm.reset();
        this._dialogRef.close();
      });
    }
  }

}
