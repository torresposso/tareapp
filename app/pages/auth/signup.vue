<script setup lang="ts">
import * as z from 'zod';
import type { FormSubmitEvent } from '@nuxt/ui';
import { signUp } from '~/utils/authClient';

definePageMeta({
  layout: 'auth',
});

useSeoMeta({
  title: 'Sign up',
  description: 'Create an account to get started',
});

const loading = ref(false);

const toast = useToast();

const fields = [{
  name: 'name',
  type: 'text' as const,
  label: 'Name',
  placeholder: 'Enter your name',
}, {
  name: 'email',
  type: 'text' as const,
  label: 'Email',
  placeholder: 'Enter your email',
}, {
  name: 'password',
  label: 'Password',
  type: 'password' as const,
  placeholder: 'Enter your password',
}];

const _providers = [{
  label: 'Google',
  icon: 'i-simple-icons-google',
  onClick: () => {
    toast.add({ title: 'Google', description: 'Login with Google' });
  },
}, {
  label: 'GitHub',
  icon: 'i-simple-icons-github',
  onClick: () => {
    toast.add({ title: 'GitHub', description: 'Login with GitHub' });
  },
}];

const schema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email'),
  password: z.string().min(8, 'Must be at least 8 characters'),
});

type Schema = z.output<typeof schema>;

async function onSubmit(payload: FormSubmitEvent<Schema>) {
  if (loading.value) return;
  loading.value = true;
  const { error } = await signUp.email({
    name: payload.data.name,
    email: payload.data.email,
    password: payload.data.password,
  });
  if (error) {
    toast.add({
      title: error.message,
      color: 'error',
    });
  }
  else {
    await navigateTo('/dashboard');
    toast.add({
      title: 'You have been signed in!',
    });
  }
  loading.value = false;
}
</script>

<template>
  <UAuthForm
:fields="fields" :schema="schema" title="Create an account" :submit="{ label: 'Create account' }"
    @submit="onSubmit">
    <template #description>
      Already have an account? <ULink to="/auth/login" class="text-primary font-medium">Login</ULink>.
    </template>

    <template #footer>
      By signing up, you agree to our <ULink to="/" class="text-primary font-medium">Terms of Service</ULink>.
    </template>
  </UAuthForm>
</template>
