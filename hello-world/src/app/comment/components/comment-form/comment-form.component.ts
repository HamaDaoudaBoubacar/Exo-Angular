import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CommentService } from 'src/app/core/services/http/comment.service';
import { Comment } from 'src/app/models/comment';
import { CommentFormData } from 'src/app/models/comment-form-data';

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.scss']
})
export class CommentFormComponent implements OnInit {

  commentForm: FormGroup;
  formAction:string;
  titre:string;

  constructor(private fb: FormBuilder, 
    private _commentService: CommentService, 
    private _dialogRef: MatDialogRef<CommentFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: CommentFormData) {

    this.formAction = data.toUpdate? "Modifier" : "Ajouter";

    if (data.toUpdate) {
      this.titre = "Update Comment";
    this.commentForm = this.fb.group({
      text: [data.comment.text, [Validators.required, this.noWhitespaceValidator]],
      idProduct: [data.comment.idProduct, [Validators.required, this.noWhitespaceValidator]]
    })
  }
  else{
    this.titre = "Add New Comment";
    this.commentForm = this.fb.group({
      text: ['', [Validators.required, this.noWhitespaceValidator]],
      idProduct: ['', [Validators.required, this.noWhitespaceValidator]]
    })
  }
  }

  ngOnInit(): void {
  }

  onSubmit(comment: Comment) {
    if (this.commentForm.valid) {
      if (this.data.toUpdate) {
        comment.id = this.data.comment.id;
        this._commentService.put(comment).subscribe((next) => {
        this.commentForm.reset();
        this._dialogRef.close();
      });
    }
    else{
      this._commentService.post(comment).subscribe((next) => {
        this.commentForm.reset();
        this._dialogRef.close();
      });
    }
    }
  }

  public noWhitespaceValidator(control: FormControl) {
    const isWhitespace = (control.value || '').trim().length === 0;

    const isValid = !isWhitespace;
    return isValid ? null : { 'whitespace': true };
  }

}

