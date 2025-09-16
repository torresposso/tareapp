<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui';

const route = useRoute();

const items = computed<NavigationMenuItem[]>(() => [{
  label: 'Signup',
  to: '/auth/signup',
  icon: 'i-lucide-book-open',
  active: route.path.startsWith('/auth/signup'),
}, {
  label: 'Login',
  to: '/auth/login',
  icon: 'i-lucide-box',
  active: route.path.startsWith('/auth/login'),
}]);
</script>

<template>
  <UHeader
:toggle="{
    color: 'primary',
    variant: 'subtle',
    class: 'rounded-full'
  }">
    <template #title>
      tareApp
    </template>

    <UNavigationMenu :items="items" />

    <template #right>
      <UColorModeButton />
    </template>

    <template #body>
      <UNavigationMenu :items="items" orientation="vertical" class="-mx-2.5" />
    </template>
  </UHeader>
</template>
