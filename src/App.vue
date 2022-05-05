<template>
  <main :class="[$style.wrapper]">
    <div :class="[$style.cards]">
      <PreviewCard
        heading="Sedans"
        :icon="iconSedans"
        color="cadmium-orange"
        description="Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip."
      />
      <PreviewCard
        heading="SUVs"
        :icon="iconSuvs"
        color="skobeloff"
        description="Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures."
      />
      <PreviewCard
        heading="Luxury"
        :icon="iconLuxury"
        color="rich-black"
        description="Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style. "
      />
    </div>
  </main>
</template>

<script setup lang="ts">
import PreviewCard from '@components/PreviewCard.vue';

import iconLuxury from '@images/icon-luxury.svg?url';
import iconSedans from '@images/icon-sedans.svg?url';
import iconSuvs from '@images/icon-suvs.svg?url';
</script>

<style lang="scss" module>
.wrapper {
  @apply flex items-center justify-center min-h-screen sm:p-8 p-6;
}
.cards {
  @apply grid lg:grid-cols-3 rounded-lg overflow-hidden md:grid-cols-2 lg:max-w-[920px] lg:-space-x-1.5 -space-y-1.5 md:-space-y-0;

  > * {
    @apply lg:rounded-l-lg rounded-t-lg md:rounded-none;
  }
}
</style>
