import { PeopleModel } from '../models/people'

interface PersonQueryParams {
  id?: number,
  name?: string,
}

const resolveFunctions = {
  Query: {
    person(_:never, { id, name }: PersonQueryParams) {
      console.log('😅', id, name)
      if (id === undefined && name === undefined) {
        throw new Error('Params for `person` can not be empty')
      }
      var result = PeopleModel.find()
    }
  }
}

export { resolveFunctions }
