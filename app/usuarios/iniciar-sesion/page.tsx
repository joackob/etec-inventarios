import { LogoETEC } from "@/app/components/logo-etec";
import { FormatoParaElFormulario } from "./components/formato-para-el-formulario";
import { FormularioParaIniciarSesion } from "./components/formulario-para-iniciar-sesion";

const Page = () => {
  return (
    <FormatoParaElFormulario>
      <LogoETEC />
      <FormularioParaIniciarSesion />
    </FormatoParaElFormulario>
  );
};

export default Page;
