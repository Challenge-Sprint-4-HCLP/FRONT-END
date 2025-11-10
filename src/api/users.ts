export interface User {
  id: number
  nome: string
  email: string
}

export interface CreateUserPayload {
  nome: string
  email: string
}

const STORAGE_KEY = 'hc-users'
const delay = (ms = 250) => new Promise((resolve) => setTimeout(resolve, ms))

const readFromStorage = (): User[] => {
  if (typeof window === 'undefined') {
    return memoryStore
  }

  const raw = window.localStorage.getItem(STORAGE_KEY)
  if (!raw) {
    return []
  }

  try {
    const parsed = JSON.parse(raw) as User[]
    return Array.isArray(parsed) ? parsed : []
  } catch (error) {
    console.error('Erro ao ler usuários do storage', error)
    return []
  }
}

const writeToStorage = (users: User[]) => {
  if (typeof window === 'undefined') {
    memoryStore = [...users]
    return
  }

  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(users))
}

let memoryStore: User[] = []

export async function getUsers(): Promise<User[]> {
  await delay()
  const users = readFromStorage()
  memoryStore = [...users]
  return users
}

export async function createUser(payload: CreateUserPayload): Promise<User> {
  if (!payload.nome.trim() || !payload.email.trim()) {
    throw new Error('Nome e e-mail são obrigatórios.')
  }

  await delay()
  const users = readFromStorage()
  const nextId = users.length > 0 ? Math.max(...users.map((u) => u.id)) + 1 : 1

  const newUser: User = {
    id: nextId,
    nome: payload.nome.trim(),
    email: payload.email.trim()
  }

  const updatedUsers = [...users, newUser]
  writeToStorage(updatedUsers)
  memoryStore = [...updatedUsers]

  return newUser
}

export async function deleteUser(id: number): Promise<void> {
  await delay()
  const users = readFromStorage()
  const updatedUsers = users.filter((user) => user.id !== id)
  writeToStorage(updatedUsers)
  memoryStore = [...updatedUsers]
}


