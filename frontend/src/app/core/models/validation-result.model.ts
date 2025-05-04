// model wyniku walidacji biletu przez biletera
export interface ValidationResult {
  ticketCode: string;
  valid: boolean;
  reason?: string;            // np. "Bilet nie został skasowany", "Bilet wygasł"
  ticketType: string;         // np. "Jednorazowy ulgowy"
  passengerUsername: string;  // kto jest właścicielem biletu
  validationDate: string;     // data sprawdzenia (ISO string)
}
