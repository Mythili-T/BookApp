import { Routes } from '@angular/router';
import { BookheaderComponent } from './bookheader/bookheader.component';
import { AddbookComponent } from './addbook/addbook.component';
import { BookhomeComponent } from './bookhome/bookhome.component';
import { ManageBookComponent } from './manage-book/manage-book.component';
import { ViewBookComponent } from './view-book/view-book.component';



export const routes: Routes = [
  {
    path:"",
    component:BookheaderComponent
  },
  {
    path:"Book-Home",
    component:BookhomeComponent
  },
  {
    path:"Book-add",
    component:AddbookComponent
  },
  {
    path:"Manage-add",
    component:ManageBookComponent
  },
  {
    path:"View-Book/:id",
    component:ViewBookComponent
  }
];
