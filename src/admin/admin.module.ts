import { Module } from '@nestjs/common';
import AdminJS from 'adminjs';
import * as AdminJSMongoose from '@adminjs/mongoose';
import { AdminModule as AdminBroModule } from '@adminjs/nestjs';
import { getModelToken } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import ADMIN from './admin';
import { ProjectModule } from 'src/project/project.module';
import { TeamModule } from 'src/team/team.module';
import { TypeModule } from 'src/type/type.module';
import { UserModule } from 'src/user/user.module';
import { PriceModule } from 'src/price/price.module';
import { FixturesModule } from 'src/fixtures/fixtures.module';
import { FixturesItemModule } from 'src/fixtures-item/fixtures-item.module';
import { Project } from 'src/project/project.schema';
import { Team } from 'src/team/team.schema';
import { Type } from 'src/type/type.schema';
import { User } from 'src/user/user.schema';
import { Price } from 'src/price/price.schema';
import { Fixtures } from 'src/fixtures/fixtures.schema';
import { FixturesItem } from 'src/fixtures-item/fixtures-item.schema';
import locale from './locales/locale';
import projectResource from './resources/project.resource';
import teamResource from './resources/team.resource';
import typeResource from './resources/type.resource';
import userResource from './resources/user.resource';
import priceResource from './resources/price.resource';
import fixturesItemResource from './resources/fixtures.item.resource';
import fixturesResource from './resources/fixtures.resource';

AdminJS.registerAdapter(AdminJSMongoose);

@Module({
  imports: [
    AdminBroModule.createAdminAsync({
      imports: [ProjectModule, TeamModule, TypeModule, UserModule, PriceModule, FixturesModule, FixturesItemModule],
      inject: [getModelToken(Project.name), getModelToken(Team.name), getModelToken(Type.name), getModelToken(User.name), getModelToken(Price.name), getModelToken(Fixtures.name), getModelToken(FixturesItem.name)],
      useFactory: (projectModel: Model<Project>, teamModel: Model<Team>, typeModel: Model<Type>, userModule: Model<User>, priceModule: Model<Price>, fixturesModule: Model<Fixtures>, fixturesItemModule: Model<FixturesItem>) => ({
        adminJsOptions: {
          rootPath: ADMIN.rootPath,
          locale: locale,
          resources: [
            projectResource(projectModel),
            teamResource(teamModel),
            typeResource(typeModel),
            userResource(userModule),
            priceResource(priceModule),
            fixturesResource(fixturesModule),
            fixturesItemResource(fixturesItemModule),
          ],
          dashboard: {
            component: AdminJS.bundle('./components/dashboard'),
          },
          branding: ADMIN.branding,
        },
        auth: {
          cookieName: process.env.ADMIN_ID || 'admin',
          cookiePassword: process.env.ADMIN_PW || '1357',
          authenticate: async (email, password) => {
            if (email === ADMIN.email && password === ADMIN.password) {
              return ADMIN
            }
            return null
          },
        }
      }),
    }),
  ],
})
export class AdminModule {}
