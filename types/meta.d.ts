declare module '#app' {
  interface PageMeta {
    /** 認証ページの判定 */
    isRequireAuth?: boolean
  }
}
// It is always important to ensure you import/export something when augmenting a type
export {}