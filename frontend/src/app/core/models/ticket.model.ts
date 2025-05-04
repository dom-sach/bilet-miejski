import {TicketType} from './ticket-type.model';

export interface Ticket {
  id: number;
  code: string;
  type: 'SINGLE' | 'TIME' | 'PERIOD';
  ticketType: TicketType;
  status: 'NEW' | 'VALIDATED';
  purchaseDate: string;      // ISO string
  validationDate?: string;   // ISO string, jeśli bilet został skasowany
  vehicleId?: string;        // np. numer pojazdu, w którym skasowano
  validFrom?: string;        // dla okresowych (ISO string)
  validTo?: string;          // dla okresowych (ISO string)
}
