import {shallowMount} from '@vue/test-utils';
import CardAdd from '../../src/components/CardAdd';

describe('CardAdd.vue', () => {
  it('編集中の場合、classにactiveが存在する', () => {
    const wrapper = shallowMount(CardAdd, {
      data() {
        return {
          body: '',
          isEditing: true,
        };
      },
      propsData: {
        listIndex: 1,
      },
    });

    expect(wrapper.classes()).toContain('active');
  });


  it('非編集中の場合、classにactiveが存在しない', () => {
    const wrapper = shallowMount(CardAdd, {
      data() {
        return {
          body: '',
          isEditing: false,
        };
      },
      propsData: {
        listIndex: 1,
      },
    });

    expect(wrapper.classes()).not.toContain('active');
  });

  test('スナップショットテスト', () => {
    const wrapper = shallowMount(CardAdd, {
      data() {
        return {
          body: '',
          isEditing: false,
        };
      },
      propsData: {
        listIndex: 1,
      },
    });

    expect(wrapper.element).toMatchSnapshot();
  });
});
