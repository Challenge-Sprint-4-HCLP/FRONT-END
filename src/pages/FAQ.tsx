import { useState } from 'react'
import '../../style.css'

const faqItems = [
  {
    question: 'Como faço para agendar uma consulta?',
    answer:
      'Acesse a página de agendamento, escolha o profissional desejado, selecione a data e horário disponíveis e confirme suas informações pessoais.'
  },
  {
    question: 'Posso reagendar minha consulta?',
    answer:
      'Sim. Utilize a seção de reagendamento para escolher um novo horário. O sistema mostrará os horários disponíveis e enviará uma confirmação para o seu e-mail.'
  },
  {
    question: 'Como receberei lembretes da consulta?',
    answer:
      'Os lembretes são enviados por e-mail e SMS (quando habilitado) com até 24 horas de antecedência. Você pode gerenciar essas preferências na página de lembretes.'
  },
  {
    question: 'Esqueci minha senha. O que fazer?',
    answer:
      'Na página de login, clique em “Esqueci minha senha” e informe o e-mail cadastrado. Você receberá um link temporário para redefinir o acesso.'
  },
  {
    question: 'É possível cancelar uma consulta?',
    answer:
      'Sim, na área de reagendamento e cancelamento. Informe o motivo do cancelamento para que possamos liberar o horário para outros pacientes.'
  },
  {
    question: 'Como atualizo meus dados pessoais?',
    answer:
      'Na área do paciente, acesse o perfil e realize as alterações necessárias. Lembre-se de salvar as mudanças ao final do processo.'
  },
  {
    question: 'Quais documentos devo levar no dia da consulta?',
    answer:
      'Leve um documento oficial com foto, cartão do convênio (se houver) e exames anteriores relacionados ao atendimento.'
  },
  {
    question: 'Posso adicionar dependentes à minha conta?',
    answer:
      'Sim. No gerenciamento de usuários, adicione as informações do dependente e vincule-o ao seu cadastro para controlar os agendamentos.'
  },
  {
    question: 'Existe atendimento prioritário?',
    answer:
      'Pacientes com necessidades especiais ou acima de 60 anos têm prioridade. Informe essa condição ao realizar o agendamento para ajustes na recepção.'
  },
  {
    question: 'Como entro em contato com o suporte?',
    answer:
      'Use o canal de suporte listado no rodapé do site ou envie um e-mail para suporte@hospitaldasclinicas.com.br. Responderemos em até 24 horas úteis.'
  }
] as const

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const toggleItem = (index: number) => {
    setActiveIndex((current) => (current === index ? null : index))
  }

  return (
    <div className="page-container">
      <header className="page-header">
        <h1>Perguntas Frequentes (FAQ)</h1>
        <p>Encontre respostas rápidas para as dúvidas mais comuns dos nossos pacientes.</p>
      </header>

      <main className="faq-content" role="main">
        <section aria-label="Lista de perguntas frequentes" className="faq-list">
          {faqItems.map((item, index) => {
            const isActive = activeIndex === index

            return (
              <article key={item.question} className={`faq-item ${isActive ? 'active' : ''}`}>
                <button
                  type="button"
                  className="faq-question"
                  aria-expanded={isActive}
                  aria-controls={`faq-answer-${index}`}
                  onClick={() => toggleItem(index)}
                >
                  <span>{item.question}</span>
                  <span aria-hidden="true">{isActive ? '−' : '+'}</span>
                </button>
                <div
                  id={`faq-answer-${index}`}
                  role="region"
                  aria-hidden={!isActive}
                  className="faq-answer"
                >
                  <p>{item.answer}</p>
                </div>
              </article>
            )
          })}
        </section>
      </main>
    </div>
  )
}


