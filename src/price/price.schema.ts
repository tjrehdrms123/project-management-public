import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types, Schema as MongooseSchema } from 'mongoose';

export type PriceDocument = Price & Document;

@Schema()
export class Price {
  @Prop()
  responseTime: string;
  
  @Prop({
    required: true
  })
  category: string;

}

export const PriceSchema = SchemaFactory.createForClass(Price);
