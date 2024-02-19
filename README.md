# Landing Page Aime Uniformes

A landing page da Aime Uniformes é uma aplicação web moderna desenvolvida com React JS, uma biblioteca JavaScript popular para criação de interfaces de usuário. Esta landing page foi hospedada na Amazon Web Services (AWS) para garantir escalabilidade, segurança e desempenho confiável.

## AWS Services Utilizados

### Amazon S3

O conteúdo estático da landing page, como HTML, CSS, JavaScript e ativos multimídia, está armazenado em um bucket Amazon S3. O Amazon S3 fornece uma solução altamente escalável e econômica para armazenamento de objetos, permitindo acesso rápido e confiável ao conteúdo da landing page.

### CloudFront

O Amazon CloudFront é uma CDN (Content Delivery Network) que distribui o conteúdo da landing page para usuários finais em todo o mundo com baixa latência e alta velocidade de transferência. Ele melhora a experiência do usuário final, fornecendo acesso rápido ao conteúdo, independentemente da localização geográfica.

### Route 53

O Amazon Route 53 é um serviço de DNS (Domain Name System) altamente disponível e escalável oferecido pela AWS. Ele é usado para registrar o domínio da landing page (por exemplo, `aimeuniformes.com.br`) e rotear o tráfego de Internet para o CloudFront, garantindo que os visitantes sejam direcionados para a versão mais próxima e rápida da landing page.

## GitHub Actions - CI/CD

As pipelines de CI/CD para a landing page da Aime Uniformes são configuradas utilizando o GitHub Actions. Essas pipelines automatizam os processos de integração contínua (CI) e entrega contínua (CD), garantindo que as alterações no código sejam testadas, construídas e implantadas de forma eficiente e confiável.

### Integração Contínua (CI)

Na etapa de integração contínua, o GitHub Actions é configurado para executar automaticamente testes de unidade, testes de integração ou qualquer outra verificação de qualidade de código sempre que um novo código é enviado para o repositório. Isso ajuda a identificar e corrigir problemas de código mais cedo no ciclo de desenvolvimento.

### Entrega Contínua (CD)

Na etapa de entrega contínua, o GitHub Actions automatiza o processo de implantação da landing page atualizada na AWS após a conclusão bem-sucedida dos testes na etapa de CI. Isso inclui a construção da aplicação React JS, o upload dos artefatos para o Amazon S3 e a invalidação do cache do CloudFront para garantir que os visitantes vejam as alterações mais recentes.

## Benefícios da Arquitetura na AWS e GitHub Actions

- **Escalabilidade:** A arquitetura na AWS e as pipelines de CI/CD do GitHub Actions permitem escalabilidade rápida e eficiente para atender a demandas crescentes.
- **Confiabilidade:** A automação fornecida pelo GitHub Actions garante que as alterações no código sejam testadas e implantadas de forma consistente, enquanto os serviços da AWS garantem alta disponibilidade e resiliência.
- **Desempenho:** A combinação do CloudFront com as pipelines de CI/CD garante tempos de carregamento rápidos e uma experiência de usuário otimizada.
- **Segurança:** Tanto a AWS quanto o GitHub Actions oferecem recursos de segurança robustos para proteger a infraestrutura e os dados da landing page contra ameaças.

## Conclusão

A combinação da arquitetura na AWS com as pipelines de CI/CD do GitHub Actions proporciona uma base sólida e eficaz para a landing page da Aime Uniformes. Essa abordagem permite uma entrega de software mais rápida, confiável e segura, permitindo que a equipe de desenvolvimento concentre-se na criação de valor para os usuários finais.
