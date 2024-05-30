import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { IUser } from '../models/iuser';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  // 1. get the data from comp.ts
  addUser(formData: IUser): Observable<IUser> {
    console.log(formData);
    // 2. send the data to the REST API
    // 2.1 What's REST API Url? https://jsonplaceholder.typicode.com/users
    // 2.2 What's Http Method?  POST
    // 2.3 What's the REST API Client? HttpClient
    return this.http
      .post<IUser>('https://jsonplaceholder.typicode.com/users', formData)
      .pipe(
        map((res: IUser) => {
          // 3. get the response from REST API
          console.log(res);
          return res; // 4. send the response to comp.ts
        })
      );
  }

  // 1. get the request from comp.ts
  getUsers(){
    console.log('Request reached service');
    // 2. send the request to the REST API
    // 2.1 What's REST API Url? https://jsonplaceholder.typicode.com/users
    // 2.2 What's Http Method?  GET
    // 2.3 What's the REST API Client? HttpClient
    return this.http
      .get('https://jsonplaceholder.typicode.com/users')
  }

  getUserById(id: string | null): Observable<IUser> {
    console.log(id);
    return this.http
      .get<IUser>(`https://jsonplaceholder.typicode.com/users/${id}`)
      .pipe(
        map((res: IUser) => {
          console.log(res);
          return res;
        })
      );
  }

  // update
  updateUser(formData: IUser): Observable<IUser> {
    console.log(formData);
    return this.http
      .put<IUser>(
        `https://jsonplaceholder.typicode.com/users/${formData.id}`,
        formData
      )
      .pipe(
        map((res: IUser) => {
          console.log(res);
          return res;
        })
      );
  }

  // delete
}
