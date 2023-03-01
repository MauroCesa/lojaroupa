import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RoupasService } from './roupas.service';
import { CreateRoupaDto } from './dto/create-roupa.dto';
import { UpdateRoupaDto } from './dto/update-roupa.dto';

@Controller('roupas')
export class RoupasController {
  constructor(private readonly roupasService: RoupasService) {}

  @Post()
  create(@Body() createRoupaDto: CreateRoupaDto) {
    return this.roupasService.create(createRoupaDto);
  }

  @Get()
  findAll() {
    return this.roupasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.roupasService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRoupaDto: UpdateRoupaDto) {
    return this.roupasService.update(+id, updateRoupaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.roupasService.remove(+id);
  }
}
