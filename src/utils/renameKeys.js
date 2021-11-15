import { asArray } from '@/utils'

// const obj = { name: 'Bobo', job: 'Front-End Master', shoeSize: 100 };
// renameKeys({ name: 'firstName', job: 'passion' }, obj);
// { firstName: 'Bobo', passion: 'Front-End Master', shoeSize: 100 }

export const renameKeys = (keysMap, objs) => {
  objs = asArray(objs)
  return objs.map((object) => Object.fromEntries(Object.keys(object).map(
    (key) => [keysMap[key] || key, object[key]],
  )),
  )
}
