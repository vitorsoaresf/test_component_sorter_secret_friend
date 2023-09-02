import { Formulario } from "../components/Formulario";
import { ListaParticipantes } from "../components/ListaParticipantes";
import { Rodape } from "../components/Rodape";

export const Configuracao = () => {
  return (
    <>
      <section>
        <Formulario />
        <ListaParticipantes />
        <Rodape />
      </section>
    </>
  );
};
