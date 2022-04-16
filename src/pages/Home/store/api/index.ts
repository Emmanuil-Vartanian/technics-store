import { AxiosResponse } from 'axios'
import { ApiClient } from 'services/apiClient'
import { URL } from 'api'

export const getProductsAPI = (): Promise<AxiosResponse> => {
  return ApiClient.get(URL.GET_PRODUCTS)
}
