import { mount } from '@vue/test-utils'

import Calculator from '@/components/Calculator.vue'

describe('Calculator component unit test', () => {
  it('Correctly show number in display', async () => {
    const wrapper = mount(Calculator)
    const number = wrapper.find('button.number')
    const display = wrapper.find('input#display')

    await number.trigger('click')
    expect(display.element.value).toContain('7')
  })
  it('Correctly handle nested operations', async () => {
    const wrapper = mount(Calculator, {
      data () {
        return {
          current: '4',
          previous: 6,
          operator: '+',
          clickedOperator: false
        }
      }
    })
    await wrapper.vm.handleOperator('+')
    expect(wrapper.vm.current).toEqual('10')
  })
  it('Correctly clear display with button AC', async () => {
    const wrapper = mount(Calculator, {
      current: '4'
    })
    await wrapper.vm.clearDisplay()
    expect(wrapper.vm.current).toEqual('')
  })
})
