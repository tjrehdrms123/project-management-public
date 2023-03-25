import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type FixturesItemDocument = FixturesItem & Document;

@Schema()
export class FixturesItem {
  @Prop()
  contents: string;

  @Prop()
  itemType: string;

  @Prop({
    required: true
  })
  item: string;
}

export const FixturesItemSchema = SchemaFactory.createForClass(FixturesItem);
