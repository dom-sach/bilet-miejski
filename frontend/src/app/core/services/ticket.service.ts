import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable, of} from 'rxjs';
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
    //return this.http.get<TicketType[]>(`${this.apiUrl}/offer`);
    return of(mockTickets); // dla testowania frontendu
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

// mockowanie dla testowania frontendu
const mockTickets: TicketType[] = [
  {
    id: 1,
    name: 'Bilet jednorazowy ulgowy',
    type: 'SINGLE',
    description: 'Bilet jednorazowy dla osób uprawnionych do ulgi.',
    price: 2.50,
    reduced: true
  },
  {
    id: 2,
    name: 'Bilet czasowy 60-minutowy',
    type: 'TIME',
    description: 'Bilet na 60 minut od momentu skasowania.',
    price: 4.00,
    reduced: false,
    durationMinutes: 60
  },
  {
    id: 3,
    name: 'Bilet okresowy 30-dniowy',
    type: 'PERIOD',
    description: 'Bilet ważny 30 dni od daty startu.',
    price: 100.00,
    reduced: false,
    periodDays: 30
  }
];
