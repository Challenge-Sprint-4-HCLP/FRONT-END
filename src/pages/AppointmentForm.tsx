import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import '../../style.css'

interface AppointmentFormProps {
  user: {
    cpf: string
    name: string
    lastName: string
    age: number
    doctor: string
  } | null
}

export default function AppointmentForm({ user }: AppointmentFormProps) {
  const navigate = useNavigate()
  const [appointmentData, setAppointmentData] = useState({
    date: '',
    time: '',
    reason: ''
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [success, setSuccess] = useState(false)

  const timeSlots = [
    '08:00', '08:30', '09:00', '09:30', '10:00', '10:30',
    '11:00', '11:30', '14:00', '14:30', '15:00', '15:30',
    '16:00', '16:30', '17:00', '17:30'
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const newErrors: Record<string, string> = {}

    if (!appointmentData.date) {
      newErrors.date = 'Data é obrigatória'
    }

    if (!appointmentData.time) {
      newErrors.time = 'Horário é obrigatório'
    }

    if (!appointmentData.reason.trim()) {
      newErrors.reason = 'Motivo da consulta é obrigatório'
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    setSuccess(true)
    setTimeout(() => {
      navigate('/dashboard')
    }, 2000)
  }

  if (success) {
    return (
      <div className="appointment-container">
        <main className="success-message" role="main">
          <h1>✅ Consulta Agendada com Sucesso!</h1>
          <p>Sua consulta foi registrada. Você receberá um lembrete.</p>
          <Link to="/dashboard" className="button">Ir para o Dashboard</Link>
        </main>
      </div>
    )
  }

  if (!user) {
    return (
      <div className="appointment-container">
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
    <div className="appointment-container">
      <header className="appointment-header" role="banner">
        <h1>🏥 Hospital das Clínicas</h1>
        <nav role="navigation">
          <Link to="/">Voltar</Link>
        </nav>
      </header>

      <main className="appointment-main" role="main">
        <section className="appointment-section">
          <h2>Agendar Nova Consulta</h2>
          
          <article className="user-info">
            <h3>Informações do Paciente</h3>
            <p><strong>Nome:</strong> {user.name} {user.lastName}</p>
            <p><strong>CPF:</strong> {user.cpf}</p>
            <p><strong>Idade:</strong> {user.age} anos</p>
            <p><strong>Médico:</strong> {user.doctor}</p>
          </article>

          <form onSubmit={handleSubmit} className="appointment-form" role="form">
            <fieldset>
              <legend>Dados da Consulta</legend>

              <div className="form-group">
                <label htmlFor="date">
                  Data da Consulta <span className="required">*</span>
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={appointmentData.date}
                  onChange={(e) => {
                    setAppointmentData({ ...appointmentData, date: e.target.value })
                    if (errors.date) setErrors({ ...errors, date: '' })
                  }}
                  className={errors.date ? 'error' : ''}
                  min={new Date().toISOString().split('T')[0]}
                  aria-required="true"
                />
                {errors.date && <span className="error-message" role="alert">{errors.date}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="time">
                  Horário <span className="required">*</span>
                </label>
                <select
                  id="time"
                  name="time"
                  value={appointmentData.time}
                  onChange={(e) => {
                    setAppointmentData({ ...appointmentData, time: e.target.value })
                    if (errors.time) setErrors({ ...errors, time: '' })
                  }}
                  className={errors.time ? 'error' : ''}
                  aria-required="true"
                >
                  <option value="">Selecione o horário</option>
                  {timeSlots.map((time) => (
                    <option key={time} value={time}>
                      {time}
                    </option>
                  ))}
                </select>
                {errors.time && <span className="error-message" role="alert">{errors.time}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="reason">
                  Motivo da Consulta <span className="required">*</span>
                </label>
                <textarea
                  id="reason"
                  name="reason"
                  rows={4}
                  value={appointmentData.reason}
                  onChange={(e) => {
                    setAppointmentData({ ...appointmentData, reason: e.target.value })
                    if (errors.reason) setErrors({ ...errors, reason: '' })
                  }}
                  className={errors.reason ? 'error' : ''}
                  placeholder="Descreva o motivo da sua consulta"
                  aria-required="true"
                />
                {errors.reason && <span className="error-message" role="alert">{errors.reason}</span>}
              </div>
            </fieldset>

            <button type="submit" className="submit-button">
              Confirmar Agendamento
            </button>
          </form>
        </section>

        <aside className="help-aside" role="complementary">
          <h3>💡 Dicas</h3>
          <p>Escolha uma data e horário que melhor se encaixem na sua rotina.</p>
          <p>Você receberá um lembrete antes da consulta.</p>
        </aside>
      </main>

      <footer className="appointment-footer" role="contentinfo">
        <p>© 2024 Hospital das Clínicas</p>
      </footer>
    </div>
  )
}

