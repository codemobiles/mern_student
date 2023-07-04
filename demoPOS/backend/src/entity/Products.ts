import { Entity, ObjectIdColumn, ObjectId, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Products {
  @ObjectIdColumn()
  _id?: ObjectId;

  @Column()
  product_id?: number;

  @Column()
  name: string;

  @Column()
  image?: string;

  @Column()
  stock: number;

  @Column()
  price: number;

  @Column()
  created?: Date = new Date();

  @Column()
  __v?: number = 0;
}

export const cloneProduct = (fields: any) => {
  const newObject = new Products();
  newObject.name = fields.name;
  fields.image && (newObject.image = fields.image);
  newObject.price = Number(fields.price);
  newObject.stock = Number(fields.stock);
  newObject.product_id = Number(fields.id);
  newObject.__v = 0;
  newObject.created = new Date();
  return newObject;
};
