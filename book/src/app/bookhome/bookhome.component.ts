import { Component } from '@angular/core';
import { BookheaderComponent } from '../bookheader/bookheader.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BookAppService } from '../book-app.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-bookhome',
  standalone: true,
  imports: [BookheaderComponent,FormsModule,CommonModule,RouterModule],
  templateUrl: './bookhome.component.html',
  styleUrl: './bookhome.component.css'
})
export class BookhomeComponent {
 getMaterials: any;
  constructor(private bookservice:BookAppService) {
    this.bookservice.getBook().subscribe(data=>{
      this.getMaterials=data;
    })
  }
}
