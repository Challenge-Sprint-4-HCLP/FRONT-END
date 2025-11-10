import { Link } from 'react-router-dom'
import '../../style.css'

interface HistoryProps {
  user: {
    cpf: string
    name: string
    lastName: string
    age: number
    doctor: string
  } | null
}

export default function History({ user }: HistoryProps) {
  if (!user) {
    return (
      <div className="history-container">
        <main role="main">
          <article>
            <h1>Acesso Negado</h1>
            <p>Você precisa fazer login primeiro.</p>
            <Link to="/login" className="button">Fazer Login</Link>
          </article>
        </main>
      </div>
    )
  }

  return (
    <div className="history-container">
      <header className="history-header" role="banner">
        <h1>🏥 Hospital das Clínicas</h1>
        <nav role="navigation">
          <Link to="/dashboard">Voltar ao Dashboard</Link>
        </nav>
      </header>

      <main className="history-main" role="main">
        <section className="history-section">
          <h2>Histórico de Atendimentos</h2>
          
          <article className="patient-info">
            <h3>Informações do Paciente</h3>
            <p><strong>Nome:</strong> {user.name} {user.lastName}</p>
            <p><strong>CPF:</strong> {user.cpf}</p>
            <p><strong>Médico Responsável:</strong> {user.doctor}</p>
          </article>

          <article className="history-list">
            <h3>Atendimentos Anteriores</h3>
            <div className="no-appointments">
              <p>📋 Você ainda não possui consultas registradas no sistema.</p>
              <p>Agende sua primeira consulta através do Dashboard.</p>
              <Link to="/appointment" className="link-button">Agendar Consulta</Link>
            </div>
          </article>

          <article className="statistics">
            <h3>Estatísticas</h3>
            <div className="stats-grid">
              <div className="stat-card">
                <span className="stat-number">0</span>
                <p>Consultas Realizadas</p>
              </div>
              <div className="stat-card">
                <span className="stat-number">0</span>
                <p>Próximas Consultas</p>
              </div>
              <div className="stat-card">
                <span className="stat-number">0</span>
                <p>Consultas Canceladas</p>
              </div>
            </div>
          </article>
        </section>

        <aside className="info-aside" role="complementary">
          <h3>📋 Informações</h3>
          <p>Seu histórico de atendimentos será atualizado à medida que você agendar e realizar consultas.</p>
        </aside>
      </main>

      <footer className="history-footer" role="contentinfo">
        <p>© 2024 Hospital das Clínicas</p>
      </footer>
    </div>
  )
}

