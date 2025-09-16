<script setup lang="ts">
import * as z from 'zod';
import type { FormSubmitEvent } from '@nuxt/ui';
import { signIn } from '~/utils/authClient';

definePageMeta({
  layout: 'auth',
});

useSeoMeta({
  title: 'Login',
  description: 'Login to your account to continue',
});

const loading = ref(false);

const toast = useToast();

const fields = [{
  name: 'email',
  type: 'text' as const,
  label: 'Email',
  placeholder: 'Enter your email',
  required: true,
}, {
  name: 'password',
  label: 'Password',
  type: 'password' as const,
  placeholder: 'Enter your password',
}, {
  name: 'remember',
  label: 'Remember me',
  type: 'checkbox' as const,
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
  email: z.string().email('Invalid email'),
  password: z.string().min(8, 'Must be at least 8 characters'),
});

type Schema = z.output<typeof schema>;

async function onSubmit(payload: FormSubmitEvent<Schema>) {
  if (loading.value) return;
  loading.value = true;
  const { error } = await signIn.email({
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
:fields="fields" :schema="schema"  title="Welcome back" icon="i-lucide-lock"
    @submit="onSubmit">
    <template #description>
      Don't have an account? <ULink to="/auth/signup" class="text-primary font-medium">Sign up</ULink>.
    </template>

    <template #password-hint>
      <ULink to="/" class="text-primary font-medium" tabindex="-1">Forgot password?</ULink>
    </template>

    <template #footer>
      By signing in, you agree to our <ULink to="/" class="text-primary font-medium">Terms of Service</ULink>.
    </template>
  </UAuthForm>
</template>
