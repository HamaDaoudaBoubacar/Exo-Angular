import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { CommentService } from 'src/app/core/services/http/comment.service';
import { Comment } from 'src/app/models/comment';
import { CommentFormData } from 'src/app/models/comment-form-data';
import { CommentFormComponent } from '../../components/comment-form/comment-form.component';
import { DeleteCommentComponent } from '../../components/delete-comment/delete-comment.component';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.scss']
})
export class CommentListComponent implements OnInit {

  comments$: Observable<Comment[]>;
  static selected: Comment;

  displayedColumns: string[] = ["id", "text", "idProduct", "update", "delete", "detail"];

  constructor(private _commentService: CommentService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.comments$ = this._commentService.get();
  }

  openDialog(toUpdate: boolean, comment: Comment) {

    const CommentFormData:CommentFormData ={
      toUpdate:toUpdate,
      comment:comment
    }
    const dialogRef = this.dialog.open(CommentFormComponent,{
      data: CommentFormData
    });

    dialogRef.afterClosed().subscribe(result => {
      this.loadData();
    });
  }

  openDialog1(comment: Comment) {
    CommentListComponent.selected = comment;

    const dialogRef = this.dialog.open(DeleteCommentComponent);

    dialogRef.afterClosed().subscribe(result => {
      this.loadData();
    });
  }

}
