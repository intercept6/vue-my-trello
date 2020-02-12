<template>
<form :class="classList" @submit.prevent="addList">
  <label>
    <input
        v-model="title"
        type="text"
        class="text-input"
        placeholder="Add new list"
        @focusin="startEditing"
        @focusout="finishEditing"
    >
  </label>
  <button type="submit"
          class="add-button"
          v-if="isEditing || titleExists"
  >Add
  </button>
</form>
</template>

<script>
import {computed, ref} from '@vue/composition-api';

export default {
  name: "ListAdd",
  setup(_, context) {

    let title = ref('');
    let isEditing = ref(false);

    const titleExists = computed(() => {
      return title.value.length > 0;
    });

    const classList = computed(() => {
      const classList = ['add-list'];
      if (isEditing.value) {
        classList.push('active');
      }
      if (titleExists.value) {
        classList.push('addable');
      }
      return classList;
    });

    const $store = context.root.$store;

    const addList = () => {
      $store.dispatch('addList', {title: title.value});
      title.value = '';
    };
    const startEditing = () => {
      isEditing.value = true;
    };

    const finishEditing = () => {
      isEditing.value = false;
    };


    return {
      title,
      isEditing,
      classList,
      titleExists,
      addList,
      startEditing,
      finishEditing,
    };
  },
  // data() {
  //   return {
  //     title: '',
  //     isEditing: false,
  //   };
  // },
  // computed: {
  //   classList() {
  //     const classList = ['add-list'];
  //     if (this.isEditing) {
  //       classList.push('active');
  //     }
  //     if (this.titleExists) {
  //       classList.push('addable');
  //     }
  //     return classList;
  //   },
  //   titleExists() {
  //     return this.title.length > 0;
  //   },
  // },
  // methods: {
  //   addList() {
  //     this.$store.dispatch('addList', {title: this.title});
  //     this.title = '';
  //   },
  //   startEditing() {
  //     this.isEditing = true;
  //   },
  //   finishEditing() {
  //     this.isEditing = false;
  //   },
  // },
};
</script>
