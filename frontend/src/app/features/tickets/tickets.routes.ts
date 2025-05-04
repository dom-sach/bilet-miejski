import { Routes } from '@angular/router';
import {MyTicketsComponent} from './components/my-tickets/my-tickets.component';
import {TicketDetailsComponent} from './components/ticket-details/ticket-details.component';
import {TicketOfferComponent} from './components/ticket-offer/ticket-offer.component';
import {TicketPurchaseComponent} from './components/ticket-purchase/ticket-purchase.component';

export const TICKET_ROUTES: Routes = [
  { path: '', component: TicketOfferComponent },
  { path: 'myTickets', component: MyTicketsComponent },
  { path: 'ticketDetails', component: TicketDetailsComponent },
  { path: 'ticketPurchase', component: TicketPurchaseComponent },
  { path: 'purchase/:id', component: TicketPurchaseComponent },
];
