import { AxiosResponse } from 'axios'

interface LoadingState {
  loading: boolean;
}

export type WithLoading<T> = T & LoadingState;
export type AxiosPromise<T> = Promise<AxiosResponse<T>>;
export type ResponseType<T extends AxiosPromise<unknown>> = T extends Promise<infer U> ? U : never;