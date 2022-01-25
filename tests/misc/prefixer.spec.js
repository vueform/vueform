import prefixer from './../../tailwind-prefixer'
import { prefixer as tailwind } from './../../themes/tailwind'
import columns from './../../themes/tailwind/columns'

describe('Tailwind Prefixer', () => {
  it('should prefix tailwind files', async () => {
    expect(prefixer(`// prefix

      export default function (breakpoint, size, prefix = '') {
        const safelist = [
          'w-1/12',
          'w-2/12',
          'hover:w-3/12',
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
          'tw-w-1/12',
          'tw-w-2/12',
          'hover:tw-w-3/12',
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
sm:tw-w-1/12
sm:tw-w-2/12
sm:tw-w-3/12
sm:tw-w-4/12
sm:tw-w-5/12
sm:tw-w-6/12
sm:tw-w-7/12
sm:tw-w-8/12
sm:tw-w-9/12
sm:tw-w-10/12
sm:tw-w-11/12
sm:tw-w-12/12
sm:tw-w-full
md:tw-w-1/12
md:tw-w-2/12
md:tw-w-3/12
md:tw-w-4/12
md:tw-w-5/12
md:tw-w-6/12
md:tw-w-7/12
md:tw-w-8/12
md:tw-w-9/12
md:tw-w-10/12
md:tw-w-11/12
md:tw-w-12/12
md:tw-w-full
lg:tw-w-1/12
lg:tw-w-2/12
lg:tw-w-3/12
lg:tw-w-4/12
lg:tw-w-5/12
lg:tw-w-6/12
lg:tw-w-7/12
lg:tw-w-8/12
lg:tw-w-9/12
lg:tw-w-10/12
lg:tw-w-11/12
lg:tw-w-12/12
lg:tw-w-full
xl:tw-w-1/12
xl:tw-w-2/12
xl:tw-w-3/12
xl:tw-w-4/12
xl:tw-w-5/12
xl:tw-w-6/12
xl:tw-w-7/12
xl:tw-w-8/12
xl:tw-w-9/12
xl:tw-w-10/12
xl:tw-w-11/12
xl:tw-w-12/12
xl:tw-w-full
2xl:tw-w-1/12
2xl:tw-w-2/12
2xl:tw-w-3/12
2xl:tw-w-4/12
2xl:tw-w-5/12
2xl:tw-w-6/12
2xl:tw-w-7/12
2xl:tw-w-8/12
2xl:tw-w-9/12
2xl:tw-w-10/12
2xl:tw-w-11/12
2xl:tw-w-12/12
2xl:tw-w-full`)
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
    expect(columns('md', '8', 'tw-')).toBe('md:tw-w-8/12')
    expect(columns('default', '8', 'tw-')).toBe('tw-w-8/12')
    expect(columns('default', '12', 'tw-')).toBe('tw-w-full')
    expect(columns('sm', '12', 'tw-')).toBe('sm:tw-w-full')
  })
})