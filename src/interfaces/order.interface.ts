export interface Order {
  name: string;
  total_price: number;
  prepaid: boolean;
  delivered: boolean;
  message_client: string;
}

export type OrderArray = Order[];
