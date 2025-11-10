import { Link } from 'react-router-dom'
import '../../style.css'

interface RemindersProps {
  user: {
    cpf: string
    name: string
    lastName: string
    age: number
    doctor: string
  } | null
}

export default function Reminders({ user }: RemindersProps) {
  if (!user) {
    return (
      <div className="reminders-container">
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
    <div className="reminders-container">
      <header className="reminders-header" role="banner">
        <h1>🏥 Hospital das Clínicas</h1>
        <nav role="navigation">
          <Link to="/dashboard">Voltar ao Dashboard</Link>
        </nav>
      </header>

      <main className="reminders-main" role="main">
        <section className="reminders-section">
          <h2>Lembretes Automáticos</h2>
          
          <article className="info-article">
            <h3>Configurar Lembretes</h3>
            <p>Receba notificações sobre suas consultas agendadas.</p>
          </article>

          <article className="reminder-options">
            <div className="reminder-card">
              <h3>📧 Email</h3>
              <p>Receba lembretes por email</p>
              <button className="reminder-toggle">Ativar</button>
            </div>

            <div className="reminder-card">
              <h3>📱 SMS</h3>
              <p>Receba lembretes por SMS</p>
              <button className="reminder-toggle">Ativar</button>
            </div>

            <div className="reminder-card">
              <h3>🔔 Notificação</h3>
              <p>Receba notificações no navegador</p>
              <button className="reminder-toggle active">Ativado</button>
            </div>
          </article>

          <article className="reminder-times">
            <h3>Antecedência dos Lembretes</h3>
            <p>Quando você deseja ser lembrado?</p>
            <ul>
              <li>✅ 1 dia antes</li>
              <li>✅ 1 hora antes</li>
              <li>❌ 30 minutos antes (desativado)</li>
            </ul>
          </article>
        </section>

        <aside className="info-aside" role="complementary">
          <h3>💡 Dicas</h3>
          <p>Configure pelo menos um método de notificação para não perder suas consultas.</p>
        </aside>
      </main>

      <footer className="reminders-footer" role="contentinfo">
        <p>© 2024 Hospital das Clínicas</p>
      </footer>
    </div>
  )
}

