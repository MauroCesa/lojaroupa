import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoupasModule } from './roupas/roupas.module';
import { PostagemModule } from './postagem/entities/postagem.module';
import { RoupasController } from './roupas/roupas.controller';
import { DatabaseModule } from './database/database.module';
import { RoupasService } from './roupas/roupas.service';
import { AppService } from './app.service';
import { AppController } from './app.controller';
import { UsersController } from './users/users.controller';
import { Roupa } from './roupas/entities/roupa.entity';
import { UsersService } from './users/users.service';
import { User } from './users/entities/user.entity';

@Module({
  imports: [UsersModule, PostagemModule, DatabaseModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'lojaroupa',
      entities: [Roupa, User],
      synchronize: true,
    }), RoupasModule
  ],
  controllers: [RoupasController,  AppController, UsersController],
  providers: [AppService, RoupasService, UsersService],
})
export class AppModule {}
