import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { IUser } from '../types/user.interface';
import { environment } from 'src/environments/environment';

@Injectable()
export class usersServices {
  private API = environment.apiUrl;
  private headers = new HttpHeaders({
    Authorization: `Bearer ${environment.access_token}HKr7AuO689Smx5h78Ry93rHGUJlS93p42Bf2WWiyWykYYOXEIKLRPUiFHyi`,
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
