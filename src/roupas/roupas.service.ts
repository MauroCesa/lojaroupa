import { Injectable } from '@nestjs/common';
import { CreateRoupaDto } from './dto/create-roupa.dto';
import { UpdateRoupaDto } from './dto/update-roupa.dto';

@Injectable()
export class RoupasService {
  create(createRoupaDto: CreateRoupaDto) {
    return 'This action adds a new roupa';
  }

  findAll() {
    return `This action returns all roupas`;
  }

  findOne(id: number) {
    return `This action returns a #${id} roupa`;
  }

  update(id: number, updateRoupaDto: UpdateRoupaDto) {
    return `This action updates a #${id} roupa`;
  }

  remove(id: number) {
    return `This action removes a #${id} roupa`;
  }
}
