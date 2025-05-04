export interface TicketPurchaseRequest {
  ticketTypeId: number;
  validityStartDate?: string;  // dla biletów okresowych (ISO string)
}
