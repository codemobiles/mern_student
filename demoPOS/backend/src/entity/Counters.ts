import { Entity, ObjectIdColumn, ObjectId, Column } from "typeorm";

@Entity()
export class Counters {
  @ObjectIdColumn()
  _id: ObjectId;

  @Column()
  id: string;

  @Column({ nullable: true })
  reference_value: string;

  @Column()
  seq: number;
}
