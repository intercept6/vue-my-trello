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
    >Add Card</button>
  </form>
</template>

<script>
  export default {
    name: "CardAdd",
    data() {
      return {
        body: '',
        isEditing: false,
      };
    },
    props: {
      listIndex: {
        type: Number,
        required: true,
      },
    },
    computed: {
      classList() {
        const classList = ['add-card'];
        if (this.isEditing) {
          classList.push('active');
        }
        if (this.bodyExists) {
          classList.push('addable')
        }
        return classList
      },
      bodyExists() {
        return this.body.length > 0;
      }
    },
    methods: {
      addCardToList() {
        this.$store.dispatch('addCardToList',
          {
            body: this.body,
            listIndex: this.listIndex,
          });
        this.body = '';
      },
      startEditing() {
        this.isEditing = true;
      },
      finishEditing() {
        this.isEditing = false;
      }
    },
  };
</script>
