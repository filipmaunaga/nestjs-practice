import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
  ValidationPipe,
} from '@nestjs/common';
import { CreateFruitDto } from './dto/create-fruit.dto';
import { type } from 'os';
import { FruitService } from './fruit.service';
import { UpdateFruitDto } from './dto/update-fruit.dto';

@Controller('fruit')
export class FruitController {
  constructor(private readonly fruitService: FruitService) {}

  @Get()
  getFruit(@Query('origin') origin: string) {
    return this.fruitService.getFruit(origin);
  }

  @Get(':id')
  getSingleFruit(@Param('id', ParseIntPipe) id: number) {
    try {
      return this.fruitService.getSingleFruit(id);
    } catch (err) {
      throw new NotFoundException();
    }
  }

  @Post()
  createFruit(@Body(new ValidationPipe()) createFruitDto: CreateFruitDto) {
    return this.fruitService.createFruit(createFruitDto);
  }

  @Put(':id')
  updateFruit(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateFruitDto: UpdateFruitDto,
  ) {
    return this.fruitService.updateFruit(id, updateFruitDto);
  }
  @Delete(':id')
  deleteFruit(@Param('id', ParseIntPipe) id: number) {
    return this.fruitService.removeFruit(id);
  }
}
