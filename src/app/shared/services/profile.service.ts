import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  baseUrl: string = 'https://api.github.com/users';
  constructor(private http: HttpClient) {}

  getUserProfile(userName: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${userName}`, {
      headers: {
        Accept: 'application/vnd.github+json',
        Authorization: 'Bearer',
        'X-GitHub-Api-Version': '2022-11-28',
      },
    });
  }
}
