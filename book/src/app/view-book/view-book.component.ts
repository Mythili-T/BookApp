import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookAppService } from '../book-app.service';
import { BookheaderComponent } from '../bookheader/bookheader.component';

@Component({
  selector: 'app-view-book',
  standalone: true,
  imports: [BookheaderComponent],
  templateUrl: './view-book.component.html',
  styleUrl: './view-book.component.css'
})
export class ViewBookComponent {
  getdata:any;
  constructor(private route:ActivatedRoute,private service:BookAppService){

  }
  ngOnInit(){
    let bookReferenceId=this.route.snapshot.paramMap.get('id');
    console.log(bookReferenceId);
      this.service.viewdetails(bookReferenceId).subscribe(data=>{
        this.getdata=data;
      })
  }
}
