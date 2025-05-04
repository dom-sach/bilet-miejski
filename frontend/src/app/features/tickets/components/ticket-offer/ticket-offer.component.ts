import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TicketService } from '../../../../core/services/ticket.service';
import { TicketType } from '../../../../core/models/ticket-type.model';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-ticket-offer',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatProgressSpinnerModule, RouterModule],
  templateUrl: './ticket-offer.component.html',
  styleUrls: ['./ticket-offer.component.scss']
})
export class TicketOfferComponent implements OnInit {
  tickets: TicketType[] = [];
  loading = true;

  constructor(private ticketService: TicketService) {}

  ngOnInit(): void {
    this.ticketService.getAvailableTickets().subscribe({
      next: (data) => {
        this.tickets = data;
        this.loading = false;
      },
      error: (err) => {
        console.error('Błąd pobierania oferty biletów', err);
        this.loading = false;
      }
    });
  }
}
