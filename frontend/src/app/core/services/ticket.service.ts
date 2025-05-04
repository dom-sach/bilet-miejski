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

    // testowanie bez backendu
    return of(mockTickets);
  }

  purchaseTicket(request: TicketPurchaseRequest): Observable<Ticket> {
    console.log('Symulacja zakupu biletu:', request);
    return this.http.post<Ticket>(`${this.apiUrl}/buy`, request);
  }

  // getMyTickets(): Observable<Ticket[]> {
  //   return this.http.get<Ticket[]>(`${this.apiUrl}/mine`);
  // }

  // wersja metody do testów bez backendu
  getMyTickets(): Observable<Ticket[]> {
    const myTickets: Ticket[] = [
      {
        id: 1,
        code: 'ABC123',
        type: 'SINGLE',
        ticketType: {
          id: 1,
          name: 'Bilet jednorazowy ulgowy',
          type: 'SINGLE',
          description: 'Bilet jednorazowy dla osób uprawnionych do ulgi.',
          price: 2.50,
          reduced: true
        },
        status: 'VALIDATED',
        purchaseDate: new Date().toISOString(),
        validationDate: new Date().toISOString()
      },
      {
        id: 2,
        code: 'XYZ789',
        type: 'PERIOD',
        ticketType: {
          id: 3,
          name: 'Bilet okresowy 30-dniowy',
          type: 'PERIOD',
          description: 'Bilet ważny 30 dni od daty startu.',
          price: 100.00,
          reduced: false,
          periodDays: 30
        },
        status: 'NEW',
        purchaseDate: new Date().toISOString(),
        validFrom: new Date().toISOString(),
        validTo: new Date(new Date().setDate(new Date().getDate() + 30)).toISOString()
      }
    ];
    return of(myTickets);
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
