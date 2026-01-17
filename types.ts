
export type Section = 'inicio' | 'sobre' | 'tendas' | 'contato';

export interface TentProduct {
  id: number;
  name: string;
  size: string;
  capacity: string;
  description: string;
  imageUrl?: string;
}

export interface FormData {
  name: string;
  email: string;
  phone: string;
  date: string;
  tentType: string;
  message: string;
}
