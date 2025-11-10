import { Link } from 'react-router-dom'
import '../../style.css'

interface DashboardProps {
  user: {
    cpf: string
    name: string
    lastName: string
    age: number
    doctor: string
  } | null
}

export default function Dashboard({ user }: DashboardProps) {
  if (!user) {
    return (
      <div className="dashboard-container">
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
    <div className="dashboard-container">
      <header className="dashboard-header" role="banner">
        <h1>🏥 Hospital das Clínicas</h1>
        <nav role="navigation" aria-label="Menu Principal">
          <Link to="/">Início</Link>
          <Link to="/login">Login</Link>
        </nav>
      </header>

      <main className="dashboard-main" role="main">
        <section className="welcome-section">
          <h2>Bem-vindo, {user.name}!</h2>
          <article>
            <p>Gerencie seus agendamentos e consultas aqui.</p>
          </article>
        </section>

        <section className="services-section">
          <h2>Serviços Disponíveis</h2>
          
          <article className="services-grid">
            <div className="service-card">
              <div className="service-icon">📋</div>
              <h3>Realizar Cadastro</h3>
              <p>Complete seu cadastro no sistema</p>
              <Link to="/appointment" className="service-button">Acessar</Link>
            </div>

            <div className="service-card">
              <div className="service-icon">📅</div>
              <h3>Agendar Consulta</h3>
              <p>Marque uma nova consulta</p>
              <Link to="/appointment" className="service-button">Agendar</Link>
            </div>

            <div className="service-card">
              <div className="service-icon">🔄</div>
              <h3>Reagendar ou Cancelar</h3>
              <p>Altere ou cancele suas consultas</p>
              <Link to="/reschedule-cancel" className="service-button">Gerenciar</Link>
            </div>

            <div className="service-card">
              <div className="service-icon">🔔</div>
              <h3>Lembretes Automáticos</h3>
              <p>Configure seus lembretes</p>
              <Link to="/reminders" className="service-button">Configurar</Link>
            </div>

            <div className="service-card">
              <div className="service-icon">📊</div>
              <h3>Histórico de Atendimentos</h3>
              <p>Consulte seu histórico</p>
              <Link to="/history" className="service-button">Ver Histórico</Link>
            </div>
          </article>
        </section>

        <aside className="info-aside" role="complementary">
          <h3>Informações do Paciente</h3>
          <article>
            <p><strong>Nome Completo:</strong> {user.name} {user.lastName}</p>
            <p><strong>CPF:</strong> {user.cpf}</p>
            <p><strong>Idade:</strong> {user.age} anos</p>
            <p><strong>Médico:</strong> {user.doctor}</p>
          </article>
        </aside>
      </main>

      <footer className="dashboard-footer" role="contentinfo">
        <p>© 2024 Hospital das Clínicas - Todos os direitos reservados</p>
        <address>
          Para mais informações, entre em contato: 
          <a href="tel:+551112345678">(11) 1234-5678</a>
        </address>
      </footer>
    </div>
  )
}

