import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GetBlogDetailsService } from '../services/get-blog-details.service';

@Component({
  selector: 'app-view-blog',
  templateUrl: './view-blog.component.html',
  styleUrls: ['./view-blog.component.scss']
})
export class ViewBlogComponent {

  blog:any;
  constructor(private router: Router,
    private activroute: ActivatedRoute,
    private getblogDetails: GetBlogDetailsService
  ) { }

  ngOnInit() {


    this.activroute.params.subscribe(params => {
      const id = params['id'];
      console.log('id', id);
      this.getBlog(id);
    });

  }

  getBlog(id: any) {
    
    this.getblogDetails.getBlogById(id).subscribe({

      next: (res) => {
        console.log("log Res", res);
        this.blog = res;

      },
      error: () => {

      },
      complete: () => {

      }

    })

  }

}
