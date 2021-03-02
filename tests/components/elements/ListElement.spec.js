import { runElementTests } from 'test-helpers'

export default runElementTests('list', {
  default: {
    default: ['a','b'],
    default2: ['c','d'],
    value: [1,2,3],
    value2: [4,5,6],
    defaultObject: [{child:'a',child2:'b'},{child:'c',child2:'d'}],
    defaultObject2: [{child:'e',child2:'f'},{child:'g',child2:'h'}],
    valueObject: [{child:1,child2:2},{child:3,child2:4},{child:5,child2:6}],
    valueObject2: [{child:7,child2:8},{child:9,child2:10},{child:11,child2:12}],
  },
  events: {
    events: ['change', 'add', 'remove', 'sort']
  }
})