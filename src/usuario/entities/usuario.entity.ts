import { ApiProperty } from "@nestjs/swagger"
import { IsEmail, IsNotEmpty, MinLength } from "class-validator"
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { Produto } from "../../produtos/entities/produto.entity"

@Entity({name: "tb_usuarios"})
export class Usuario {

    @PrimaryGeneratedColumn() 
    @ApiProperty()
    id_usuario: number

    @IsNotEmpty()
    @Column({length: 255, nullable: false})
    @ApiProperty()
    nome: string

    @IsNotEmpty()
    @Column({length: 255, nullable: false })
    @ApiProperty({example: "email@email.com.br"})
    usuario: string

    @IsNotEmpty()
    @MinLength(8)
    @Column({length: 255, nullable: false }) 
    @ApiProperty()
    senha: string

    @Column({length: 5000 }) 
    @ApiProperty()
    foto: string

    @ApiProperty({type: ()=> Produto})
    @OneToMany(() => Produto, (produto) => produto.usuario)
    produto: Produto[]

}