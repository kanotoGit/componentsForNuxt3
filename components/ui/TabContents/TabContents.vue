<script lang="ts" setup>
import { toRefs, PropType } from 'vue';

/** 各タブのデータ */
export interface TabItem {
  id: symbol;
  url: string;
  label: string;
  disabled: boolean;
}

const props = defineProps({
  /** タブリスト */
  tabItemList: {
    type: Array as PropType<TabItem[]>,
    required: true,
  }
})
const { tabItemList } = toRefs(props)
</script>

<template>
  <div>
    <ul class="tab-button">
      <li v-for="item in tabItemList" :key="item.id">
        <NuxtLink :to="item.url" active-class="is-active" class="button">
          {{ item.label }}
        </NuxtLink>
      </li>
    </ul>
    <div class="tab-contents"><NuxtPage /></div>
  </div>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/common/config' as config;

.tab-button {
  display: flex;
  align-items: flex-end;
  list-style: none;
}
.button {
  min-width: 120px;
  display: block;
  padding: 12px;
  margin: 0 12px;
  border: 2px solid var(--primary);
  border-bottom: none;
  text-decoration: none;
  color: var(--text-color);
  background-color: #fff;
  text-align: center;
  &.is-active {
    color: var(--text-color-white);
    background-color: var(--primary);
    pointer-events: none;
  }
  &:hover {
    background-color: #{lighten(config.$blue, 20)};
  }
}

.tab-contents {
  border-top: 2px solid var(--primary);
}
</style>