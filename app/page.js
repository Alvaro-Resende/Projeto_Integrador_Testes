import Image from "next/image";
import Cabecalho from "./_components/cabecalho";
import Servicos from "./_components/servicos";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center p-5">
      <div className="w-full shadow-2xl rounded-xl flex flex-col mb-10">
          <Cabecalho />
          <Servicos />
      </div>
    </div>
  );
}
