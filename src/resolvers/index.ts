import { PeopleModel, IPeopleModel } from '../models/people'

interface PersonQueryParams {
  id?: number,
  name?: string,
}

const resolveFunctions = {
  Query: {
    person (_:never, { id, name }: PersonQueryParams) {
      if (id !== undefined && name !== undefined) {
        return new Promise((resolve, reject) => {
          PeopleModel.findOne({ id, name }, (err, docs) => {
            if (err) {
              reject(err)
            } else {
              resolve(docs)
            }
          })
        })
      }
      if (id !== undefined) {
        return new Promise((resolve, reject) => {
          PeopleModel.findOne({ id }, (err, docs) => {
            if (err) {
              reject(err)
            } else {
              resolve(docs)
            }
          })
        })
      }
      if (name !== undefined) {
        return new Promise((resolve, reject) => {
          PeopleModel.findOne({ name }, (err, docs: IPeopleModel) => {
            if (err) {
              reject(err)
            } else {
              resolve({
                ...docs,
                lover: {
                  id: docs.lover,
                },
              })
            }
          })
        })
      }
      throw new Error('Params for `person` can not be empty')
    },
    lovers (_: never, { id }: PersonQueryParams) {
      if (id === undefined) {
        throw new Error('id is invalid')
      }
      return new Promise((resolve, reject) => {
        PeopleModel.find({ lover: id }, (err, docs: IPeopleModel[]) => {
          if (err) {
            reject(err)
          } else {
            resolve(docs.map(doc => ({
              ...doc,
              lover: {
                id: doc.lover,
              },
            })))
          }
        })
      })
    }
  },
  Person: {
    lover ({lover}: IPeopleModel) {
      return new Promise((resolve, reject) => {
        PeopleModel.findOne({ id: lover }, (err, docs) => {
          if (err) {
            reject(err)
          } else {
            resolve(docs)
          }
        })
      })
    }
  }
}

export { resolveFunctions }
