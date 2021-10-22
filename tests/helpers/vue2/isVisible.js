import { toBeVisible } from '@testing-library/jest-dom/matchers'

expect.extend({toBeVisible})

export default function (wrapper, visible = true) {
  return expect(wrapper.isVisible()).toBe(visible)
}