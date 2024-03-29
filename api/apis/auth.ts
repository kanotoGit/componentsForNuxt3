import { client } from '@/api/clients'
import { LoginRequest, LoginResponse } from '@/types/api'

export default {
  /** ログイン処理 */
  async registLogin (body: LoginRequest): Promise<LoginResponse> {
    const { data } = await client().post('/login', body)
    return data as LoginResponse
  }
}
