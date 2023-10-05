import { runElementTests } from 'test-helpers'


//@todo:adam incorrect json value/value2 duplicate
export default runElementTests('multifile', {
  default: {
    elementType: 'multifile',
    default: [new File([''], 'filename.jpg'),'filename2.jpg'],
    default2: [{tmp:'asdf123.jpg',originalName:'filename3.jpg'},new File([''], 'filename4.jpg')],
    value: [new File([''], 'filename5.jpg'), new File([''], 'filename6.jpg')],
    value2: ['filename7.jpg','filename8.jpg'],
    value: [1,2,3],
    value2: [4,5,6],
    defaultObject: [{child:new File([''], 'filename.jpg'),child2:new File([''], 'filename2.jpg')},{child:'filename3.jpg',child2:'filename4.jpg'}],
    defaultObject2: [{child:{tmp:'asdf123.jpg',originalName:'filename5.jpg'},child2:{tmp:'asdf123.jpg',originalName:'filename6.jpg'}},{child:new File([''], 'filename7.jpg'),child2:new File([''], 'filename8.jpg')}],
    valueObject: [{child:new File([''], 'filename9.jpg'),child2:new File([''], 'filename10.jpg')},{child:new File([''], 'filename11.jpg'),child2:new File([''], 'filename12.jpg')},{child:new File([''], 'filename13.jpg'),child2:new File([''], 'filename14.jpg')}],
    valueObject2: [{child:'filename15.jpg',child2:'filename16.jpg'},{child:'filename17.jpg',child2:'filename18.jpg'},{child:'filename19.jpg',child2:'filename20.jpg'}],
    prototypes: [
      {
        type: 'multifile',
        auto: false,
      },
      {
        type: 'multifile',
        auto: false,
        object: true,
      }
    ],
    childValues: [
      new File([''], 'filename{i}.jpg'),
      { file: new File([''], 'filename{i}.jpg') }
    ],
    childNulls: [null, { file: null }],
    childName: 'file',
    initial: 0,
    inputSelector: 'div[aria-placeholder="Upload files"]',
  },
  // events: {
  //   events: ['change', 'add', 'remove', 'sort']
  // }
})