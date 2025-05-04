import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TicketService } from '../../../../core/services/ticket.service';
import { TicketType } from '../../../../core/models/ticket-type.model';
import { TicketPurchaseRequest } from '../../../../core/models/ticket-purchase-request.model';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {ReactiveFormsModule, FormBuilder, Validators, FormGroup} from '@angular/forms';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-ticket-purchase',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSnackBarModule
  ],
  templateUrl: './ticket-purchase.component.html',
  styleUrls: ['./ticket-purchase.component.scss']
})
export class TicketPurchaseComponent implements OnInit {
  ticketType: TicketType | null = null;
  loading = true;
  form!: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private ticketService: TicketService,
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private router: Router
  ) {}

  ngOnInit(): void {

    this.form = this.fb.group({
      validityStartDate: [null]
    });

    const ticketId = Number(this.route.snapshot.paramMap.get('id'));
    this.ticketService.getAvailableTickets().subscribe({
      next: (tickets) => {
        this.ticketType = tickets.find(t => t.id === ticketId) || null;
        this.loading = false;
      },
      error: (err) => {
        console.error('Błąd pobierania biletu', err);
        this.loading = false;
      }
    });
  }

  purchase(): void {
    if (!this.ticketType) {
      return;
    }

    const request: TicketPurchaseRequest = {
      ticketTypeId: this.ticketType.id,
      validityStartDate: this.ticketType.type === 'PERIOD' && this.form.value.validityStartDate
        ? (this.form.value.validityStartDate as Date).toISOString()
        : undefined
    };

    this.ticketService.purchaseTicket(request).subscribe({
      next: () => {
        this.snackBar.open('Bilet został pomyślnie zakupiony!', 'Zamknij', { duration: 3000 });
        this.router.navigate(['/tickets']);
      },
      error: () => {
        this.snackBar.open('Błąd podczas zakupu biletu.', 'Zamknij', { duration: 3000 });
      }
    });
  }
}
