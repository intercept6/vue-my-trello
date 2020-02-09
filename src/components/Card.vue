<template>
<div class="card">
  <button class="close-button" @click="removeCardFromList">x</button>
  <div class="body">{{ body }}</div>
</div>
</template>

<script>
import {createComponent} from '@vue/composition-api';

export default createComponent({
  name: "Card",
  props: {
    body: {
      type: String,
      required: true,
    },
    listIndex: {
      type: Number,
      required: true,
    },
    cardIndex: {
      type: Number,
      required: true,
    },
  },
  setup(props) {
    const {
      cardIndex,
      listIndex,
    } = props;

    const removeCardFromList = () => {
      if (confirm('本当にこのカードを削除しますか？')) {
        this.$store.dispatch('removeCardFromList',
          {
            cardIndex,
            listIndex,
          });
      }
    };
    return {
      removeCardFromList,
    };
  },
});
</script>
