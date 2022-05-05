<template>
  <button :class="[$style.wrapper]">
    <slot></slot>
  </button>
</template>

<script setup lang="ts"></script>

<style lang="scss" module>
button.wrapper {
  @apply rounded-[25px] border-2 border-white py-2.5 px-[30px] bg-white transition-colors;

  &:hover {
    @apply bg-transparent text-white;
  }
}
</style>
