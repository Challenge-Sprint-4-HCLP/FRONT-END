import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getUsers, createUser, deleteUser } from '../api/users'
import type { User } from '../api/users'
import '../../style.css'

export default function UserManagement() {
  const [users, setUsers] = useState<User[]>([])
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true)
        const data = await getUsers()
        setUsers(data)
        setError(null)
      } catch (err) {
        console.error('Erro ao buscar usuários:', err)
        setError('Erro ao carregar usuários. Tente novamente.')
      } finally {
        setLoading(false)
      }
    }

    fetchUsers()
  }, [])

  async function handleAddUser() {
    if (!nome.trim() || !email.trim()) {
      setError('Preencha nome e e-mail antes de salvar.')
      return
    }

    try {
      const newUser = await createUser({ nome, email })
      setUsers((prev) => [...prev, newUser])
      setNome('')
      setEmail('')
      setError(null)
    } catch (err) {
      console.error('Erro ao criar usuário:', err)
      setError('Erro ao adicionar usuário. Tente novamente.')
    }
  }

  async function handleDeleteUser(id?: number) {
    if (!id) return
    try {
      await deleteUser(id)
      setUsers((prev) => prev.filter((u) => u.id !== id))
      setError(null)
    } catch (err) {
      console.error('Erro ao excluir usuário:', err)
      setError('Erro ao excluir usuário. Tente novamente.')
    }
  }

  return (
    <div className="user-management-container">
      <header className="user-management-header" role="banner">
        <h1>🏥 Hospital das Clínicas</h1>
        <nav className="main-nav" role="navigation" aria-label="Menu Principal">
          <Link to="/">Início</Link>
          <Link to="/dashboard">Dashboard</Link>
        </nav>
      </header>

      <main className="user-management-main" role="main">
        <section className="user-management-card">
          <h2>Gerenciamento de Usuários</h2>
          <p className="user-management-subtitle">
            Cadastre e acompanhe os usuários do sistema de forma simples.
          </p>

          {error && (
            <div className="user-management-alert" role="alert">
              {error}
            </div>
          )}

          <div className="user-management-form">
            <input
              className="user-input"
              placeholder="Nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              aria-label="Nome"
            />
            <input
              className="user-input"
              placeholder="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-label="Email"
            />
            <button
              onClick={handleAddUser}
              className="user-management-button"
            >
              Adicionar
            </button>
          </div>

          {loading ? (
            <div className="user-management-loading">Carregando usuários...</div>
          ) : (
            <ul className="user-management-list">
              {users.length === 0 ? (
                <li className="user-management-empty">
                  Nenhum usuário encontrado.
                </li>
              ) : (
                users.map((user) => (
                  <li key={user.id} className="user-management-item">
                    <div>
                      <strong>{user.nome}</strong> — {user.email}
                    </div>
                    <button
                      onClick={() => handleDeleteUser(user.id)}
                      className="user-delete-button"
                    >
                      Excluir
                    </button>
                  </li>
                ))
              )}
            </ul>
          )}
        </section>
      </main>

      <footer className="user-management-footer" role="contentinfo">
        <p>© 2024 Hospital das Clínicas - Todos os direitos reservados</p>
      </footer>
    </div>
  )
}

