import { Module } from '@nestjs/common';
import { RoupasService } from './roupas.service';
import { RoupasController } from './roupas.controller';

@Module({
  imports: [],
  controllers: [RoupasController],
  providers: [RoupasService],
})

export class RoupasModule {}
