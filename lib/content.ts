export type CategorySlug =
  | 'manifesto'
  | 'teoria-tatica'
  | 'cronicas-da-resistencia'
  | 'trincheira-de-fogo'
  | 'autodefesa-organizacao'
  | 'arquivo-vivo'
  | 'internacional'

export type Category = {
  slug: CategorySlug
  name: string
  short: string
  description: string
}

export const categories: Category[] = [
  {
    slug: 'manifesto',
    name: 'Manifesto',
    short: 'Manifesto',
    description: 'O manifesto de lançamento da INSURGÊNCIA. Nossa linha, nossa trincheira.',
  },
  {
    slug: 'teoria-tatica',
    name: 'Teoria & Tática',
    short: 'Teoria & Tática',
    description:
      'Núcleo duro: artigos, ensaios e traduções de clássicos. Curadoria rigorosa, sem concessões.',
  },
  {
    slug: 'cronicas-da-resistencia',
    name: 'Crônicas da Resistência',
    short: 'Crônicas',
    description:
      'Tribuna aberta para relatos de movimentos e coletivos. A responsabilidade é de quem assina.',
  },
  {
    slug: 'trincheira-de-fogo',
    name: 'Trincheira de Fogo',
    short: 'Trincheira',
    description:
      'Debates tensos. Textos que divergem da linha editorial, publicados com nota de repúdio e contraparte da equipe.',
  },
  {
    slug: 'autodefesa-organizacao',
    name: 'Autodefesa & Organização',
    short: 'Autodefesa',
    description:
      'Manuais práticos: segurança digital, organização de base, primeiros socorros, como estruturar uma ocupação.',
  },
  {
    slug: 'arquivo-vivo',
    name: 'Arquivo Vivo',
    short: 'Arquivo',
    description:
      'Republicação de jornais e manifestos históricos. A memória da classe não se apaga.',
  },
  {
    slug: 'internacional',
    name: 'Internacional',
    short: 'Internacional',
    description: 'Análises de conjuntura internacional e solidariedade revolucionária.',
  },
]

export function getCategory(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug)
}

export type Post = {
  slug: string
  title: string
  excerpt: string
  category: CategorySlug
  author: string
  date: string // ISO
  readingMinutes: number
  tags: string[]
  featured?: boolean
  // parágrafos; strings iniciadas com '>' viram citação em destaque,
  // strings iniciadas com '##' viram subtítulo.
  body: string[]
}

export const posts: Post[] = [
  {
    slug: 'manifesto-de-lancamento',
    title: 'Manifesto de Lançamento da INSURGÊNCIA',
    excerpt:
      'Não nascemos para comentar o mundo, mas para virá-lo do avesso. A INSURGÊNCIA está de pé — arsenal de ideias para quem se recusa a esperar.',
    category: 'manifesto',
    author: 'Conselho Editorial da INSURGÊNCIA',
    date: '2026-01-01',
    readingMinutes: 7,
    tags: ['manifesto', 'linha editorial', 'ação direta', 'classe'],
    featured: true,
    body: [
      'Este país foi construído sobre o silêncio forçado de quem trabalha. Cada avenida, cada torre de vidro, cada fortuna herdada carrega a marca de mãos que jamais foram pagas pelo que valem. A INSURGÊNCIA nasce contra esse silêncio.',
      'Não somos uma revista de opinião. Não disputamos likes nem prêmios. Somos uma tribuna de combate, um espaço de acúmulo de forças teóricas, táticas e políticas para o movimento revolucionário. Um arsenal — e arsenais existem para serem usados.',
      '> A palavra, quando afiada pela necessidade histórica, corta mais fundo que qualquer decreto. É por isso que eles temem o pensamento organizado da classe.',
      '## Contra o reformismo, sem concessões',
      'Recusamos a ilusão de que a máquina que nos tritura pode ser reformada em nosso favor. O eleitoralismo domesticou gerações inteiras de militantes, transformando revolta em administração da miséria. Não estamos aqui para administrar a derrota com rosto mais gentil.',
      'Isso não significa fechar o debate. Significa localizá-lo onde ele importa: no campo revolucionário. Discutimos tática com ferocidade e honestidade, porque a clareza é uma arma e a confusão sempre serviu ao inimigo.',
      '## Herdeiros de A Plebe',
      'Reivindicamos a linhagem dos jornais operários que atravessaram a madrugada da história: A Plebe, A Terra Livre, as folhas impressas às pressas em porões e distribuídas de mão em mão. Reivindicamos Edgard Leuenroth e as greves de 1917, quando São Paulo parou e a burguesia descobriu que a paz dela dependia da paciência de quem ela explora.',
      '> A INSURGÊNCIA está de pé. Peguem suas armas — a primeira delas é a ideia.',
      'A quem chega até aqui: este espaço também é seu. Mande seu manifesto, seu relato, sua tradução, seu manual. Acumular para irromper não é palavra de ordem vazia. É método. Começa agora.',
    ],
  },
  {
    slug: 'leuenroth-rumo-a-revolucao-social',
    title: 'Rumo à Revolução Social',
    excerpt:
      'Republicação do histórico manifesto de Edgard Leuenroth, publicado em A Plebe em 9 de junho de 1917, às vésperas da grande greve geral.',
    category: 'arquivo-vivo',
    author: 'Edgard Leuenroth (1917)',
    date: '2026-01-03',
    readingMinutes: 6,
    tags: ['A Plebe', 'Leuenroth', 'greve de 1917', 'anarquismo', 'história'],
    featured: true,
    body: [
      'Nota do Arquivo Vivo: reproduzimos abaixo, em versão adaptada para leitura contemporânea, o espírito do texto de Edgard Leuenroth publicado em A Plebe, no dia 9 de junho de 1917, semanas antes da greve geral que paralisaria São Paulo. Preservamos o tom e a urgência do original.',
      'Camaradas! A hora não é de lamento, é de organização. O operário que verga a coluna doze horas por dia sob o teto da fábrica sabe, no corpo, aquilo que os doutores fingem ignorar: que a riqueza deste país é feita de suor roubado.',
      '> Não pedimos esmola nem favor. Exigimos o que é nosso pelo trabalho e reivindicamos o que será nosso pela luta.',
      'Cada greve é uma escola. Nela o trabalhador aprende que sua força não está no voto que lhe prometem a cada estação, mas na solidariedade de classe, no braço cruzado, na máquina parada.',
      'Que a mocidade operária não se deixe adormecer pelas promessas dos que lucram com a nossa paciência. Rumo à revolução social — não como sonho distante, mas como tarefa dos que vivem.',
      '> A emancipação dos trabalhadores será obra dos próprios trabalhadores.',
      'Este documento pertence à memória viva da classe. Que sirva de fogo, não de relíquia.',
    ],
  },
  {
    slug: 'o-que-significa-acumular-forcas',
    title: 'O que significa acumular forças',
    excerpt:
      'Acúmulo não é espera passiva. É construção paciente e disciplinada de organização, teoria e confiança de classe entre um combate e outro.',
    category: 'teoria-tatica',
    author: 'Vera Antunes',
    date: '2026-02-10',
    readingMinutes: 9,
    tags: ['estratégia', 'organização', 'teoria'],
    body: [
      'Há uma confusão perigosa entre acúmulo de forças e imobilismo. Quem confunde as duas coisas termina justificando a inação em nome de um futuro que nunca chega.',
      'Acumular forças é trabalho concreto: formar quadros, enraizar organização nos locais de trabalho e moradia, construir a confiança que só se ganha na prática compartilhada do risco e da vitória.',
      '> Uma classe que não se organiza no cotidiano não improvisa organização no dia da ruptura.',
      'O acúmulo tem ritmo próprio, mas não tem freio de mão. Cada conflito local é oportunidade de teste, de aprendizado e de crescimento — desde que seja lido coletivamente e não esquecido na semana seguinte.',
      '## Da defensiva à iniciativa',
      'Passar da defensiva à iniciativa exige método. Exige saber quando recuar sem desmoralizar e quando avançar sem aventurar. É disso que trata a tática revolucionária: da arte de transformar força potencial em força real no momento certo.',
    ],
  },
  {
    slug: 'seguranca-digital-para-militantes',
    title: 'Segurança digital para militantes de base',
    excerpt:
      'Um manual introdutório: comunicação criptografada, higiene de dados, compartimentação e os erros mais comuns que expõem coletivos inteiros.',
    category: 'autodefesa-organizacao',
    author: 'Coletivo Tramoia',
    date: '2026-02-22',
    readingMinutes: 11,
    tags: ['autodefesa', 'segurança digital', 'organização'],
    body: [
      'A repressão do século XXI é, antes de tudo, informacional. Antes de bater à porta, o aparato de vigilância já leu suas mensagens, mapeou seus contatos e conhece sua rotina. A autodefesa começa aqui.',
      '## Compartimentação',
      'Nenhuma pessoa deve saber mais do que precisa para cumprir sua tarefa. Isso não é desconfiança entre camaradas — é proteção coletiva. Quando um elo cai, os demais permanecem de pé.',
      '> A segurança de um coletivo é sempre igual à de seu ponto mais frágil.',
      'Use comunicação criptografada de ponta a ponta para tudo que for sensível. Prefira ferramentas de código aberto e auditadas. Desconfie de qualquer aplicativo que peça mais dados do que a função exige.',
      '## Higiene básica',
      'Senhas longas e únicas, autenticação em duas etapas, atualização constante dos sistemas. O básico bem feito derrota a maior parte das investidas. O espetacular é raro; o descuido é diário.',
      'Este manual é introdutório e será ampliado. A segurança não é um estado que se alcança, mas uma prática que se mantém.',
    ],
  },
  {
    slug: 'como-estruturar-uma-ocupacao',
    title: 'Como estruturar uma ocupação',
    excerpt:
      'Da assembleia inicial à divisão de tarefas: princípios práticos para sustentar uma ocupação de terra ou prédio com organização e dignidade.',
    category: 'autodefesa-organizacao',
    author: 'Frente de Moradia Popular',
    date: '2026-03-01',
    readingMinutes: 10,
    tags: ['ocupação', 'moradia', 'organização', 'autodefesa'],
    body: [
      'Ocupar é reivindicar na prática aquilo que o direito de propriedade nega: que a função social vem antes do lucro. Mas ocupar sem organização é entregar a vitória de bandeja à reintegração de posse.',
      '## A assembleia é soberana',
      'Toda decisão estruturante passa pela assembleia. É nela que se constrói legitimidade e se distribui responsabilidade. Liderança sem assembleia vira autoritarismo; assembleia sem liderança vira paralisia.',
      '> Ocupação que não organiza cozinha, limpeza, segurança e comunicação não sobrevive à primeira semana.',
      'Divida tarefas em comissões claras: acolhimento, infraestrutura, comunicação, jurídico, segurança. Rotacione funções para evitar concentração de poder e esgotamento.',
      'Documente tudo o que for público e proteja o que for sensível. A ocupação é também uma disputa de narrativa — e a verdade da classe precisa chegar antes da mentira do latifúndio.',
    ],
  },
  {
    slug: 'conjuntura-internacional-e-solidariedade',
    title: 'Não há revolução em um só país isolado',
    excerpt:
      'Sobre internacionalismo em tempos de fragmentação: por que a solidariedade concreta entre os povos oprimidos não é luxo, e sim necessidade estratégica.',
    category: 'internacional',
    author: 'Núcleo de Análise de Conjuntura',
    date: '2026-03-12',
    readingMinutes: 8,
    tags: ['internacionalismo', 'conjuntura', 'solidariedade'],
    body: [
      'O capital nunca respeitou fronteiras. Move-se, especula e explora em escala planetária. Estranho seria imaginar que a resistência a ele pudesse se encerrar nos limites de um Estado nacional.',
      '> O internacionalismo não é sentimentalismo. É o reconhecimento de que nossos inimigos já estão organizados globalmente.',
      'Solidariedade concreta significa mais que declarações: significa articulação real de lutas, troca de experiências e apoio material quando possível. A conjuntura mundial exige que leiamos além do quintal.',
      'Analisar a conjuntura internacional é parte da autodefesa de classe. Quem não entende o tabuleiro global é jogado por ele.',
    ],
  },
  {
    slug: 'relato-greve-dos-entregadores',
    title: 'Crônica: a madrugada em que os entregadores pararam',
    excerpt:
      'Relato de um coletivo de base sobre a paralisação que cruzou a cidade em duas rodas. As opiniões e a responsabilidade são de quem assina.',
    category: 'cronicas-da-resistencia',
    author: 'Coletivo Breque da Quebrada',
    date: '2026-03-20',
    readingMinutes: 6,
    tags: ['greve', 'trabalho', 'crônica'],
    body: [
      'Era madrugada quando o primeiro grupo se juntou no ponto de sempre. Não havia patrão para bater ponto, mas havia algo mais forte: a decisão de não pedalar naquele dia.',
      '> Descobrimos que o aplicativo que nos comanda não funciona sem nós. Essa foi a lição da noite.',
      'Este relato expressa a experiência do coletivo que o assina. A INSURGÊNCIA abre sua tribuna sem, com isso, assumir cada palavra como linha editorial — a responsabilidade é de quem escreve, e o valor está na voz de quem luta.',
      'O que ficou não foi apenas a pauta atendida em parte. Foi a certeza, agora coletiva, de que a força existe e pode ser convocada de novo.',
    ],
  },
  {
    slug: 'a-favor-da-via-institucional',
    title: 'Em defesa da paciência institucional',
    excerpt:
      'Texto que diverge frontalmente da nossa linha, publicado no espírito do debate franco. Ao final, a nota e a contraparte do Conselho Editorial.',
    category: 'trincheira-de-fogo',
    author: 'Colaboração externa',
    date: '2026-03-25',
    readingMinutes: 5,
    tags: ['debate', 'eleitoralismo', 'reformismo'],
    body: [
      'Argumenta-se aqui que a transformação social só pode avançar pela conquista gradual de espaços institucionais, e que o confronto direto tende a isolar a esquerda e a fortalecer a reação.',
      'Segundo esta visão, a disputa eleitoral seria o terreno realista da luta possível, e a ação direta, um voluntarismo que ignora a correlação de forças.',
      '> É preciso ter coragem de disputar por dentro, dizem, mesmo que isso signifique aceitar as regras do jogo por ora.',
      'O texto sustenta que a ruptura sem maioria consolidada é aventura, e que a paciência institucional protegeria as conquistas já obtidas pela classe trabalhadora.',
    ],
  },
  {
    slug: 'a-palavra-como-arma',
    title: 'A palavra como arma: por uma imprensa de combate',
    excerpt:
      'Por que a classe precisa de sua própria imprensa e o que distingue propaganda revolucionária de mera comunicação de campanha.',
    category: 'teoria-tatica',
    author: 'Vera Antunes',
    date: '2026-04-02',
    readingMinutes: 7,
    tags: ['imprensa', 'propaganda', 'teoria', 'A Plebe'],
    body: [
      'A burguesia tem seus jornais, suas emissoras, seus algoritmos. A classe trabalhadora, historicamente, teve suas folhas de combate — impressas com dificuldade, lidas com avidez, temidas pelo poder.',
      '> Uma imprensa de combate não informa apenas: organiza, forma e convoca.',
      'Propaganda revolucionária não é enganar; é revelar. É tornar visível a exploração que o cotidiano naturaliza e apontar a saída coletiva onde só se enxergava destino individual.',
      'A INSURGÊNCIA se inscreve nessa tradição. Cada texto é um tijolo; cada leitor, um possível construtor.',
    ],
  },
]

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug)
}

export function getPostsByCategory(slug: CategorySlug): Post[] {
  return posts
    .filter((p) => p.category === slug)
    .sort((a, b) => (a.date < b.date ? 1 : -1))
}

export function getRecentPosts(limit?: number): Post[] {
  const sorted = [...posts].sort((a, b) => (a.date < b.date ? 1 : -1))
  return typeof limit === 'number' ? sorted.slice(0, limit) : sorted
}

export function getRelatedPosts(post: Post, limit = 3): Post[] {
  return posts
    .filter((p) => p.slug !== post.slug && p.category === post.category)
    .concat(
      posts.filter(
        (p) =>
          p.slug !== post.slug &&
          p.category !== post.category &&
          p.tags.some((t) => post.tags.includes(t)),
      ),
    )
    .filter((p, i, arr) => arr.findIndex((x) => x.slug === p.slug) === i)
    .slice(0, limit)
}

export function searchPosts(query: string): Post[] {
  const q = query.trim().toLowerCase()
  if (!q) return []
  return posts.filter(
    (p) =>
      p.title.toLowerCase().includes(q) ||
      p.excerpt.toLowerCase().includes(q) ||
      p.tags.some((t) => t.toLowerCase().includes(q)) ||
      p.author.toLowerCase().includes(q),
  )
}

export function formatDate(iso: string): string {
  return new Date(iso + 'T00:00:00').toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  })
}
