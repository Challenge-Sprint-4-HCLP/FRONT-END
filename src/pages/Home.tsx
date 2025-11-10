import { Link } from 'react-router-dom'
import '../../style.css'

const services = [
  {
    icon: '📋',
    title: 'Cadastrar-se',
    description: 'Faça seu cadastro de forma simples e rápida',
    to: '/login',
    ariaLabel: 'Ir para a página de cadastro'
  },
  {
    icon: '📅',
    title: 'Agendar Consultas',
    description: 'Escolha o melhor horário para sua consulta',
    to: '/appointment',
    ariaLabel: 'Ir para agendamento de consultas'
  },
  {
    icon: '🔄',
    title: 'Reagendar ou Cancelar',
    description: 'Gerencie seus agendamentos quando precisar',
    to: '/reschedule-cancel',
    ariaLabel: 'Ir para reagendar ou cancelar consultas'
  },
  {
    icon: '🔔',
    title: 'Receber Lembretes',
    description: 'Seja notificado sobre seus compromissos',
    to: '/reminders',
    ariaLabel: 'Ir para a página de lembretes'
  },
  {
    icon: '📊',
    title: 'Ver Histórico',
    description: 'Consulte todo o histórico de seus atendimentos',
    to: '/history',
    ariaLabel: 'Ir para o histórico de atendimentos'
  },
  {
    icon: '👥',
    title: 'Gerenciar Usuários',
    description: 'Administre cadastros e e-mails dos usuários',
    to: '/users',
    ariaLabel: 'Ir para o gerenciamento de usuários'
  },
  {
    icon: '❓',
    title: 'Perguntas Frequentes',
    description: 'Tire dúvidas rápidas sobre nossos serviços',
    to: '/faq',
    ariaLabel: 'Ir para perguntas frequentes'
  },
  {
    icon: '🤝',
    title: 'Nossa Equipe',
    description: 'Conheça os integrantes do projeto',
    to: '/team',
    ariaLabel: 'Ir para a página da equipe'
  }
] as const

export default function Home() {
  return (
    <div className="home-container">
      <header className="hospital-header" role="banner">
        <h1>🏥 Hospital das Clínicas</h1>
        <p>Cuidando da sua saúde com atenção e excelência</p>

        <nav className="main-nav" role="navigation" aria-label="Menu Principal">
          <Link to="/" aria-label="Página Inicial">Início</Link>
          <Link to="/login" aria-label="Área do Paciente">Área do Paciente</Link>
          <Link to="/dashboard" aria-label="Meus Agendamentos">Meus Agendamentos</Link>
          <Link to="/users" aria-label="Gerenciamento de Usuários">Usuários</Link>
          <Link to="/faq" aria-label="Perguntas Frequentes">FAQ</Link>
          <Link to="/team" aria-label="Conheça a Equipe">Integrantes</Link>
        </nav>
      </header>

      <main className="main-content" role="main">
        <section className="welcome-section">
          <h2>Bem-vindo ao Sistema de Agendamento</h2>
          <article>
            <p className="intro-text">
              Nosso sistema foi desenvolvido para tornar o agendamento de consultas 
              mais acessível, simples e eficiente para todos os pacientes.
            </p>
          </article>
        </section>

        <section className="services-section">
          <h2>O que você pode fazer aqui?</h2>
          <article>
            <ul className="services-list">
              {services.map((service) => (
                <li key={service.title}>
                  <Link
                    to={service.to}
                    className="service-link"
                    aria-label={service.ariaLabel}
                  >
                    <span className="icon" aria-hidden="true">{service.icon}</span>
                    <div>
                      <strong>{service.title}</strong>
                      <p>{service.description}</p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </article>
        </section>

        <section className="cta-section">
          <Link to="/login" className="appointment-button" aria-label="Agendar Consulta">
            📍 Agendar Consulta
          </Link>
          <aside className="help-text">
            <p>
              Clique no botão acima para acessar a área de agendamento. 
              Você precisará fazer login com suas credenciais.
            </p>
          </aside>
        </section>

        <aside className="info-section">
          <h2>Atendimento Personalizado</h2>
          <article>
            <p>
              Nosso sistema foi projetado pensando em todos os pacientes, 
              especialmente aqueles que têm menos familiaridade com tecnologia. 
              Interface intuitiva, fácil navegação e suporte sempre disponível.
            </p>
          </article>
        </aside>
      </main>

      <footer className="main-footer" role="contentinfo">
        <p>© 2024 Hospital das Clínicas - Todos os direitos reservados</p>
        <address>
          Para mais informações, entre em contato: 
          <a href="tel:+551112345678">(11) 1234-5678</a>
        </address>
      </footer>
    </div>
  )
}

