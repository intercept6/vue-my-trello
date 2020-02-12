<template>
<form @submit.prevent="addCardToList" :class="classList">
  <label>
    <input type="text"
           v-model="body"
           class="text-input"
           placeholder="Add new card"
           @focusin="startEditing"
           @focusout="finishEditing"
    />
  </label>
  <button type="submit"
          class="add-button"
          v-if="isEditing || bodyExists"
  >Add Card
  </button>
</form>
</template>

<script>
import {computed, ref} from '@vue/composition-api';

export default {
  name: "CardAdd",
  props: {
    listIndex: {
      type: Number,
      required: true,
    },
  },
  setup(props, context) {

    let body = ref('');
    let isEditing = ref(false);

    const bodyExists = computed(() => {
      return body.value.length > 0;
    });

    const classList = computed(() => {
      const classList = ['add-card'];
      if (isEditing.value) {
        classList.push('active');
      }
      if (bodyExists.value) {
        classList.push('addable');
      }

      return classList;
    });
    const $store = context.root.$store;

    const addCardToList = () => {
      $store.dispatch('addCardToList',
        {
          body: body.value,
          listIndex: props.listIndex,
        });
      body.value = '';
    };

    const startEditing = () => {
      isEditing.value = true;
    };

    const finishEditing = () => {
      isEditing.value = false;
    };

    return {
      body,
      isEditing,
      classList,
      bodyExists,
      addCardToList,
      startEditing,
      finishEditing,
    };
  },
};
</script>
