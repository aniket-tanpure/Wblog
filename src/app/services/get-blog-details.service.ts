import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetBlogDetailsService {


  apiUrl = 'https://jsonplaceholder.typicode.com/posts';
  constructor(
    private http: HttpClient
  ) { }


  getData(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  getBlogById(id: any): Observable<any> {
    return this.http.get<any>(this.apiUrl + '/' + id);
  }

  createPost(postData: any): Observable<any> {
    return this.http.post(this.apiUrl, postData);
  }

  updatePost(id: number, postData: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, postData);
  }
  
  deletePost(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }


}
