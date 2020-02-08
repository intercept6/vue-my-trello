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
    >Add</button>
  </form>
</template>

<script>
  export default {
    name: "ListAdd",
    data() {
      return {
        title: '',
        isEditing: false,
      };
    },
    computed: {
      classList() {
        const classList = ['add-list'];
        if (this.isEditing) {
          classList.push('active');
        }
        if (this.titleExists) {
          classList.push('addable');
        }
        return classList
      },
      titleExists() {
        return this.title.length > 0
      }
    },
    methods: {
      addList() {
        this.$store.dispatch('addList', {title: this.title});
        this.title = '';
      },
      startEditing() {
        this.isEditing = true;
      },
      finishEditing() {
        this.isEditing = false;
      },
    },
  };
</script>
