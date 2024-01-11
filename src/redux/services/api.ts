import { BaseQueryFn, FetchArgs, FetchBaseQueryError, createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { enqueueSnackbar } from 'notistack';

import { getLocalStorageItem, removeLocalStorageItem } from '@/utils';

// ----------------------------------------------------------------------

interface ApiError {
  status:  number;
  detail:  string;
  title:   string;
  message: string;
}

const token = getLocalStorageItem<string>('token');

const showSnackbar = (message: string, onClose?: () => void) => {
  enqueueSnackbar(message, {
    variant: 'error',
    autoHideDuration: 2000,
    anchorOrigin: {
      vertical: 'bottom',
      horizontal: 'center',
    },
    onClose
  });
}

const baseQuery = fetchBaseQuery({
  baseUrl: '/api',
  prepareHeaders: (headers) => {
    if (token) {
      headers.set('authorization', `Bearer ${token}`);
    }
    return headers;
  }
});

const baseQueryWithErrorHandler: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  const result = await baseQuery(args, api, extraOptions);
  
  if (result.error) {
    const err = result.error.data as ApiError;

    switch (result.error.status) {
      case 401:
        if(!token) break; 
        showSnackbar('Su sesión ha expirado, por favor ingrese nuevamente', () => {
          removeLocalStorageItem('token');
          api.dispatch({ type: 'auth/logOut' });
        });
        break;
      case 403:
        showSnackbar('No posee permisos para realizar esta acción');
        break;
      default: {
        showSnackbar(err.message);
      }
    }
  }
  
  return result;
}

export const api = createApi({
  reducerPath: 'api',
  baseQuery: baseQueryWithErrorHandler,
  endpoints: () => ({}),
});
