import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ValidationRequest } from '../models/validation-request.model';
import { ValidationResult } from '../models/validation-result.model';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  private readonly apiUrl = '/api/validate';

  constructor(private http: HttpClient) {}

  validateTicket(request: ValidationRequest): Observable<ValidationResult> {
    return this.http.post<ValidationResult>(`${this.apiUrl}`, request);
  }
}
