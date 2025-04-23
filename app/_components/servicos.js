import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { GiMeat } from "react-icons/gi";
import { GiCook } from "react-icons/gi";
import { FaConciergeBell } from "react-icons/fa";
import { GiMartini } from "react-icons/gi";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Servicos() {
  return (
    <div
      className="
         text-center bg-white p-6 shadow-lg border-l-2 border-r-2 border-b-2 rounded-b-xl border-[#C99A45]"
    >
      <h2 className="text-3xl font-bold mb-10">Nossos Serviços</h2>

      <div className="w-full flex justify-center items-center gap-5 flex-wrap">
        <Card className="bg-white w-[340px] h-[420px] p-2 rounded-2xl shadow justify-center space-y-5 flex flex-col items-center border border-[#C99A45] ">
          <CardHeader className="flex flex-col items-center">
            <CardTitle className="flex justify-center items-center gap-2">
              <GiMeat className="text-4xl text-[#CA5010]" />{" "}
              <span className="italic">Churrasco Profissional</span>
            </CardTitle>
          </CardHeader>

          <CardContent>
            <p className="text-sm text-gray-500 h-[200px] w-[250px] text-justify">
              Preparamos diversos tipos de carnes com cortes selecionados,
              feitos na hora e no ponto ideal. Garantimos sabor e excelência do
              início ao fim. Nossos churrasqueiros são experientes e utilizam
              técnicas tradicionais para garantir o melhor sabor e textura das
              carnes.
            </p>
          </CardContent>

            <CardFooter className={"flex justify-center"}>
              <Button className="bg-[#C99A45] hover:bg-orange-600 text-white items-center">
                Saiba Mais
              </Button>
            </CardFooter>

        </Card>

        <Card className="bg-white w-[340px] h-[420px] p-2 rounded-2xl shadow justify-center space-y-5 flex flex-col items-center border border-[#C99A45]">
          <CardHeader className="flex flex-col items-center">
            <CardTitle className="flex justify-center items-center gap-2">
              <GiCook className="text-4xl text-gray-300 drop-shadow-[2px_2px_0px_rgba(0,0,0,2)]" />{" "}
              <span className="italic">Cozinheira</span>
            </CardTitle>
          </CardHeader>

          <CardContent>
            <p className="text-sm text-gray-500 h-[200px] w-[250px] text-justify">
              Acompanhamentos variados e pratos personalizados com ingredientes
              frescos, temperos caseiros e muito cuidado com cada detalhe. Nossa
              equipe de cozinha é composta por chefs experientes que garantem
              qualidade e sabor em cada prato.
            </p>
          </CardContent>

          
            <CardFooter className={"flex justify-center"}>
              <Button className="bg-[#C99A45] hover:bg-orange-600 text-white items-center">
                Saiba Mais
              </Button>
            </CardFooter>
          
        </Card>

        <Card className="bg-white w-[340px] h-[420px] p-2 rounded-2xl shadow justify-center space-y-5  flex flex-col items-center border border-[#C99A45]">
          <CardHeader className="flex flex-col items-center">
            <CardTitle className="flex justify-center items-center gap-2">
              <FaConciergeBell className="text-4xl text-gray-600 " />{" "}
              <span className="italic">Serviço de Garçom</span>
            </CardTitle>
          </CardHeader>

          <CardContent>
            <p className="text-sm text-gray-500 h-[200px] w-[250px]  text-justify">
              Garçons treinados para atender seus convidados com cordialidade,
              agilidade e atenção, garantindo conforto e organização. Nossa
              equipe de garçons é treinada para oferecer um atendimento
              excepcional, garantindo que seus convidados sejam bem tratados.
            </p>
          </CardContent>

          <div className="w-[300px] h-[90px] flex items-center justify-center">
            <CardFooter className={"flex justify-center"}>
              <Button className="bg-[#C99A45] hover:bg-orange-600 text-white items-center">
                Saiba Mais
              </Button>
            </CardFooter>
          </div>
        </Card>

        <Card className="bg-white w-[340px] h-[420px] p-2 rounded-2xl shadow justify-center space-y-5 flex flex-col items-center border border-[#C99A45]">
          <CardHeader className="flex flex-col items-center">
            <CardTitle className="flex justify-center items-center gap-2">
              <GiMartini className="text-4xl" />{" "}
              <span className="italic">Serviço de Barman</span>
            </CardTitle>
          </CardHeader>

          <CardContent>
            <p className="text-sm text-gray-500 h-[200px] w-[250px] text-justify">
              Barmans experientes para servir drinks com simpatia, agilidade e
              técnica, criando uma experiência sofisticada e descontraída para
              seus convidados. Nossos barmans são capacitados para preparar
              drinks clássicos e personalizados, garantindo uma experiência
              única para seus convidados.
            </p>
          </CardContent>

          <div className="w-[300px] h-[90px]  flex items-center justify-center">
            <CardFooter className={"flex justify-center"}>
              <Button className="bg-[#C99A45] hover:bg-orange-600 text-white">
                Saiba Mais
              </Button>
            </CardFooter>
          </div>
        </Card>
      </div>
    </div>
  );
}
