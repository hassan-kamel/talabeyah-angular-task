import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { IUser } from '../types/user.interface';

@Injectable()
export class usersServices {
  private API = 'https://api.github.com';
  private headers = new HttpHeaders({
    Authorization: `Bearer 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`,
  });

  constructor(private client: HttpClient) {}

  getUsers(): Observable<IUser[]> {
    return this.client.get<IUser[]>(`${this.API}/users`, {
      headers: this.headers,
    });
  }
  searchUsers(query: string): Observable<IUser[]> {
    return this.client
      .get<IUser[]>(`${this.API}/search/users?q=${query}`, {
        headers: this.headers,
      })
      .pipe(map((res: any) => res.items));
  }
}
