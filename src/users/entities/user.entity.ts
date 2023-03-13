import { IsNotEmpty } from "class-validator"
import { Column, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 100})
    nome: string;
    
    @Column({length: 50})
    email: string;
    
    @Column({length: 50})
    senha: string;

}

