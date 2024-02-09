import axios, { AxiosInstance } from 'axios'
import store from '../store'
import { fetchLogout, tokenSelector } from '@/modules/auth/model/auth.slice.ts';
import { toast } from '@/shared/shadcnUI/use-toast.tsx';

// eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-assignment
export const api: AxiosInstance = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}/api/v1`,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  }
})

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access
export const apiWithAuthAndErrorMessaging: AxiosInstance = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}/api/v1`,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  }
})

// eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access,@typescript-eslint/require-await
apiWithAuthAndErrorMessaging.interceptors.request.use(async (config) => {
  const token = tokenSelector(store.getState())

  if (token) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    config.headers.Authorization = `Bearer ${token.accessToken}`
  }

  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return config
})

// eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access
apiWithAuthAndErrorMessaging.interceptors.response.use(undefined, async (error) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-call
  if (axios.isAxiosError(error)) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    if (error.response?.status === 401) {
      store.dispatch(fetchLogout())
    }
    toast({
      variant: 'destructive',
      title: 'Server Error',
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-member-access
      description: error.response?.data?.error ?? error.response?.data?.error?.message ?? 'Internal Server Error'
    })
  }
  return await Promise.reject(error)
})

// eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access
api.interceptors.response.use(undefined, async (error) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access
  if (axios.isAxiosError(error)) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    if (error.response?.status === 401) {
      store.dispatch(fetchLogout())
    }
    toast({
      variant: 'destructive',
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-member-access
      description: error.response?.data?.message ?? 'Internal Server Error'
    })
  }
  return await Promise.reject(error)
})