import { Injectable } from '@nestjs/common';
import { CreateFruitDto } from './dto/create-fruit.dto';
import { UpdateFruitDto } from './dto/update-fruit.dto';

@Injectable()
export class FruitService {
  private fruit = [
    {
      id: 0,
      name: 'banana',
      origin: 'South America',
    },
    { id: 1, name: 'kiwi', origin: 'Australia' },
  ];

  getFruit(origin?) {
    if (origin) {
      return this.fruit.filter((singleFruit) => singleFruit.origin === origin);
    }
    return this.fruit;
  }

  getSingleFruit(id: number) {
    const singleFruit = this.fruit.find((singleFruit) => singleFruit.id === id);

    if (!singleFruit) {
      throw Error('Fruit not found');
    }
    return singleFruit;
  }

  createFruit(createFruitDto: CreateFruitDto) {
    const newFruit = { ...createFruitDto, id: Date.now() };

    this.fruit.push(newFruit);

    return newFruit;
  }

  updateFruit(id: number, updateFruitDto: UpdateFruitDto) {
    this.fruit = this.fruit.map((singleFruit) => {
      if (singleFruit.id === id) {
        return { ...singleFruit, ...updateFruitDto };
      }
      return singleFruit;
    });
    return this.getSingleFruit(id);
  }

  removeFruit(id: number) {
    const toBeRemoved = this.getSingleFruit(id);
    this.fruit = this.fruit.filter((singleFruit) => singleFruit.id !== id);
    return toBeRemoved;
  }
}
