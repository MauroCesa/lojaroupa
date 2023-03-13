import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Postagem } from "./postagem.entity"

@Module({
    imports: [TypeOrmModule.forFeature([Postagem])],
    providers: [],
    controllers: [],
    exports: [TypeOrmModule]
})
export class PostagemModule {}