<template>
<div>
  <header>my Trello</header>
  <main>
    <p class="info-line">All: {{totalCardCount}} tasks</p>
    <draggable class="info-index"
               :list="lists"
               @end="movingList"
    >
      <list v-for=
                "(item, index) in lists"
            :key="item.id"
            :title="item.title"
            :cards="item.cards"
            :listIndex="index"
            @change="movingCard"
      ></list>
    </draggable>
    <ListAdd></ListAdd>
  </main>
</div>
</template>

<script>
import ListAdd from './ListAdd';
import List from './List';
import draggable from 'vuedraggable';
import {computed} from '@vue/composition-api';

export default {
  name: "Board",
  components: {
    ListAdd,
    List,
    draggable,
  },
  setup(_, context) {
    const $store = context.root.$store;
    let lists = $store.state.lists;

    const movingCard = () => {
      $store.dispatch('updateList', {lists});
    };
    const movingList = () => {
      $store.dispatch('updateList', {lists});
    };

    const totalCardCount = computed(() => $store.getters.totalCardCount);

    return {
      movingCard,
      movingList,
      lists,
      totalCardCount,
    };
  },
};
</script>
