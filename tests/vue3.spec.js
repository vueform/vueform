// import { createForm, findAllComponents } from 'test-helpers'
// import { createLocalVue } from '@vue/test-utils'

// const Vue = createLocalVue()

describe('Vue3', () => {
  it('', () => {
    console.log(process.env.VUE)
  })
  // it('should render text element', async () => {
  //   let form = createForm({
  //     schema: {
  //       a: {
  //         type: 'text',
  //         label: 'aaa'
  //       },
  //       b: {
  //         type: 'text',
  //         label: 'bbb'
  //       }
  //     }
  //   })

  //   let a = findAllComponents(form, { name: 'TextElement' }).at(0)
  //   let b = findAllComponents(form, { name: 'TextElement' }).at(1)

  //   expect(form.vm.elements$.a.schema).toStrictEqual(a.vm.schema)
  //   expect(form.vm.elements$.b.schema).toStrictEqual(b.vm.schema)

  //   form.vm.$set(form.vm.schema, 'c', { type: 'text', label: 'ccc' })

  //   await Vue.nextTick

  //   let c = findAllComponents(form, { name: 'TextElement' }).at(2)

  //   expect(form.vm.elements$.a.schema).toStrictEqual(a.vm.schema)
  //   expect(form.vm.elements$.b.schema).toStrictEqual(b.vm.schema)
  //   expect(form.vm.elements$.c.schema).toStrictEqual(c.vm.schema)

  //   form.vm.$set(form.vm, 'schema', { 
  //     c: {
  //       type: 'text',
  //       label: 'ccc'
  //     },
  //     b: {
  //       type: 'text',
  //       label: 'bbb'
  //     },
  //     a: {
  //       type: 'text',
  //       label: 'aaa'
  //     },
  //   })
 
  //   await Vue.nextTick

  //   expect(_.keys(form.vm.elements$)[0]).toBe('c')
  //   expect(_.keys(form.vm.elements$)[1]).toBe('b')
  //   expect(_.keys(form.vm.elements$)[2]).toBe('a')
  // })
})