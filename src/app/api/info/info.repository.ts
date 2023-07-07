import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { User } from "./models/user/user";
import { Observable, of } from "rxjs";

@Injectable({ providedIn: 'root'})
export class InfoRepository {
  private baseUrl = 'https://crudcrud.com/api/f6ba373a59ce41c2b59578cc2b728190/info/64a7e1edc632b703e8309a72';

  public constructor(private http: HttpClient) {}

  public update(user: Partial<User>): Observable<Partial<User>> {
    // Mock
    // return of({});
    return this.http.put<User>(this.baseUrl, user);
  }

  public get(): Observable<Partial<User>> {
    // Mock
    // return of({
    //   name: 'Max',
    //   surname: 'Gudkov',
    //   hobbies: ['1', '2'],
    // })
    return this.http.get<User>(this.baseUrl);
  }
}