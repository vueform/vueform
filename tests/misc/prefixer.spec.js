import prefixer from './../../tailwind-prefixer'
import { prefixer as tailwind } from './../../themes/tailwind'
import columns from './../../themes/tailwind/columns'

describe('Tailwind Prefixer', () => {
  it('should prefix tailwind files', async () => {
    expect(prefixer(`// prefix

      export default function (breakpoint, size, prefix = '') {
        const safelist = [
          'col-span-1',
          'col-span-2',
          'hover:col-span-3',
        ]

        const checkbox = {
          input: 'flex-shrink-0 appearance-none checked:border-0',
          input_enabled: 'checked:form-bg-primary',
          input_disabled: 'form-bg-disabled checked:form-border checked:form-border-color',
          $input: (classes, { isDisabled, Size }) => ([
            classes.input,
            classes[\`input_\${Size}\`],
            isDisabled ? classes.input_disabled : classes.input_enabled
          ]),
        }
      }`, 'tw-')).toBe(`// prefix

      export default function (breakpoint, size, prefix = '') {
        const safelist = [
          'tw-col-span-1',
          'tw-col-span-2',
          'hover:tw-col-span-3',
        ]

        const checkbox = {
          input: 'tw-flex-shrink-0 tw-appearance-none checked:tw-border-0',
          input_enabled: 'checked:tw-form-bg-primary',
          input_disabled: 'tw-form-bg-disabled checked:tw-form-border checked:tw-form-border-color',
          $input: (classes, { isDisabled, Size }) => ([
            classes.input,
            classes[\`tw-input_\${Size}\`],
            isDisabled ? classes.input_disabled : classes.input_enabled
          ]),
        }
      }
sm:tw-col-span-1
sm:tw-col-span-2
sm:tw-col-span-3
sm:tw-col-span-4
sm:tw-col-span-5
sm:tw-col-span-6
sm:tw-col-span-7
sm:tw-col-span-8
sm:tw-col-span-9
sm:tw-col-span-10
sm:tw-col-span-11
sm:tw-col-span-12
md:tw-col-span-1
md:tw-col-span-2
md:tw-col-span-3
md:tw-col-span-4
md:tw-col-span-5
md:tw-col-span-6
md:tw-col-span-7
md:tw-col-span-8
md:tw-col-span-9
md:tw-col-span-10
md:tw-col-span-11
md:tw-col-span-12
lg:tw-col-span-1
lg:tw-col-span-2
lg:tw-col-span-3
lg:tw-col-span-4
lg:tw-col-span-5
lg:tw-col-span-6
lg:tw-col-span-7
lg:tw-col-span-8
lg:tw-col-span-9
lg:tw-col-span-10
lg:tw-col-span-11
lg:tw-col-span-12
xl:tw-col-span-1
xl:tw-col-span-2
xl:tw-col-span-3
xl:tw-col-span-4
xl:tw-col-span-5
xl:tw-col-span-6
xl:tw-col-span-7
xl:tw-col-span-8
xl:tw-col-span-9
xl:tw-col-span-10
xl:tw-col-span-11
xl:tw-col-span-12
2xl:tw-col-span-1
2xl:tw-col-span-2
2xl:tw-col-span-3
2xl:tw-col-span-4
2xl:tw-col-span-5
2xl:tw-col-span-6
2xl:tw-col-span-7
2xl:tw-col-span-8
2xl:tw-col-span-9
2xl:tw-col-span-10
2xl:tw-col-span-11
2xl:tw-col-span-12`)
  })

  it('should prefix tailwind classes', () => {
    let $input = (classes, { isDisabled, Size }) => ([
      classes.input,
      classes[`input_${Size}`],
      isDisabled ? classes.input_disabled : classes.input_enabled
    ])

    expect(tailwind({
      TextElement: {
        input: 'flex-shrink-0 appearance-none checked:border-0',
        input_enabled: 'checked:form-bg-primary',
        input_disabled: 'form-bg-disabled checked:form-border checked:form-border-color',
        $input,
      }
    }, 'tw-')).toEqual({
      TextElement: {
        input: 'tw-flex-shrink-0 tw-appearance-none checked:tw-border-0',
        input_enabled: 'checked:tw-form-bg-primary',
        input_disabled: 'tw-form-bg-disabled checked:tw-form-border checked:tw-form-border-color',
        $input,
      }
    })
  })

  it('should prefix tailwind columns', () => {
    expect(columns('md', '8', 'tw-')).toBe('md:tw-col-span-8')
    expect(columns('default', '8', 'tw-')).toBe('tw-col-span-8')
    expect(columns('default', '12', 'tw-')).toBe('tw-col-span-12')
    expect(columns('sm', '12', 'tw-')).toBe('sm:tw-col-span-12')
  })
})