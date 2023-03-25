import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PriceModule } from 'src/price/price.module';
import { TeamModule } from 'src/team/team.module';
import { TypeModule } from 'src/type/type.module';
import { UserModule } from 'src/user/user.module';
import { Project, ProjectSchema } from './project.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Project.name, schema: ProjectSchema }]),
    UserModule,
    TypeModule,
    TeamModule,
    PriceModule
  ],
  exports: [MongooseModule],
})
export class ProjectModule {}
