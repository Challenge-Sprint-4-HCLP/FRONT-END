import { Link } from 'react-router-dom'
import '../../style.css'

interface RescheduleCancelProps {
  user: {
    cpf: string
    name: string
    lastName: string
    age: number
    doctor: string
  } | null
}

export default function RescheduleCancel({ user }: RescheduleCancelProps) {
  if (!user) {
    return (
      <div className="reschedule-container">
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
    <div className="reschedule-container">
      <header className="reschedule-header" role="banner">
        <h1>🏥 Hospital das Clínicas</h1>
        <nav role="navigation">
          <Link to="/dashboard">Voltar ao Dashboard</Link>
        </nav>
      </header>

      <main className="reschedule-main" role="main">
        <section className="reschedule-section">
          <h2>Reagendar ou Cancelar Consulta</h2>
          
          <article className="info-article">
            <h3>Consultas Agendadas</h3>
            <p>Você não possui consultas agendadas no momento.</p>
          </article>

          <article className="options-article">
            <div className="option-card">
              <h3>🔄 Reagendar Consulta</h3>
              <p>Altere a data ou horário da sua consulta</p>
              <Link to="/appointment" className="option-button">Reagendar</Link>
            </div>

            <div className="option-card">
              <h3>❌ Cancelar Consulta</h3>
              <p>Cancele uma consulta existente</p>
              <button className="option-button cancel">Cancelar</button>
            </div>
          </article>
        </section>

        <aside className="help-aside" role="complementary">
          <h3>ℹ️ Informações</h3>
          <article>
            <p>Para reagendar ou cancelar, você precisa ter uma consulta agendada.</p>
            <p>Em caso de dúvidas, entre em contato conosco.</p>
          </article>
        </aside>
      </main>

      <footer className="reschedule-footer" role="contentinfo">
        <p>© 2024 Hospital das Clínicas</p>
      </footer>
    </div>
  )
}

