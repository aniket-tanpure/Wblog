import { Component } from '@angular/core';

import { BlogPost } from '../models/BlogPost';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GetBlogDetailsService } from '../services/get-blog-details.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-blog-add-edit',
  templateUrl: './blog-add-edit.component.html',
  styleUrls: ['./blog-add-edit.component.scss']
})
export class BlogAddEditComponent {

  blogForm: FormGroup;
  isEditMode = false;
  blogId?: number;

  constructor(
    private fb: FormBuilder,
    private blogService: GetBlogDetailsService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.blogForm = this.fb.group({
      title: ['', Validators.required],
      body: ['', Validators.required],
    });
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEditMode = true;
      this.blogId = +id;
      this.loadBlogPost(this.blogId);
    }
  }

  loadBlogPost(id: number) {
    const post = this.blogService.getBlogById(id);
    if (post) {

      this.blogForm.patchValue(post);
    }
  }

  onSubmit() {
    if (this.blogForm.invalid) return;

    const blogData: BlogPost = this.blogForm.value;
    if (this.isEditMode && this.blogId != null) {
      this.blogService.updatePost(this.blogId, blogData);
    } else {
      this.blogService.createPost(blogData);
    }
    this.router.navigate(['/']);
  }
}
