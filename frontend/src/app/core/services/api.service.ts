import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {}

  private getAuthHeaders(): HttpHeaders {
    const token = localStorage.getItem('token');
    return new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: token ? `Bearer ${token}` : ''
    });
  }

  get<T>(url: string) {
    return this.http.get<T>(url, { headers: this.getAuthHeaders() });
  }

  post<T>(url: string, body: any) {
    return this.http.post<T>(url, body, { headers: this.getAuthHeaders() });
  }

  // TODO dla PUT, DELETE itp.
}
