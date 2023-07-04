import { Entity, ObjectIdColumn, ObjectId, Column } from "typeorm";

@Entity()
export class User {
  @ObjectIdColumn()
  id: ObjectId;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  age: number;
}

// "_id": "5aa7c5137a3066a2b958947d",
// "username": "chaiyasit.t@gmail.com",
// "password": "$2a$08$mq4EZf1kuYoLQ2pgwFErTu0ULXnfSWrIimnZzCBS6XUPlWHfjksl6",
// "level": "normal",
// "created": "2018-03-13T12:33:23.161Z",
// "__v": 0
