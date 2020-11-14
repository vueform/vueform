import _ from 'lodash'
import { createLocalVue } from '@vue/test-utils'
import { createForm, findAllComponents } from 'test-helpers'

describe('Form Button Anchor', () => {
  it('should display label', () => {
    let form = createForm({
      schema: {
        buttons: {
          type: 'buttons',
          buttons: [{
            type: 'anchor',
            label: 'Cancel'
          }]
        }
      }
    })

    expect(form.findComponent({ name: 'FormButtonAnchor' }).html()).toContain('Cancel')
  })

  it('should add `href`', () => {
    let form = createForm({
      schema: {
        buttons: {
          type: 'buttons',
          buttons: [{
            type: 'anchor',
            label: 'Cancel',
            href: '/something'
          }]
        }
      }
    })

    expect(form.findComponent({ name: 'FormButtonAnchor' }).attributes('href')).toBe('/something')
  })

  it('should add `href`', () => {
    let form = createForm({
      schema: {
        buttons: {
          type: 'buttons',
          buttons: [{
            type: 'anchor',
            label: 'Cancel',
            target: '_blank'
          }]
        }
      }
    })

    expect(form.findComponent({ name: 'FormButtonAnchor' }).attributes('target')).toBe('_blank')
  })
})