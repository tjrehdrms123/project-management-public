import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from 'src/user/user.module';
import { FixturesItem, FixturesItemSchema } from './fixtures-item.schema';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: FixturesItem.name, schema: FixturesItemSchema }]),
        UserModule,
      ],
      exports: [MongooseModule],
})
export class FixturesItemModule {}
