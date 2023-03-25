import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TypeModule } from 'src/type/type.module';
import { Price, PriceSchema } from './price.schema';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: Price.name, schema: PriceSchema }]),
        TypeModule,
      ],
      exports: [MongooseModule],
})
export class PriceModule {}
