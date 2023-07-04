import { Entity, ObjectIdColumn, ObjectId, Column } from "typeorm";

@Entity("trans")
export class Transactions {
  @ObjectIdColumn()
  _id: ObjectId;

  @Column()
  transaction_id: number;

  @Column()
  subtotal: number;

  @Column()
  discount: number;

  @Column()
  shipping_cost: number;

  @Column()
  tax_percent: number;

  @Column()
  total: number;

  @Column()
  paid: number;

  @Column()
  change: number;

  @Column()
  order_list: string;

  @Column()
  payment_type: string;

  @Column()
  payment_detail: string;

  @ObjectIdColumn()
  staff_id: ObjectId;

  @Column()
  seller_id: string;

  @Column()
  buyer_id: string;

  @Column()
  comment: string;

  @Column()
  timestamp: Date = new Date();

  @Column()
  __v?: number = 0;
}
