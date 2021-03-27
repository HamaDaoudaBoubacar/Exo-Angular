import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Comment } from 'src/app/models/comment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {


  endPoint: string = environment.commentEndPoint;

  constructor(private _httpClient: HttpClient) { }

  get(): Observable<Comment[]> {
    return this._httpClient.get<Comment[]>(this.endPoint);
  }

  getById(id: number): Observable<Comment> {
    return this._httpClient.get<Comment>(this.endPoint+"/"+id);
  }

  post(comment: Comment): Observable<Comment> {
    return this._httpClient.post<Comment>(this.endPoint, comment);
  }

  put(comment: Comment): Observable<Comment> {
    return this._httpClient.put<Comment>(this.endPoint + "/" + comment.id, comment);
  }

  delete(comment: Comment): Observable<Comment> {
    return this._httpClient.delete<Comment>(this.endPoint + "/" + comment.id);
  }
}
