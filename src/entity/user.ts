import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { Companny } from "./company"

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    email: string

    @ManyToOne(type => Companny, company => company.users, { nullable: true })
    companny: Companny
}
