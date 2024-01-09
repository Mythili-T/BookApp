import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookAppService {

  constructor(private http:HttpClient) { }
  getBook() {
    return this.http.get("http://localhost:3000/Bookimages");
  }
  postBook(data :any) {
    return this.http.post("http://localhost:3000/Bookimages",data);
  }
  deleteBook(id:any){
    return this.http.delete(`http://localhost:3000/Bookimages/${id}`);
  }
  editDetails(id:any, data:any){
    return this.http.patch(`http://localhost:3000/Bookimages/${id}`,data);
   }
   viewdetails(id:any){
    return this.http.get(`http://localhost:3000/Bookimages/${id}`);
   }
}
