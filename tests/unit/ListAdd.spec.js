import {shallowMount} from '@vue/test-utils';
import ListAdd from '../../src/components/ListAdd';

describe('ListAdd.vue', () => {
  test('スナップショットテスト', () => {
    const wrapper = shallowMount(ListAdd, {
      data() {
        return {
          title: '',
          isEditing: false,
        };
      },
    });

    expect(wrapper.element).toMatchSnapshot();
  });
});
