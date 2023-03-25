import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FixturesItemModule } from 'src/fixtures-item/fixtures-item.module';
import { UserModule } from 'src/user/user.module';
import { Fixtures, FixturesSchema } from './fixtures.schema';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: Fixtures.name, schema: FixturesSchema }]),
        UserModule,
        FixturesItemModule
      ],
      exports: [MongooseModule],
})
export class FixturesModule {}
