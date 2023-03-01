import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoupasModule } from './roupas/roupas.module';

@Module({
  imports: [UsersModule, 
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
  controllers: [],
  providers: [],
})
export class AppModule {}
