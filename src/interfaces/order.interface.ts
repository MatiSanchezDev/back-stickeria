export interface Order {
  name: string;
  total_price: number;
  prepaid: boolean;
  delivered: boolean;
}

export type OrderArray = Order[];
