import React from "react";
import Image from "next/image";

export default function Cabecalho() {
  return (
    <div className="w-full h-[88px] BG-GRR flex justify-between items-center p-5 bg-[#181C1F] rounded-t-xl">

      <div className="relative h-[85px] w-[100px] ml-3">
        <Image src="/imagens/Logo.png" alt="Logo da lojas" fill className="" />
      </div>

      <div className="[85px] w-[500px] flex items-center gap-3 mr-3">
          <button className="w-[160px] h-[40px] rounded-xl border border-[#BD8F42] text-[#BD8F42] transform transition hover:scale-105 sm:hover:scale-110 font-serif hover:bg-white">Quem Somos ?</button>
          <button className="w-[160px] h-[40px] rounded-xl border border-[#BD8F42] text-[#BD8F42] transform transition hover:scale-105 sm:hover:scale-110 font-serif hover:bg-white">Serviços</button>
          <button className="w-[160px] h-[60px] rounded-xl border bg-[#BD8F42] border-[#BD8F42] text-white  transform text-xl transition hover:scale-105 sm:hover:scale-110 font-serif hover:border-white hover:text-2xl"><span className="drop-shadow-[1px_1px_0px_rgba(0,0,0,1)]">Contratar</span></button>
      </div>
    </div>
  );
}
