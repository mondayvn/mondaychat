import { shallowMount } from '@vue/test-utils';
import messageFormatterMixin from '../messageFormatterMixin';

describe('messageFormatterMixin', () => {
  it('returns correct plain text', () => {
    const Component = {
      render() {},
      mixins: [messageFormatterMixin],
    };
    const wrapper = shallowMount(Component);
    const message =
      '<b>Mondaychat is an opensource tool. https://www.monday.com.vn</b>';
    expect(wrapper.vm.getPlainText(message)).toMatch(
      'Mondaychat is an opensource tool. https://www.monday.com.vn'
    );
  });
});
