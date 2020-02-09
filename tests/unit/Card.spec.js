import {createLocalVue, shallowMount} from '@vue/test-utils';
import VueCompositionApi from '@vue/composition-api';
import Card from '../../src/components/Card';

const localVue = createLocalVue();
localVue.use(VueCompositionApi);

describe('Card.vue', () => {
  it('カードの作成', () => {
    const body = 'test card text';
    const wrapper = shallowMount(Card, {
      propsData: {
        body,
        listIndex: 1,
        cardIndex: 1,
      },
    });

    expect(wrapper.html().includes(body)).toBe(true);
  });

  test('スナップショットテスト', () => {
    const wrapper = shallowMount(Card, {
      propsData: {
        body: 'test card text',
        listIndex: 1,
        cardIndex: 1,
      },
    });

    expect(wrapper.element).toMatchSnapshot();
  });

});
