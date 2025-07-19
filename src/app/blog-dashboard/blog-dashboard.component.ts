import { Component } from '@angular/core';
import { GetBlogDetailsService } from '../services/get-blog-details.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog-dashboard',
  templateUrl: './blog-dashboard.component.html',
  styleUrls: ['./blog-dashboard.component.scss'],
  providers: [GetBlogDetailsService]
})
export class BlogDashboardComponent {

  tableData: any;
  loaded: any;
  postsPerPage = 6;
  currentPage = 1;
  constructor(
    private getblogDetails: GetBlogDetailsService,
    private router: Router
  ) { }


  ngOnInit() {
    console.log("Hi");

    this.getblogDetails.getData().subscribe({

      next: (res) => {
        console.log("log Res", res);
        this.tableData = res;
        this.loaded = true;

      },
      error: () => {

      },
      complete: () => {

      }

    })

  }

  getBlog(id: any) {
    console.log("clicked id", id);
    this.router.navigate(['/get-blog', id]);

    this.getblogDetails.getBlogById(id).subscribe({

      next: (res) => {
        console.log("log Res", res);
        this.tableData = res;
        this.loaded = true;

      },
      error: () => {

      },
      complete: () => {

      }

    })

  }

  deletePost(id: number): void {
    if (confirm('Are you sure you want to delete this post?')) {
      this.getblogDetails.deletePost(id).subscribe(() => {
        this.tableData = this.tableData.filter((post: { id: number; }) => post.id !== id);
      });
    }
  }

  get totalPages(): number {
    return Math.ceil(this.tableData.length / this.postsPerPage);
  }

  get totalPagesArray(): number[] {
    return Array(this.totalPages)
      .fill(0)
      .map((_, i) => i + 1);
  }

  get pagedPosts() {
    const start = (this.currentPage - 1) * this.postsPerPage;
    return this.tableData.slice(start, start + this.postsPerPage);
  }

  prevPage() {
    if (this.currentPage > 1) this.currentPage--;
  }

  nextPage() {
    if (this.currentPage < this.totalPages) this.currentPage++;
  }

  goToPage(page: number) {
    this.currentPage = page;
  }
  onPageChange(page: number) {
    this.currentPage = page;
  }


}
