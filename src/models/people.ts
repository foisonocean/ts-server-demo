import * as mongoose from 'mongoose'

interface IPeopleModel extends mongoose.Document {
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

@dfasz
class Demo extends PeopleModel {
  static hhh() {
    super.find()
  }
}

interface aa extends mongoose.Document{ }
const a = mongoose.model<mongoose.Document>('helo')
a.find()
type bb = typeof a

export { PeopleModel }
