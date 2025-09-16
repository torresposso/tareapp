<script setup lang="ts">
import type { ButtonProps } from '@nuxt/ui';

const links = ref<ButtonProps[]>([
  {
    label: 'Empieza ahora.',
    color: 'neutral',
    href: '/dashboard',

  },
  {
    label: 'Conoce más',
    color: 'neutral',
    variant: 'subtle',
    trailingIcon: 'i-lucide-arrow-right',
  },
]);
</script>
<template>
  <UPageCard variant="soft" class="">
    <UPageCTA
title="Libera Tu Mente: Organiza Todo lo Importante con tareApp"
      description="Deja de preocuparte por recordar cada detalle. tareApp es tu cerebro externo, diseñado para capturar y organizar todas tus ideas, pendientes y proyectos. Disfruta de la tranquilidad de saber que todo está bajo control y accesible cuando lo necesites."
      orientation="horizontal" :links="links">
      <NuxtImg src="/cta.webp" alt="Illustration" class="w-3/4 mx-auto lg:right-0  rounded-lg" />
    </UPageCTA>
  </UPageCard>
</template>
