import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../../core/services/auth.service';
import { TicketService } from '../../../../core/services/ticket.service';
import { Ticket } from '../../../../core/models/ticket.model';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatTabsModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    RouterLink
  ],
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  user: any;
  tickets: Ticket[] = [];
  activeTickets: Ticket[] = [];
  expiredTickets: Ticket[] = [];
  loading = true;

  constructor(private authService: AuthService, private ticketService: TicketService) {}

  ngOnInit(): void {
    this.user = this.authService.getCurrentUser();

    this.ticketService.getMyTickets().subscribe({
      next: (data) => {
        this.tickets = data;
        const now = new Date();

        this.activeTickets = this.tickets.filter(ticket => {
          if (ticket.type === 'PERIOD') {
            return ticket.validTo ? new Date(ticket.validTo) >= now : true;
          } else if (ticket.type === 'TIME') {
            return ticket.validationDate
              ? new Date(ticket.validationDate).getTime() + (ticket.ticketType.durationMinutes || 0) * 60000 >= now.getTime()
              : true;
          } else if (ticket.type === 'SINGLE') {
            return ticket.status === 'NEW' || (ticket.validationDate && new Date(ticket.validationDate) >= now);
          }
          return true;
        });

        this.expiredTickets = this.tickets.filter(ticket => !this.activeTickets.includes(ticket));

        this.loading = false;
      },
      error: (err) => {
        console.error('Błąd pobierania biletów', err);
        this.loading = false;
      }
    });
  }
}
