import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // Import this

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogDashboardComponent } from './blog-dashboard/blog-dashboard.component';
import { GetBlogDetailsService } from './services/get-blog-details.service';
import { ViewBlogComponent } from './view-blog/view-blog.component';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BlogAddEditComponent } from './blog-add-edit/blog-add-edit.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    BlogDashboardComponent,
    ViewBlogComponent,
    HeaderComponent,
    FooterComponent,
    BlogAddEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterOutlet,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [GetBlogDetailsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
