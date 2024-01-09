import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { BookAppService } from '../book-app.service';
import { BookheaderComponent } from '../bookheader/bookheader.component';

@Component({
  selector: 'app-addbook',
  standalone: true,
  imports: [BookheaderComponent,ReactiveFormsModule],
  templateUrl: './addbook.component.html',
  styleUrl: './addbook.component.css'
})
export class AddbookComponent {
  constructor(private formbulider:FormBuilder,private bookservice:BookAppService) {

  }
  addBookForm=this.formbulider.group({
     ImagesURL:["",Validators.required],
     title:["",Validators.required],
     author:["",Validators.required],
     Cost:["",Validators.required],
     Discount:["",Validators.required]
  })

 ngOnInit() {
 }
 onSubmit(){
   this.bookservice.postBook(this.addBookForm.value).subscribe(data=>{
     alert("Added successfully");
     this.addBookForm.reset();
   })
 }
}
