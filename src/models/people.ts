import * as mongoose from 'mongoose'

export interface IPeopleModel extends mongoose.Document {
  id: number
  name: string
  age: number
  phone: string
  hobby: string
  lover: number
}

const peopleSchema = new mongoose.Schema({
  id: Number,
  name: String,
  age: Number,
  phone: String,
  hobby: String,
  lover: Number,
})

const PeopleModel = mongoose.model<IPeopleModel>('People', peopleSchema, 'people')

export { PeopleModel }
