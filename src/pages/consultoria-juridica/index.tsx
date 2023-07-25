import React from "react"

import HeadBanner from "@/components/HeadBanner"
import img2 from "../../assets/png/chaves.png"
import img5 from "../../assets/png/consult.jpg"
import { tokens } from "@/utils/tokens"
import { Card, Subtitle, Title } from "@/components"
import ImageAndText from "@/sections/ImageAndText"
import ContentBox from "@/components/ContentBox"
import UnregulatedChart from "@/components/UnregulatedChart"
import Description from "@/components/Description"
import Accordion from "@/components/Accordion"
import CtaButton from "@/components/CtaButton"
import MistakesChart from "@/components/MistakesChart"
import { useDevice } from "@/hooks/useDevice"
import JudicialForm from "@/components/JudicialForm"
import HasConsultPeopleChart from "@/components/HasConsultPeopleChart"
import HasConsultCompanyChart from "@/components/HasConsultCompanyChart"

const LegalAdvice: React.FC = () => {
  const { isMobile } = useDevice()
  return (
    <>
      <HeadBanner
        title="Consultoria jurídica"
        color={tokens.colors.neutral.highPure}
      />

      <ImageAndText
        anchor="real-estate"
        title="REGULARIZAÇÃO DE IMÓVEIS"
        image={img2}
        reverse
        subtitle={
          <>
            Regularizamos qualquer problema com seu imóvel. Você sabia que a
            regularização do seu imóvel, urbano ou rural, é capaz de valorizá-lo
            em até 50%? Além disso, traz uma série de benefícios na alienação e
            sucessão desses bens.
            <br />
            <br />
            Os donos de imóveis rurais são impedidos de participar de
            privilégios na obtenção de créditos. Resguarde o seu patrimônio e
            regularize agora o seu imóvel
          </>
        }
      >
        <ContentBox py={"30px"} bgColor={tokens.colors.brand.lightCream}>
          <Subtitle
            style={{
              textAlign: "left",
            }}
          >
            Taxa de imóveis desregularizados no Brasil nos últimos anos:
          </Subtitle>

          <UnregulatedChart />

          <Title
            style={{
              marginTop: "60px",
            }}
          >
            Nossa equipe de especialistas altamente qualificados está pronta
            para ajudá-lo a regularizar seu imóvel de maneira eficiente e
            confiável.
          </Title>

          <Subtitle
            style={{
              marginTop: "60px",

              textAlign: "left",
            }}
          >
            Confira abaixo o checklist de benefícios ao contar com os nossos
            serviços:
          </Subtitle>

          <Accordion
            style={{
              margin: "24px 0",
            }}
            data={[
              {
                id: 0,
                title: "Expertise Jurídica",
                description:
                  "Contamos com uma equipe de profissionais experientes em direito imobiliário, familiarizados com a legislação e os procedimentos necessários para a regularização de imóveis. Podemos oferecer orientação jurídica precisa e soluções personalizadas de acordo com as características únicas do seu caso.",
              },
              {
                id: 1,
                title: "Segurança Legal",
                description:
                  "Ao regularizar seu imóvel com a CBL Consultoria, você terá a tranquilidade de estar em conformidade com todas as exigências legais. Realizamos uma análise minuciosa da documentação e processos relacionados ao seu imóvel, garantindo que todas as pendências sejam resolvidas de maneira adequada, evitando problemas futuros.",
              },
              {
                id: 2,
                title: "Agilidade e Eficiência",
                description:
                  "Sabemos que o tempo é um fator crucial quando se trata de regularização imobiliária. Nossa equipe trabalha de forma ágil e eficiente, utilizando as melhores estratégias e conhecimentos para acelerar o processo de regularização do seu imóvel, sem comprometer a qualidade e a segurança.",
              },
              {
                id: 3,
                title: "Redução de Riscos",
                description:
                  "A regularização do imóvel não apenas garante a segurança jurídica, mas também reduz riscos associados a questões como herança, litígios, irregularidades fiscais e problemas futuros com as transações imobiliárias. Ao contar com nossos serviços, você terá um imóvel regularizado, livre de preocupações e passível de transações seguras.",
              },
              {
                id: 4,
                title: "Acompanhamento Personalizado",
                description:
                  "Na CBL Consultoria, valorizamos o atendimento personalizado aos nossos clientes. Durante todo o processo de regularização do seu imóvel, você terá um suporte dedicado, esclarecimento de dúvidas e atualizações regulares sobre o andamento do processo. Estamos comprometidos em fornecer um serviço de excelência.",
              },
              {
                id: 5,
                title: "Resultados Comprovados",
                description:
                  "Nossa empresa possui um histórico sólido e resultados comprovados na regularização de imóveis. Já ajudamos inúmeros clientes a resolverem suas questões imobiliárias com sucesso, construindo uma reputação de confiança e excelência no mercado.",
              },
            ]}
          />

          <Description>
            Não deixe a regularização do seu imóvel para depois. Entre em
            contato conosco hoje mesmo e agende uma consulta inicial. A CBL
            Consultoria está pronta para auxiliá-lo(a) em todas as etapas do
            processo, oferecendo segurança, expertise e eficiência na
            regularização do seu imóvel.
          </Description>

          <CtaButton
            style={{
              marginTop: "24px",
            }}
            href="#purposeForm"
          >
            Regularize seu Imóvel
          </CtaButton>
        </ContentBox>
      </ImageAndText>

      <ImageAndText
        anchor="medical-error"
        title="ERRO MÉDICO"
        chart={<MistakesChart />}
        subtitle={
          <>
            A Organização Mundial da Saúde (OMS) publicou um relatório que
            mostra um aumento na ocorrência de erros médicos em todo o mundo e
            no Brasil não é diferente.
            <br />
            <br />O acesso à justiça nesta área deve ser promovida por
            profissionais capacitados e com experiência na atividade, seja em
            âmbito judicial ou perante os Conselhos Regionais e Federal de
            Medicina (CRM e CFM).
          </>
        }
      >
        <ContentBox
          py={"30px"}
          bgColor={tokens.colors.brand.cta}
          contentStyle={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Title
            style={{
              marginTop: "32px",
              color: tokens.colors.neutral.highPure,
              width: "100%",
            }}
          >
            Passo a passo para comprovar o erro médico:
          </Title>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)",
              gap: "24px",
              marginTop: "24px",
              width: "100%",
            }}
          >
            {[
              {
                id: 0,
                title: "Entendendo o Erro Médico",
              },
              {
                id: 1,
                title: "Comprovando o Erro Médico",
              },
              {
                id: 2,
                title: "Direitos do Paciente",
              },
              {
                id: 3,
                title: "Processo Legal e Etapas",
              },
            ].map((item) => (
              <Card key={item.id} title={item.title} index={item.id} />
            ))}
          </div>

          <Subtitle
            style={{
              marginTop: "32px",
              color: tokens.colors.neutral.highPure,
              textAlign: "start",
              lineHeight: "1.5",
            }}
          >
            Aqui na CBL Consultoria, entendemos a importância de proteger seus
            direitos e garantir justiça em casos envolvendo negligência médica.
            Nossa equipe de consultores jurídicos especializados está pronta
            para oferecer suporte e orientação durante todo o processo.
          </Subtitle>

          <CtaButton
            style={{
              marginTop: "32px",
              width: "100%",
              maxWidth: "400px",
            }}
            variant="secondary"
            href="#purposeForm"
          >
            Fale conosco!
          </CtaButton>
        </ContentBox>
      </ImageAndText>

      <ImageAndText
        anchor="civil-causes"
        title="CAUSAS CÍVEIS"
        image={img5}
        reverse
        subtitle={
          <>
            Em casos cíveis, é de extrema importância buscar o aconselhamento
            jurídico especializado para alcançar uma resolução justa e
            eficiente. Aqui na CBL Consultoria, compreendemos a complexidade do
            sistema legal e o impacto significativo que uma representação
            adqueada pode ter em seu caso.
            <br />
            <br />
            Veja por que é fundamental contar com um advogado especializado:
            <br />
            <br />
            1. Conhecimento Especializado
            <br />
            <br />
            2. Análise do Caso
            <br />
            <br />
            3. Representação Efetiva
            <br />
            <br />
            4. Estratégias Personalizadas
            <br />
            <br />
            5. Redução de Estresse e Tempo
          </>
        }
      >
        <ContentBox py={"30px"} bgColor={tokens.colors.brand.lightCream}>
          <Title>
            O escritório conta com advogados experientes e grande know-how em
            demandas cíveis para solucionar o seu problema!
          </Title>

          {[
            {
              id: 0,
              title: "Quais causas defendem?",
              description: (
                <>
                  Responsabilidade civil, Contratos, Direito do consumidor,
                  Questões de propriedade e muitas outras!
                  <br />
                  <br />
                  Não subestime a importância de buscar o aconselhamento
                  jurídico especializado em causas cíveis. Nossos consultores
                  jurídicos estão prontos para oferecer a expertise necessária
                  para alcançar uma resolução justa e eficiente em seu caso.
                  Entre em contato conosco hoje mesmo para agendar uma consulta
                  inicial e dar o primeiro passo rumo ao sucesso em sua causa
                  cível.
                </>
              ),
            },
            {
              id: 1,
              title: "Por que contratar uma consultoria Jurídica?",
              description: (
                <>
                  Contar com um apoio legal preventivo é o primeiro passo para
                  evitar complicações relacionadas ao futuro da sua empresa.
                  Todo empreendimento enfrenta questões legais ligadas a
                  contratos, assuntos trabalhistas, questões societárias,
                  tributárias e outras. A violação ou mesmo a falta de
                  conhecimento das leis pode resultar em litígios judiciais,
                  além de multas e penalidades impostas por órgãos de
                  fiscalização.
                  <br />
                  <br />
                  Portanto, é fundamental ter o respaldo de um suporte jurídico
                  especializado em Direito Empresarial, capaz de oferecer
                  orientações sobre as melhores práticas para o seu negócio,
                  prevenindo litígios e futuros desgastes.
                  <br />
                  <br />
                  Muitos empreendedores, especialmente proprietários de pequenas
                  empresas e startups, podem ter dúvidas ao contratar esse tipo
                  de serviço. Considerando que pequenos negócios geralmente têm
                  orçamentos limitados, alguns podem acreditar que vale mais a
                  pena correr o risco de enfrentar problemas no futuro do que
                  pagar para resolver questões agora.
                </>
              ),
            },
          ].map((item) => (
            <Card
              style={{
                marginTop: "24px",
              }}
              key={item.id}
              title={item.title}
              index={item.id}
              description={item.description}
            />
          ))}
        </ContentBox>
      </ImageAndText>

      <ContentBox
        bgColor={tokens.colors.brand.lightCream}
        py={"30px"}
        contentStyle={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)",
          gap: "24px",
        }}
      >
        <div
          style={{
            width: "100%",
          }}
        >
          <HasConsultPeopleChart />
        </div>

        <div
          style={{
            width: "100%",
          }}
        >
          <HasConsultCompanyChart />
        </div>
      </ContentBox>
      <JudicialForm />
    </>
  )
}
export default LegalAdvice
