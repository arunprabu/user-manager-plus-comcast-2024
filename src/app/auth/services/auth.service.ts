import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(creds: any) {
    console.log(creds);
    return this.http.post('https://reqres.in/api/login', creds);
  }

  isAuthenticated() {
    return !!sessionStorage.getItem('bearer_token');
  }
}
