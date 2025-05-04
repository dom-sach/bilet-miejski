import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TicketType } from '../models/ticket-type.model';
import { Ticket } from '../models/ticket.model';
import { TicketPurchaseRequest } from '../models/ticket-purchase-request.model';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  private readonly apiUrl = '/api/tickets';

  constructor(private http: HttpClient) {}

  getAvailableTickets(): Observable<TicketType[]> {
    return this.http.get<TicketType[]>(`${this.apiUrl}/offer`);
  }

  purchaseTicket(request: TicketPurchaseRequest): Observable<Ticket> {
    return this.http.post<Ticket>(`${this.apiUrl}/buy`, request);
  }

  getMyTickets(): Observable<Ticket[]> {
    return this.http.get<Ticket[]>(`${this.apiUrl}/mine`);
  }

  getTicketDetails(ticketId: number): Observable<Ticket> {
    return this.http.get<Ticket>(`${this.apiUrl}/${ticketId}`);
  }
}
