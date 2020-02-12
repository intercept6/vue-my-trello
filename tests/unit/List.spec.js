import {createLocalVue, shallowMount} from '@vue/test-utils';
import List from '../../src/components/List';
import VueCompositionApi from '@vue/composition-api';

const localVue = createLocalVue();
localVue.use(VueCompositionApi);

describe('List.vue', () => {
  test('スナップショットテスト', () => {
    const wrapper = shallowMount(List, {
      localVue,
      propsData: {

        title: 'test title',
        cards: [],
        listIndex: 0,
      },
    });

    expect(wrapper.element).toMatchSnapshot();
  });
});
