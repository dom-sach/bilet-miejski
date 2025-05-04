export interface User {
  id: number;
  username: string;
  email: string;
  roles: UserRole[];
}

export type UserRole = 'PASSENGER' | 'TICKET_INSPECTOR';
