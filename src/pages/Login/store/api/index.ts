import { ApiClient } from 'services/apiClient'
import { URL } from 'api'
import { AxiosResponse } from 'axios'
import { AuthRequestParams } from '../types'

export const doLoginAPI = (params: AuthRequestParams): Promise<AxiosResponse> => {
  const data = new URLSearchParams()
  data.append('email', params.email)
  data.append('password', params.password)

  return ApiClient.post(URL.LOGIN, data, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  })
}

export const checkAuthAPI = (jwtToken: string): Promise<AxiosResponse> => {
  return ApiClient.post(URL.VALIDATE_TOKEN, { jwtToken })
}
