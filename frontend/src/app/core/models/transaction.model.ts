import {Ticket} from './ticket.model';

// dla historii transakcji
export interface Transaction {
  id: number;
  ticket: Ticket;
  amount: number;
  date: string;               // ISO string
  paymentMethod: string;      // np. "CREDIT_CARD"
}
