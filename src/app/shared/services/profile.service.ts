import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { enviroment } from '../../environment/environment';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  baseUrl: string = 'https://api.github.com/users';
  githubKey = enviroment.githubKey;
  constructor(private http: HttpClient) {}

  getUserProfile(userName: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${userName}`, {
      headers: {
        Accept: 'application/vnd.github+json',
        Authorization: `Bearer ${this.githubKey}`,
        'X-GitHub-Api-Version': '2022-11-28',
      },
    });
  }
}
