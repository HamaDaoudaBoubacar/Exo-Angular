import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { CommentService } from 'src/app/core/services/http/comment.service';
import { Comment } from 'src/app/models/comment';

@Component({
  selector: 'app-comment-detail',
  templateUrl: './comment-detail.component.html',
  styleUrls: ['./comment-detail.component.scss']
})
export class CommentDetailComponent implements OnInit {

  commentId: number;

  comment$: Observable<Comment>;
  toto: string[] = ["id", "text", "idProduct"];

  constructor(private _activateRoute: ActivatedRoute,
    private _commentService: CommentService) { }

  ngOnInit(): void {
    this.commentId = Number(this._activateRoute.snapshot.paramMap.get('id'));
    
    if (this.commentId) {
      this.fetchData(this.commentId);
    }
  }

  fetchData(id: number): void {
    this.comment$ = this._commentService.getById(id);
  }


}
