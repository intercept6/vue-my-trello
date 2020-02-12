import {createLocalVue, shallowMount} from '@vue/test-utils';
import ListAdd from '../../src/components/ListAdd';
import VueCompositionApi from '@vue/composition-api';

const localVue = createLocalVue();
localVue.use(VueCompositionApi);

describe('ListAdd.vue', () => {
  test('スナップショットテスト', () => {
    const wrapper = shallowMount(ListAdd, {
      localVue,
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
