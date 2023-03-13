import { PartialType } from '@nestjs/mapped-types';
import { CreateRoupaDto } from './create-roupa.dto';

export class UpdateRoupaDto extends PartialType(CreateRoupaDto) {}
