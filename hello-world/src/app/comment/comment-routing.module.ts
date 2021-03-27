import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from '../shared/components/not-found/not-found.component';
import { CommentListComponent } from './pages/comment-list/comment-list.component';
import { CommentComponent } from './comment.component';
import { CommentDetailComponent } from './pages/comment-detail/comment-detail.component';

const routes: Routes = [
  {
    path: '',
    component: CommentComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'comments'
      },
      {
        path: 'comments',
        component: CommentListComponent
      },
      {
        path: 'comments/:id',
        component: CommentDetailComponent
      },
      {
        path: '**',
        component: NotFoundComponent
      }
    ]
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommentRoutingModule { }
