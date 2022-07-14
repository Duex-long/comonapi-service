import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Cat } from './cat.interface';
import { CatsService } from './cats.service';
import { CreateCatDto } from './create-cat.dto';

@Controller('cats')
export class CatController {
  constructor(private catService: CatsService) {}
  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catService.findAll();
  }
  @Post()
  create(@Body() createCatDto: CreateCatDto) {
    this.catService.create(createCatDto);
  }
  // 动态路由
  @Get(':id')
  findOne(@Param() params): string {
    console.log(params.id);
    return `This action returns a #${params.id} cat`;
  }
  @Put(':id')
  update(@Param('id') id: string, @Body() updateCatDto: any) {
    return `This action updates a #${id} cat`;
  }
  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes a #${id} cat`;
  }
}
