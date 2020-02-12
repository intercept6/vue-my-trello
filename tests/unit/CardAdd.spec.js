import {createLocalVue, shallowMount} from '@vue/test-utils';
import CardAdd from '../../src/components/CardAdd';
import VueCompositionApi from '@vue/composition-api';

const localVue = createLocalVue();
localVue.use(VueCompositionApi);

describe('CardAdd.vue', () => {
  // TODO: TS化した後に直す
  // it('編集中の場合、classにactiveが存在する', () => {
  //   const wrapper = shallowMount(CardAdd, {
  //     localVue,
  //     setup() {
  //       return {
  //         body: ref(''),
  //         isEditing: ref(true),
  //       };
  //     },
  //     propsData: {
  //       listIndex: 1,
  //     },
  //   });
  //
  //   expect(wrapper.classes()).toContain('active');
  // });
  //
  //
  // it('非編集中の場合、classにactiveが存在しない', () => {
  //   const wrapper = shallowMount(CardAdd, {
  //     localVue,
  //     data() {
  //       return {
  //         body: '',
  //         isEditing: false,
  //       };
  //     },
  //     propsData: {
  //       listIndex: 1,
  //     },
  //   });
  //
  //   expect(wrapper.classes()).not.toContain('active');
  // });

  test('スナップショットテスト', () => {
    const wrapper = shallowMount(CardAdd, {
      localVue,
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
