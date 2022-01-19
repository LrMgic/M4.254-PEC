import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Login } from '../models/login';
import { UserStoreService } from './user-store.service';

@Injectable()
export class UserService {
  constructor(private http: HttpClient, private userStore: UserStoreService) {}

  login(username: string, password: string): Observable<Login> {
    return this.http
      .post<Login>('http://localhost:3000/api/user/login', {
        username: username,
        password: password,
      })
      .pipe(
        map((resp: any) => {
          this.userStore.token = resp.token;
          return resp;
        })
      );
  }

  register(username: string, password: string): Observable<Login> {
    return this.http.post<Login>('http://localhost:3000/api/user/register', {
      username: username,
      password: password,
    });
  }
}
