// rodzaj biletu
export interface TicketType {
  id: number;
  name: string;               // np. Bilet Ulgowy 30min
  type: 'SINGLE' | 'TIME' | 'PERIOD';
  description: string;
  price: number;
  reduced: boolean;           // ulgowy = true
  durationMinutes?: number;   // np. 60 minut
  periodDays?: number;        // np. 30 dni
}
