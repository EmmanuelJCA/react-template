import { api } from '@/redux/services/api';
import type { AuthenticatedUser, SignIn } from '@/types';

// ----------------------------------------------------------------------

const authApiSlice = api.injectEndpoints({
  endpoints: builder => ({
    signIn: builder.mutation<AuthenticatedUser, SignIn>({
      query: (credentials) => ({
        url: '/auth/login',
        method: 'POST',
        body: credentials,
      })
    }),
  }),
});

export const {
  useSignInMutation,
} = authApiSlice;
