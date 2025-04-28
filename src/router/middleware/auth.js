export default function AuthMiddleware(to, from, next) {
    return !!localStorage.getItem('authToken') // Or use a proper auth store

  }