<template>
<div class="list">
  <div class="list-header">
    <p class="list-title">{{title}}</p>
    <p class="list-counter">total: {{totalCardInList}}</p>
    <div class="delete-list" @click="removeList">x</div>
  </div>
  <draggable group="cards"
             :list="cards"
             @end="$emit('change')"
  >
    <Card v-for="(item, index) in cards"
          :body="item.body"
          :key="item.id"
          :cardIndex="index"
          :listIndex="listIndex"
    ></Card>
  </draggable>
  <cardAdd :listIndex="listIndex"></cardAdd>
</div>
</template>

<script>
import Card from './Card';
import CardAdd from './CardAdd';
import draggable from 'vuedraggable';
import {computed} from '@vue/composition-api';

export default {
  name: "List",
  props: {
    title: {
      type: String,
      required: true,
    },
    cards: {
      type: Array,
      required: true,
    },
    listIndex: {
      type: Number,
      required: true,
    },
  },
  setup(props, context) {
    const totalCardInList = computed(() => {
      return props.cards.length;
    });

    const $store = context.root.$store;
    const removeList = () => {
      if (confirm('本当にこのリストを削除しますか？')) {
        $store.dispatch('removeList', {listIndex: props.listIndex});
      }
    };

    return {
      totalCardInList,
      removeList,
    };
  },
  // computed: {
  //   totalCardInList() {
  //     return this.cards.length;
  //   }
  // },
  // methods: {
  //   removeList() {
  //     if (confirm('本当にこのリストを削除しますか？')) {
  //       this.$store.dispatch('removeList', {listIndex: this.listIndex});
  //     }
  //   },
  // },
  components: {
    Card,
    CardAdd,
    draggable,
  },
};
</script>
