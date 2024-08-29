import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  private apiUrl = 'http://localhost:8000/api/v1/projects/admin';

  constructor(private _HttpClient: HttpClient) { }

  addProject(formData: FormData): Observable<any> {
    return this._HttpClient.post<any>(this.apiUrl, formData);
  }

  loginAdmin(data: any): Observable<any> {
    return this._HttpClient.post<any>("http://localhost:8000/secret-path-API", data);
  }
}
