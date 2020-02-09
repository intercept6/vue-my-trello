import {shallowMount} from '@vue/test-utils';
import List from '../../src/components/List';

describe('List.vue', () => {
  test('スナップショットテスト', () => {
    const wrapper = shallowMount(List, {
      propsData: {

        title: 'test title',
        cards: [],
        listIndex: 0,
      },
    });

    expect(wrapper.element).toMatchSnapshot();
  });

});
