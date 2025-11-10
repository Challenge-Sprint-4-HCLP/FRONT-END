import '../../style.css'

const teamMembers = [
  {
    name: 'Leonardo Zerbinatti de Sales',
    rm: '562992',
    role: 'Desenvolvedor Front-end',
    room: '1TDSPH',
    bio: 'Responsável pelo desenho das páginas principais e experiência do usuário.'
  },
  {
    name: 'Lucas Tavares Dagrosa',
    rm: '563424',
    role: 'Desenvolvedor Full-stack',
    room: '1TDSPG',
    bio: 'Conectou a camada de serviços e garantiu a consistência dos fluxos de dados.'
  },
  {
    name: 'Henrique Gonçalves Pacheco Costa',
    rm: '562086',
    role: 'Analista de Qualidade',
    room: '1TDSPK',
    bio: 'Planejou cenários de testes e assegurou boas práticas de acessibilidade.'
  }
] as const

export default function Team() {
  return (
    <div className="page-container">
      <header className="page-header">
        <h1>Integrantes do Projeto</h1>
        <p>Conheça os responsáveis pela construção do sistema de agendamento.</p>
      </header>

      <main className="team-content" role="main">
        <section className="team-grid" aria-label="Lista de integrantes">
          {teamMembers.map((member) => (
            <article key={member.rm} className="team-card">
              <h2>{member.name}</h2>
              <ul>
                <li><strong>RM:</strong> {member.rm}</li>
                <li><strong>Sala:</strong> {member.room}</li>
                <li><strong>Função:</strong> {member.role}</li>
              </ul>
              <p>{member.bio}</p>
            </article>
          ))}
        </section>
      </main>
    </div>
  )
}


