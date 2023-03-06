import { IsNotEmpty } from "class-validator"
import { Column, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"

@Entity()
export class Roupa {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 50})
    marca: string;
    
    @Column({length: 50})
    tamanho: string;
    
    @Column({length: 50})
    descricao: string;

    @Column({length: 50})
    cor: string

    @Column()
    custo: number

    @Column()
    promocao: number
}
