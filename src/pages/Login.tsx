import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../../style.css'

interface LoginProps {
  onLogin: (user: { cpf: string; name: string; lastName: string; age: number; doctor: string }) => void
}

export default function Login({ onLogin }: LoginProps) {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    cpf: '',
    name: '',
    lastName: '',
    age: '',
    doctor: ''
  })
  const [errors, setErrors] = useState<Record<string, string>>({})

  const doctors = [
    'Dr. João Silva - Cardiologista',
    'Dra. Maria Santos - Pediatra',
    'Dr. Carlos Oliveira - Ortopedista',
    'Dra. Ana Costa - Clínico Geral',
    'Dr. Pedro Almeida - Neurologista'
  ]

  const validateCPF = (cpf: string) => {
    const cleanCPF = cpf.replace(/[^\d]/g, '')
    return cleanCPF.length === 11
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const newErrors: Record<string, string> = {}

    if (!formData.cpf.trim()) {
      newErrors.cpf = 'CPF é obrigatório'
    } else if (!validateCPF(formData.cpf)) {
      newErrors.cpf = 'CPF deve ter 11 dígitos'
    }

    if (!formData.name.trim()) {
      newErrors.name = 'Nome é obrigatório'
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Sobrenome é obrigatório'
    }

    if (!formData.age.trim()) {
      newErrors.age = 'Idade é obrigatória'
    } else if (isNaN(Number(formData.age)) || Number(formData.age) < 0 || Number(formData.age) > 150) {
      newErrors.age = 'Idade inválida'
    }

    if (!formData.doctor) {
      newErrors.doctor = 'Selecione um médico'
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    onLogin({
      cpf: formData.cpf.replace(/[^\d]/g, ''),
      name: formData.name.trim(),
      lastName: formData.lastName.trim(),
      age: Number(formData.age),
      doctor: formData.doctor
    })

    navigate('/appointment')
  }

  return (
    <div className="login-container">
      <header className="login-card">
        <h1>🏥 Hospital das Clínicas</h1>
        <nav role="navigation">
          <h2>Área do Paciente</h2>
        </nav>
        <p>Preencha seus dados para acessar o agendamento</p>

        <main role="main">
          <form onSubmit={handleSubmit} className="login-form" role="form">
            <fieldset>
              <legend>Dados do Paciente</legend>
              
              <div className="form-group">
                <label htmlFor="cpf">
                  CPF <span className="required" aria-label="Campo obrigatório">*</span>
                </label>
                <input
                  type="text"
                  id="cpf"
                  name="cpf"
                  placeholder="000.000.000-00"
                  value={formData.cpf}
                  onChange={(e) => {
                    const value = e.target.value.replace(/[^\d]/g, '')
                    let formatted = value.replace(/(\d{3})(\d)/, '$1.$2')
                    formatted = formatted.replace(/(\d{3})(\d)/, '$1.$2')
                    formatted = formatted.replace(/(\d{3})(\d{1,2})$/, '$1-$2')
                    setFormData({ ...formData, cpf: formatted })
                    if (errors.cpf) setErrors({ ...errors, cpf: '' })
                  }}
                  className={errors.cpf ? 'error' : ''}
                  aria-required="true"
                  aria-invalid={errors.cpf ? 'true' : 'false'}
                  aria-describedby={errors.cpf ? 'cpf-error' : undefined}
                />
                {errors.cpf && <span id="cpf-error" className="error-message" role="alert">{errors.cpf}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="name">
                  Nome <span className="required">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Digite seu primeiro nome"
                  value={formData.name}
                  onChange={(e) => {
                    setFormData({ ...formData, name: e.target.value })
                    if (errors.name) setErrors({ ...errors, name: '' })
                  }}
                  className={errors.name ? 'error' : ''}
                  aria-required="true"
                />
                {errors.name && <span className="error-message" role="alert">{errors.name}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="lastName">
                  Sobrenome <span className="required">*</span>
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  placeholder="Digite seu sobrenome"
                  value={formData.lastName}
                  onChange={(e) => {
                    setFormData({ ...formData, lastName: e.target.value })
                    if (errors.lastName) setErrors({ ...errors, lastName: '' })
                  }}
                  className={errors.lastName ? 'error' : ''}
                  aria-required="true"
                />
                {errors.lastName && <span className="error-message" role="alert">{errors.lastName}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="age">
                  Idade <span className="required">*</span>
                </label>
                <input
                  type="number"
                  id="age"
                  name="age"
                  placeholder="Digite sua idade"
                  value={formData.age}
                  onChange={(e) => {
                    setFormData({ ...formData, age: e.target.value })
                    if (errors.age) setErrors({ ...errors, age: '' })
                  }}
                  className={errors.age ? 'error' : ''}
                  min="0"
                  max="150"
                  aria-required="true"
                />
                {errors.age && <span className="error-message" role="alert">{errors.age}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="doctor">
                  Médico <span className="required">*</span>
                </label>
                <select
                  id="doctor"
                  name="doctor"
                  value={formData.doctor}
                  onChange={(e) => {
                    setFormData({ ...formData, doctor: e.target.value })
                    if (errors.doctor) setErrors({ ...errors, doctor: '' })
                  }}
                  className={errors.doctor ? 'error' : ''}
                  aria-required="true"
                >
                  <option value="">Selecione o médico</option>
                  {doctors.map((doctor, index) => (
                    <option key={index} value={doctor}>
                      {doctor}
                    </option>
                  ))}
                </select>
                {errors.doctor && <span className="error-message" role="alert">{errors.doctor}</span>}
              </div>
            </fieldset>

            <aside className="form-help" role="note">
              <p>💡 Todos os campos marcados com <span className="required">*</span> são obrigatórios</p>
            </aside>

            <button type="submit" className="submit-button">
              Entrar e Agendar Consulta
            </button>
          </form>
        </main>

        <footer className="login-footer" role="contentinfo">
          <a href="/" className="back-link">← Voltar para a página inicial</a>
        </footer>
      </header>
    </div>
  )
}

