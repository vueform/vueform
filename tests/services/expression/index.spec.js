import { createForm } from 'test-helpers'
import { nextTick } from 'vue'

describe('Expression Service', () => {
  describe('Static Content', () => {
    it('should render referenced values in `text`\'s `expression` prop', async () => {
      let form = createForm({
        schema: {
          text: {
            type: 'text',
            default: 'foo'
          },
          object: {
            type: 'object',
            schema: {
              text_1: {
                type: 'text',
                default: 'bar',
              }
            }
          },
          group: {
            type: 'group',
            schema: {
              text_2: {
                type: 'text',
                default: 'baz',
              }
            }
          },
          list: {
            type: 'list',
            initial: 1,
            element: {
              type: 'text',
              default: 'qux',
            }
          },
          nestedList: {
            type: 'list',
            initial: 1,
            element: {
              type: 'object',
              schema: {
                text_4: {
                  type: 'text',
                  default: 'quux',
                },
              }
            }
          },
          test: {
            type: 'text',
            expression: '{text} {object.text_1} {text_2} {list.0} {nestedList.0.text_4} {test}corge'
          },
        }
      })

      let text = form.vm.el$('text')
      let text_1 = form.vm.el$('object.text_1')
      let text_2 = form.vm.el$('group.text_2') // always using full path, not data path
      let text_3 = form.vm.el$('list.0')
      let text_4 = form.vm.el$('nestedList.0.text_4')
      let test = form.vm.el$('test')

      expect(test.value).toBe('foo bar baz qux quux corge')

      text.update('foo')
      text_1.update('foo')
      text_2.update('foo')
      text_3.update('foo')
      text_4.update('foo')
      await nextTick()
      expect(test.value).toBe('foo foo foo foo foo corge')

      text.reset()
      text_1.reset()
      text_2.reset()
      text_3.reset()
      text_4.reset()
      await nextTick()
      expect(test.value).toBe('foo bar baz qux quux corge')

      text.clear()
      text_1.clear()
      text_2.clear()
      text_3.clear()
      text_4.clear()
      await nextTick()
      expect(test.value).toBe('     corge')
    })
    
    it('should render expressions in a `static` element\'s `content` prop', async () => {
      let form = createForm({
        schema: {
          first_name: { type: 'text', default: 'John' },
          last_name: { type: 'text', default: 'Doe' },
          greeting: { type: 'static', content: 'Hello, {first_name} {last_name}!', expressions: true, }
        }
      })

      const greeting = form.vm.el$('greeting')
      const firstName = form.vm.el$('first_name')

      expect(greeting.resolvedContent).toBe('Hello, John Doe!')

      firstName.update('Jane')
      await nextTick()

      expect(greeting.resolvedContent).toBe('Hello, Jane Doe!')
    })

    it('should escape curly brackets in `content`', async () => {
      let form = createForm({
        schema: {
          name: { type: 'text', default: 'World' },
          greeting: { type: 'static', content: 'This is a literal: \\{name\\}', expressions: true, }
        }
      })
      const greeting = form.vm.el$('greeting')
      await nextTick()
      expect(greeting.resolvedContent).toBe('This is a literal: {name}')
    })
  })

  describe('Conditions', () => {
    it('should control element visibility based on a simple condition', async () => {
      let form = createForm({
        schema: {
          show_details: { type: 'checkbox', default: false, },
          details: { type: 'text', conditions: ['show_details == true'] }
        }
      })

      const details = form.vm.el$('details')
      const showDetails = form.vm.el$('show_details')

      expect(details.visible).toBe(false)

      showDetails.update(true)
      await nextTick()

      expect(details.visible).toBe(true)
    })

    it('should handle complex conditions with `and`, `or`, and `()` operators', async () => {
      let form = createForm({
        schema: {
          age: { type: 'text', default: 20 },
          country: { type: 'text', default: 'USA' },
          agreed_terms: { type: 'checkbox', default: false },
          submit: {
            type: 'button',
            conditions: ['age > 18 and (country == "USA" or country == "Canada") and agreed_terms == true']
          }
        }
      })

      const submit = form.vm.el$('submit')
      const age = form.vm.el$('age')
      const country = form.vm.el$('country')
      const agreed_terms = form.vm.el$('agreed_terms')

      expect(submit.visible).toBe(false) // agreed_terms is false

      agreed_terms.update(true)
      await nextTick()
      expect(submit.visible).toBe(true)

      age.update(17)
      await nextTick()
      expect(submit.visible).toBe(false)

      age.update(25)
      await nextTick()
      expect(submit.visible).toBe(true)

      country.update('Mexico')
      await nextTick()
      expect(submit.visible).toBe(false)

      country.update('Canada')
      await nextTick()
      expect(submit.visible).toBe(true)
    })
    
    it('should handle conditions with math expressions', async () => {
      let form = createForm({
        schema: {
          price: { type: 'text', default: 50 },
          quantity: { type: 'text', default: 10 },
          discount_code: { type: 'text', conditions: ['price * quantity >= 500'] }
        }
      })
      
      const discount_code = form.vm.el$('discount_code')
      const quantity = form.vm.el$('quantity')
      
      expect(discount_code.visible).toBe(true)
      
      quantity.update(9)
      await nextTick()
      
      expect(discount_code.visible).toBe(false)
    })
  })

  describe('Operators and Constants', () => {
    it('should evaluate math operators (+, *, /) and parentheses', async () => {
      let form = createForm({
        schema: {
          a: { type: 'text', default: 10 },
          b: { type: 'text', default: 5 },
          c: { type: 'text', default: 2 },
          result: { type: 'text', expression: '${(a + b) / c * 2}' }
        }
      })
      const result = form.vm.el$('result')
      expect(result.value).toBe('$15') // (10 + 5) / 2 * 2 = 15
    })

    it('should evaluate constants PI and E', () => {
      let form = createForm({
        schema: {
          circle_area: { type: 'text', expression: '{PI * 5^2}' },
          euler: { type: 'text', expression: '{E}' }
        }
      })
      const circleArea = form.vm.el$('circle_area')
      const euler = form.vm.el$('euler')

      expect(parseFloat(circleArea.value)).toBeCloseTo(Math.PI * 25)
      expect(euler.value).toBe(Math.E.toString())
    })
  })

  describe('Functions', () => {
    // Mock Date to make tests deterministic
    const MOCK_DATE = '2023-10-27'
    let dateSpy;
    beforeEach(() => {
      dateSpy = jest.spyOn(Date, 'now').mockImplementation(() => new Date(MOCK_DATE).getTime())
    })
    afterEach(() => {
      dateSpy.mockRestore()
    })

    it('should calculate AGE() correctly', () => {
      let form = createForm({
        schema: {
          dob: { type: 'date', default: '1993-05-10' },
          current_age: { type: 'text', expression: '{AGE(dob)}' }
        }
      })
      const current_age = form.vm.el$('current_age')
      expect(current_age.value).toBe('30')
    })

    it('should use TODAY() and DATE_ADD()', () => {
      let form = createForm({
        schema: {
          today_is: { type: 'text', expression: '{TODAY()}' },
          next_month: { type: 'text', expression: "{FORMAT_DATE(DATE_ADD(TODAY(), 1, 'month'), 'YYYY-MM-DD')}" }
        }
      })
      
      const today_is = form.vm.el$('today_is')
      const next_month = form.vm.el$('next_month')
      
      expect(today_is.value).toBe('2023-10-27')
      expect(next_month.value).toBe('2023-11-27')
    })
    
    it('should use FORMAT_DATE()', () => {
      let form = createForm({
        schema: {
          event_date: { type: 'date', default: '2025-12-25' },
          formatted: { type: 'text', expression: "{FORMAT_DATE(event_date, 'DD/MM/YYYY')}" }
        }
      })
      const formatted = form.vm.el$('formatted')
      expect(formatted.value).toBe('25/12/2025')
    })

    describe.each([
      ['SUM', [10, 20, 30], '60'],
      ['AVG', [10, 20, 30], '20'],
      ['MIN', [10, 20, 5, 30], '5'],
      ['MAX', [10, 20, 40, 30], '40'],
      ['COUNT', [10, 20, 30, 40], '4'],
    ])('should evaluate %s() on a list', (func, listDefault, expected) => {
      it(`evaluates ${func}`, () => {
        let form = createForm({
          schema: {
            numbers: { type: 'list', element: { type: 'text' }, default: listDefault },
            result: { type: 'text', expression: `{${func}(numbers)}` }
          }
        })
        const result = form.vm.el$('result')
        expect(result.value).toBe(expected)
      })
    })
    
    it('should use ROUND()', () => {
      let form = createForm({
        schema: {
          val_1: { type: 'text', expression: '{ROUND(3.14159, 2)}' },
          val_2: { type: 'text', expression: '{ROUND(3.7)}' },
        }
      })
      expect(form.vm.el$('val_1').value).toBe('3.14')
      expect(form.vm.el$('val_2').value).toBe('4')
    })
    
    it('should use EMPTY(), NOT_EMPTY() and NOT()', async () => {
      let form = createForm({
        schema: {
          name: { type: 'text' },
          status: { type: 'text', expression: "{EMPTY(name) ? 'Empty' : 'Filled'}" },
          can_submit: { type: 'checkbox', conditions: ['NOT_EMPTY(name)'] },
          is_empty: { type: 'checkbox', conditions: ['NOT(NOT_EMPTY(name))'] }
        }
      })
      
      const name = form.vm.el$('name')
      const status = form.vm.el$('status')
      const can_submit = form.vm.el$('can_submit')
      const is_empty = form.vm.el$('is_empty')
      
      expect(status.value).toBe('Empty')
      expect(can_submit.visible).toBe(false)
      expect(is_empty.visible).toBe(true)
      
      name.update('test')
      await nextTick()

      expect(status.value).toBe('Filled')
      expect(can_submit.visible).toBe(true)
      expect(is_empty.visible).toBe(false)
    })
    
    it('should use DISPLAY_VALUE() for select fields', async () => {
      let form = createForm({
        schema: {
          country: {
            type: 'select',
            default: 'us',
            items: [
              { value: 'us', label: 'United States' },
              { value: 'ca', label: 'Canada' },
            ],
          },
          country_label: { type: 'text', expression: "{DISPLAY_VALUE(country, 'country')}" }
        }
      })

      const country = form.vm.el$('country')
      const country_label = form.vm.el$('country_label')

      expect(country_label.value).toBe('United States')
      
      country.update('ca')
      await nextTick()
      await nextTick()
      
      expect(country_label.value).toBe('Canada')
    })
  })

  describe('List Sibling Expressions', () => {
    it('should calculate row total using sibling values in a list', async () => {
      let form = createForm({
        schema: {
          items: {
            type: 'list',
            initial: 2,
            element: {
              type: 'object',
              schema: {
                price: { type: 'text', default: 0 },
                qty: { type: 'text', default: 0 },
                total: { type: 'text', expression: '{1.5 * items.*.price * items.*.qty * ROUND(1.0)}' }
              }
            }
          }
        }
      })

      const price0 = form.vm.el$('items.0.price')
      const qty0 = form.vm.el$('items.0.qty')
      const total0 = form.vm.el$('items.0.total')
      const price1 = form.vm.el$('items.1.price')
      const qty1 = form.vm.el$('items.1.qty')
      const total1 = form.vm.el$('items.1.total')
      
      price0.update(10)
      qty0.update(5)
      await nextTick()
      expect(total0.value).toBe('75')
      expect(total1.value).toBe('0') // Sibling expression should not affect other rows

      price1.update(20)
      qty1.update(3)
      await nextTick()
      expect(total0.value).toBe('75')
      expect(total1.value).toBe('90')
      
      qty0.update(10)
      await nextTick()
      expect(total0.value).toBe('150')
      expect(total1.value).toBe('90')
    })

    it('should reference values from parent list items and the root', async () => {
      let form = createForm({
        schema: {
          project_code: { type: 'text', default: 'PRJ-123' },
          invoices: {
            type: 'list',
            initial: 1,
            element: {
              type: 'object',
              schema: {
                invoice_id: { type: 'text', default: 'INV-A' },
                line_items: {
                  type: 'list',
                  initial: 1,
                  element: {
                    type: 'object',
                    schema: {
                      item_name: { type: 'text', default: 'Service' },
                      description: {
                        type: 'text',
                        // References root, parent list, and own sibling
                        expression: '{project_code} / {invoices.*.invoice_id} - {invoices.*.line_items.*.item_name}'
                      }
                    }
                  }
                }
              }
            }
          }
        }
      })
      
      const description = form.vm.el$('invoices.0.line_items.0.description')
      const projectCode = form.vm.el$('project_code')
      const invoiceId = form.vm.el$('invoices.0.invoice_id')

      expect(description.value).toBe('PRJ-123 / INV-A - Service')
      
      projectCode.update('PRJ-456')
      await nextTick()
      expect(description.value).toBe('PRJ-456 / INV-A - Service')
      
      invoiceId.update('INV-B')
      await nextTick()
      expect(description.value).toBe('PRJ-456 / INV-B - Service')
    })
    
    it('should perform calculations using sibling and parent-level data', async () => {
      let form = createForm({
        schema: {
          shipments: {
            type: 'list',
            initial: 2,
            element: {
              type: 'object',
              schema: {
                base_fee: { type: 'text', default: 10 },
                items: {
                  type: 'list',
                  initial: 1,
                  element: {
                    type: 'object',
                    schema: {
                      weight: { type: 'text', default: 5 },
                      rate: { type: 'text', default: 2 },
                      // Sibling (weight * rate) + Parent (base_fee)
                      cost: { type: 'text', expression: '{(shipments.*.items.*.weight * shipments.*.items.*.rate) + shipments.*.base_fee}' }
                    }
                  }
                }
              }
            }
          }
        }
      })
      
      // Setup second shipment to have different values
      form.vm.el$('shipments.1.base_fee').update(20)
      await nextTick()

      const cost_0_0 = form.vm.el$('shipments.0.items.0.cost')
      const cost_1_0 = form.vm.el$('shipments.1.items.0.cost')
      
      // Shipment 0: (5 * 2) + 10 = 20
      expect(cost_0_0.value).toBe('20')
      
      // Shipment 1: (5 * 2) + 20 = 30
      expect(cost_1_0.value).toBe('30')
      
      // Update sibling 'weight' in first shipment
      form.vm.el$('shipments.0.items.0.weight').update(10)
      await nextTick()
      
      // Shipment 0 should update: (10 * 2) + 10 = 30
      expect(cost_0_0.value).toBe('30')
      // Shipment 1 should remain unchanged
      expect(cost_1_0.value).toBe('30')
      
      // Update parent 'base_fee' in second shipment
      form.vm.el$('shipments.1.base_fee').update(100)
      await nextTick()
      
      // Shipment 0 should remain unchanged
      expect(cost_0_0.value).toBe('30')
      // Shipment 1 should update: (5 * 2) + 100 = 110
      expect(cost_1_0.value).toBe('110')
    })
  })
})
