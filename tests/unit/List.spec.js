import {mount, shallowMount} from '@vue/test-utils';
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


  test('描画テスト', () => {
    const wrapper_shallow = shallowMount(List, {
      propsData: {

        title: 'test title',
        cards: [],
        listIndex: 0,
      },
    });

    console.log(wrapper_shallow.html());

    const wrapper = mount(List, {
      propsData: {

        title: 'test title',
        cards: [],
        listIndex: 0,
      },
    });

    console.log(wrapper.html());
  });
});
