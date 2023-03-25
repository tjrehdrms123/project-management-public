import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types, Schema as MongooseSchema } from 'mongoose';

export type ProjectDocument = Project & Document;

@Schema()
export class Project {
  @Prop()
  contents: string;

  @Prop()
  link: string;

  @Prop()
  budget: number;

  @Prop()
  clientContact: string;

  @Prop({
    required: true,
  })
  date: Date;

  @Prop({
    type: MongooseSchema.Types.ObjectId,
    ref: "Type"
  })
  type: Types.ObjectId;
  
  @Prop({
    type: [MongooseSchema.Types.ObjectId],
    ref: "User"
  })
  designer: Types.ObjectId[];

  @Prop({
    type: [MongooseSchema.Types.ObjectId],
    ref: "User"
  })
  pm: Types.ObjectId[];

  @Prop({
    type: [MongooseSchema.Types.ObjectId],
    ref: "User"
  })
  planer: Types.ObjectId[];

  @Prop({
    type: [MongooseSchema.Types.ObjectId],
    ref: "User"
  })
  appBackend: Types.ObjectId[];

  @Prop({
    type: [MongooseSchema.Types.ObjectId],
    ref: "User"
  })
  appFront: Types.ObjectId[];

  @Prop({
    type: [MongooseSchema.Types.ObjectId],
    ref: "User"
  })
  webBackend: Types.ObjectId[];

  @Prop({
    type: [MongooseSchema.Types.ObjectId],
    ref: "User"
  })
  webFront: Types.ObjectId;
  
  @Prop({
    type: [MongooseSchema.Types.ObjectId],
    ref: "Team"
  })
  team: Types.ObjectId;
  
  @Prop({
    type: MongooseSchema.Types.ObjectId,
    ref: "Price"
  })
  price: Types.ObjectId;

  @Prop({
    required: true,
  })
  projectName: string;

  @Prop({
    required: true,
  })
  projectId: number;
}

export const ProjectSchema = SchemaFactory.createForClass(Project);
