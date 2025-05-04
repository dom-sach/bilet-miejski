import { Routes } from '@angular/router';
import {TicketValidationComponent} from './components/ticket-validation/ticket-validation.component';
import {ValidationResultComponent} from './components/validation-result/validation-result.component';

export const VALIDATOR_ROUTES: Routes = [
  { path: 'ticketValidation', component: TicketValidationComponent },
  { path: 'validationResult', component: ValidationResultComponent }
];
