import { LoginRequest, LoginResponse, UserInfo } from '@/types/api'
import { ROLE_NAME } from '@/utils'

export default defineEventHandler(async (event): Promise<LoginResponse | null> => {
  const { id } = await readBody(event) as LoginRequest

  // トークン生成
  const tokenBase = JSON.stringify({ id, time: new Date().getTime() })
  const token = Buffer.from(tokenBase).toString('base64')

  // ユーザデータ探索
  const targetUser = database.find(item => item.id === id)
  await new Promise(resolve => setTimeout(resolve, 2000))
  if (targetUser) {
    // 成功
    return {
      token,
      userInfo: targetUser as UserInfo
    }
  }

  // エラー
  throw createError({
    message: 'ID もしくは パスワードが間違っています。',
    stack: '',
    statusCode: 401,
    statusMessage: 'Invalid credentials'
  })
})

const database = [
  {
    id: 'yamada',
    name: '山田 太郎',
    userRole: {
      id: '1',
      name: ROLE_NAME.ADMIN,
      description: '管理者'
    }
  },
  {
    id: 'suzuki',
    name: '鈴木 二郎',
    userRole: {
      id: '2',
      name: ROLE_NAME.MANAGER,
      description: 'マネージャ'
    }
  },
  {
    id: 'tanaka',
    name: '田中 三郎',
    userRole: {
      id: '3',
      name: ROLE_NAME.LEADER,
      description: 'リーダー'
    }
  },
  {
    id: 'itoh',
    name: '伊藤 健太',
    userRole: {
      id: '4',
      name: ROLE_NAME.GENERAL,
      description: '一般ユーザ'
    }
  },
  {
    id: 'sato',
    name: '佐藤 優子',
    userRole: {
      id: '1',
      name: ROLE_NAME.ADMIN,
      description: '管理者'
    }
  }
]
