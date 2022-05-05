<template>
  <div :class="[[$style.wrapper], [$style[`wrapper--${color}`]]]">
    <img :class="[$style.icon]" :src="icon" alt="" />
    <div :class="[$style.info]">
      <h2>{{ heading }}</h2>
      <p>{{ description }}</p>
    </div>
    <BaseButton :class="[$style.button]">Learn More</BaseButton>
  </div>
</template>

<script lang="ts" setup>
import BaseButton from '@components/BaseButton.vue';

const props = defineProps<{
  icon: string;
  heading: string;
  description: string;
  color: 'cadmium-orange' | 'skobeloff' | 'rich-black';
}>();
</script>

<style lang="scss" module>
.wrapper {
  @apply relative flex flex-col justify-between items-start pt-[123px] pb-12 px-12;

  &--cadmium-orange {
    @apply bg-cadmium-orange;
    .button {
      @apply text-cadmium-orange;
    }
  }

  &--skobeloff {
    @apply bg-skobeloff;
    .button {
      @apply text-skobeloff;
    }
  }

  &--rich-black {
    @apply bg-rich-black;
    .button {
      @apply text-rich-black;
    }
  }
}

.icon {
  @apply absolute top-12 left-12;
}

.button {
  @apply mt-6 sm:mt-12 lg:mt-[83px];
}
.info {
  @apply space-y-[25px];
}
</style>
