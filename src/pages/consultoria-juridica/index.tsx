import React from "react"
import { ConfirmIcon } from "@/assets/icons"

import * as C from "@/styles/legalAdvice"
import PurposeForm from "@/components/PurposeForm"
import HeadBanner from "@/components/HeadBanner"
import img2 from "../../assets/png/chaves.png"
import img3 from "../../assets/png/medic.png"
import img4 from "../../assets/png/reunion.png"
import img5 from "../../assets/png/consult.jpg"
import { tokens } from "@/utils/tokens"
import { Card, Subtitle, Title } from "@/components"
import { civelList } from "@/utils/dataObjects"
import ImageAndText from "@/sections/ImageAndText"
import ContentBox from "@/components/ContentBox"
import UnregulatedChart from "@/components/UnregulatedChart"
import Description from "@/components/Description"
import Accordion from "@/components/Accordion"
import CtaButton from "@/components/CtaButton"
import MistakesChart from "@/components/MistakesChart"
import List from "@/components/List"

const LegalAdvice: React.FC = () => {
  return (
    <>
      <HeadBanner
        title="Consultoria juridica"
        color={tokens.colors.brand.light}
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
        children={
          <ContentBox py={"30px"} bgColor={tokens.colors.brand.light}>
            <Subtitle>
              Taxa de imóveis desregularizados no Brasil nos últimos anos
            </Subtitle>

            <UnregulatedChart />

            <Subtitle
              style={{
                marginTop: "60px",
              }}
            >
              Nossa equipe de especialistas altamente qualificados está pronta
              para ajudá-lo a regularizar seu imóvel de maneira eficiente e
              confiável. Confira abaixo o checklist de benefícios ao contar com
              os nossos serviços:
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
            >
              Regularize seu Imóvel
            </CtaButton>
          </ContentBox>
        }
      />

      <ImageAndText
        anchor="medical-error"
        title="ERRO MÉDICO"
        image={img3}
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
        children={
          <ContentBox
            py={"30px"}
            bgColor={tokens.colors.brand.cta}
            contentStyle={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Subtitle
              style={{
                color: tokens.colors.brand.light,
              }}
            >
              Erros médicos no Brasil nos últimos anos
            </Subtitle>
            <MistakesChart />

            <Subtitle
              style={{
                marginTop: "64px",
                color: tokens.colors.brand.light,
              }}
            >
              Aqui na CBL Consultoria, entendemos a importância de proteger seus
              direitos e garantir justiça em casos envolvendo negligência
              médica. Nossa equipe de consultores jurídicos especializados está
              pronta para oferecer suporte e orientação durante todo o processo:
            </Subtitle>

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
              <Card title={item.title} index={item.id} />
            ))}

            <CtaButton
              style={{
                marginTop: "32px",
                width: "100%",
                maxWidth: "400px",
              }}
              variant="secondary"
              href='#purposeForm'
            >
              Fale conosco!
            </CtaButton>
          </ContentBox>
        }
      />

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
            2. Análise do Caso
            <br />
            3. Representação Efetiva
            <br />
            4. Estratégias Personalizadas
            <br />
            5. Redução de Estresse e Tempo
          </>
        }
        children={
          <ContentBox py={"30px"} bgColor={tokens.colors.brand.light}>
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
                    Entre em contato conosco hoje mesmo para agendar uma
                    consulta inicial e dar o primeiro passo rumo ao sucesso em
                    sua causa cível.
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
                    Portanto, é fundamental ter o respaldo de um suporte
                    jurídico especializado em Direito Empresarial, capaz de
                    oferecer orientações sobre as melhores práticas para o seu
                    negócio, prevenindo litígios e futuros desgastes.
                    <br />
                    <br />
                    Muitos empreendedores, especialmente proprietários de
                    pequenas empresas e startups, podem ter dúvidas ao contratar
                    esse tipo de serviço. Considerando que pequenos negócios
                    geralmente têm orçamentos limitados, alguns podem acreditar
                    que vale mais a pena correr o risco de enfrentar problemas
                    no futuro do que pagar para resolver questões agora.
                  </>
                ),
              },
            ].map((item) => (
              <Card
                title={item.title}
                index={item.id}
                description={item.description}
              />
            ))}
          </ContentBox>
        }
      />

      {/* <ImageAndText
        anchor="family-law"
        title="Por que contratar?"
        image={img4}
        subtitle={
          <>
            Em casos cíveis, é de extrema importância buscar o aconselhamento
            jurídico especializado para alcançar uma resolução justa e
            eficiente. Aqui na CBL Consultoria, compreendemos a complexidade do
            sistema legal e o impacto significativo que uma representação
            adqueada pode ter em seu caso. Veja por que é fundamental contar com
            um advogado especializado
          </>
        }
        children={
          <div>
            {civelList.map((item) => (
              <C.CivelListInfoItem key={item.id}>
                <ConfirmIcon />
                <Subtitle style={{ color: "#000" }}>{item.title}</Subtitle>
              </C.CivelListInfoItem>
            ))}
          </div>
        }
      /> */}

      <PurposeForm />
    </>
  )
}
export default LegalAdvice
