import { Module } from '@nestjs/common';
import { RoupasService } from './roupas.service';
import { RoupasController } from './roupas.controller';
import { DatabaseModule } from 'src/database/database.module';
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
  imports: [RoupasModule, 
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'lojaroupa',
      entities: [],
      synchronize: true,
    }), RoupasModule
  ],
  controllers: [RoupasController],
  providers: [],
})

export class RoupasModule {}
