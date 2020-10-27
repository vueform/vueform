export default function confirmSelectOptions (component, done, LocalVue, options = {a:'aaa',b:'bbb',c:'ccc'}) {
  for (let i = 0; i < _.keys(options).length; i++) {
    let option = component.findAll('option').at(i)

    expect(option.attributes().value).toBe(_.keys(options)[i])
    expect(option.element.innerHTML.trim()).toBe(_.values(options)[i])
  }

  component.vm.native = false

  LocalVue.nextTick(() => {
    for (let i = 0; i < _.keys(options).length; i++) {
      let option = component.findAll('.multiselect__option span').at(i)

      expect(option.element.innerHTML.trim()).toBe(_.values(options)[i])
    }

    done()
  })
}