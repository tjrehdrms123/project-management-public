import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types, Schema as MongooseSchema } from 'mongoose';

export type FixturesDocument = Fixtures & Document;

@Schema()
export class Fixtures {
  @Prop({
    type: MongooseSchema.Types.ObjectId,
    ref: "FixturesItem"
  })
  itme05: Types.ObjectId;

  @Prop({
    type: MongooseSchema.Types.ObjectId,
    ref: "FixturesItem"
  })
  itme04: Types.ObjectId;

  @Prop({
    type: MongooseSchema.Types.ObjectId,
    ref: "FixturesItem"
  })
  itme03: Types.ObjectId;

  @Prop({
    type: MongooseSchema.Types.ObjectId,
    ref: "FixturesItem"
  })
  itme02: Types.ObjectId;

  @Prop({
    type: MongooseSchema.Types.ObjectId,
    ref: "FixturesItem"
  })
  itme01: Types.ObjectId;

  @Prop({
    type: MongooseSchema.Types.ObjectId,
    ref: "User"
  })
  userName: Types.ObjectId;
}

export const FixturesSchema = SchemaFactory.createForClass(Fixtures);
