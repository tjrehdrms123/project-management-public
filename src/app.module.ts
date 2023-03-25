import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProjectModule } from './project/project.module';
import { AdminModule } from './admin/admin.module';
import { UserModule } from './user/user.module';
import { TeamModule } from './team/team.module';
import { TypeModule } from './type/type.module';
import { PriceModule } from './price/price.module';
import { FixturesModule } from './fixtures/fixtures.module';
import { FixturesItemModule } from './fixtures-item/fixtures-item.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_URL),
    ProjectModule,
    AdminModule,
    UserModule,
    TeamModule,
    TypeModule,
    PriceModule,
    FixturesModule,
    FixturesItemModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
