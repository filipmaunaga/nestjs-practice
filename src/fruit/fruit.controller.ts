import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { CreateFruitDto } from './dto/create-fruit.dto';
import { type } from 'os';

@Controller('fruit')
export class FruitController {
  @Get()
  getFruit(@Query('type') type: string) {
    return [{ type }];
  }

  @Get(':id')
  getSingleFruit(@Param('id') id: string) {
    return { id };
  }

  @Post()
  createFruit(@Body() createFruitDto: CreateFruitDto) {
    return { name: createFruitDto.name };
  }

  @Put(':id')
  updateFruit(@Param('id') id: string) {
    return { id };
  }
  @Delete(':id')
  deleteFruit(@Param('id') id: string) {
    return {};
  }
}
