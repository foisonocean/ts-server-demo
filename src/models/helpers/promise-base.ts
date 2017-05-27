import { Model, Document } from 'mongoose'

type TModel<T extends Document> = {
  new(...args: any[]): Model<T>
  find(...args: any[]): void
}

export function promiseBase<T extends TModel: Model<Document>}> (OriginModel: T) {
  // class ABC extends OriginModel {
  //   static async find (...args: any[]) {
  //     return new Promise((resolve, reject) => {
  //       super.find(...args, (err, docs) => {
  //         if (err) {
  //           reject(err)
  //         }
  //         resolve(docs)
  //       })
  //     })
  //   }
  // }

  return class extends OriginModel {
    static async find (...args: any[]) {
      super.find()
    }
  }
}
