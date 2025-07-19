import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogDashboardComponent } from './blog-dashboard/blog-dashboard.component';
import { ViewBlogComponent } from './view-blog/view-blog.component';
import { BlogAddEditComponent } from './blog-add-edit/blog-add-edit.component';

const routes: Routes = [

  {
    path: "",
    component: BlogDashboardComponent,
  },
  {
    path: "get-blog/:id",
    component: ViewBlogComponent,
  },
  { path: 'blog/add', 
    component: BlogAddEditComponent 
  },
  { path: 'blog/edit/:id',
     component: BlogAddEditComponent 
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
