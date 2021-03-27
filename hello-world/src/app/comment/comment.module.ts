import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommentRoutingModule } from './comment-routing.module';
import { SharedModule } from '../shared/shared.module';
import { CommentComponent } from './comment.component';
import { CommentFormComponent } from './components/comment-form/comment-form.component';
import { DeleteCommentComponent } from './components/delete-comment/delete-comment.component';
import { CommentDetailComponent } from './pages/comment-detail/comment-detail.component';
import { CommentListComponent } from './pages/comment-list/comment-list.component';


@NgModule({
  declarations: [CommentComponent, CommentListComponent, CommentFormComponent, DeleteCommentComponent, CommentDetailComponent],
  imports: [
    CommonModule,
    CommentRoutingModule,
    SharedModule
  ]
})
export class CommentModule { }
