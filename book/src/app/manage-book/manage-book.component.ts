import { Component } from '@angular/core';
import { BookAppService } from '../book-app.service';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { BookheaderComponent } from '../bookheader/bookheader.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-manage-book',
  standalone: true,
  imports: [BookheaderComponent, FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './manage-book.component.html',
  styleUrl: './manage-book.component.css'
})
export class ManageBookComponent {
  getMaterials: any;
  constructor(private bookservice: BookAppService, private fb: FormBuilder) {
  }
  ngOnInit() {
    this.bookservice.getBook().subscribe(data => {
      this.getMaterials = data;
    })
  }

  updatingData: any = "";
  editFormHidden: boolean = false;

  editBookForm = this.fb.group({
    UpdateBookName: ["", Validators.required],
    UpdateAuthorName: ["", Validators.required],
    UpdateDiscount: ["", Validators.required],
    UpdateBookCost: ["", Validators.required],
  })
  edit(data: any, event: Event) {
    event.preventDefault();
    this.editFormHidden = true;
    this.updatingData = data;
    this.editBookForm.controls['UpdateBookName'].setValue(data.title)
    this.editBookForm.controls['UpdateAuthorName'].setValue(data.author)
    this.editBookForm.controls['UpdateDiscount'].setValue(data.Discount)
    this.editBookForm.controls['UpdateBookCost'].setValue(data.Cost)
  }
  deleteBook(id: any) {
    var message = "Are you sure want to delete this book?";
    if (confirm(message) == true) {
      this.bookservice.deleteBook(id).subscribe(data => {
        this.ngOnInit();
      });

    }
    else {
      message = "You canceled!"
    }

  }
  update() {
    var body = {
      title: this.editBookForm.value.UpdateBookName,
      author: this.editBookForm.value.UpdateAuthorName,
      Discount: this.editBookForm.value.UpdateDiscount,
      Cost: this.editBookForm.value.UpdateBookCost
    }
    this.bookservice.editDetails(this.updatingData.id, body).subscribe(value => {
      alert("Content Edited");
      this.ngOnInit();
    })
  }

}
