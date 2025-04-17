import React from 'react'
import Image from 'next/image';
import { Button } from '@/components/ui/button';
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
        <div className="
         text-center bg-white p-6 shadow-lg border-l-2 border-r-2 rounded-b-xl border-[#C99A45]">
          <h2 className="text-3xl font-bold mb-10">Nossos Serviços</h2>
          <div className="grid gap-8 md:grid-cols-3">
            <Card className="bg-white p-6 rounded-2xl shadow justify-center gap-2 space-y-8 flex flex-col items-center border border-[#C99A45]">
              <CardHeader className="flex flex-col items-center">
                <CardTitle className="w-[200px] mb-3">🍖 Churrasco Profissional</CardTitle>
                <div className='w-[300px] h-[90px] flex items-start justify-center'>
                <CardDescription>
                  Preparamos diversos tipos de carnes com cortes selecionados, feitos na hora e no ponto ideal. Garantimos sabor e excelência do início ao fim.
                </CardDescription>
                </div>
              </CardHeader>
              <div className='w-[300px] h-[90px]  flex items-start justify-center'>
              <CardContent>
                <p className="text-sm text-gray-500">
                  Nossos churrasqueiros são experientes e utilizam técnicas tradicionais para garantir o melhor sabor e textura das carnes.
                </p>
              </CardContent>
              </div>
              <div className='w-[300px] h-[90px]  flex items-center justify-center'>
              <CardFooter className={"flex justify-center"}>
                <Button className="bg-[#C99A45] hover:bg-orange-600 text-white items-center">
                  Saiba Mais
                </Button>
              </CardFooter>
              </div>
            </Card>
 
            <Card className="bg-white p-6 rounded-2xl shadow justify-center gap-2 space-y-8 flex flex-col items-center border border-[#C99A45]">
              <CardHeader className="flex flex-col items-center">
                <CardTitle className="w-[200px] mb-3">🍳 Cozinheira</CardTitle>
                <div className='w-[300px] h-[90px] flex items-start justify-center'>
                <CardDescription>
                  Acompanhamentos variados e pratos personalizados com ingredientes frescos, temperos caseiros e muito cuidado com cada detalhe.
                </CardDescription>
                </div>
              </CardHeader>
              <div className='w-[300px] h-[90px]  flex items-start justify-center'>
              <CardContent>
                <p className="text-sm text-gray-500">
                  Nossa equipe de cozinha é composta por chefs experientes que garantem qualidade e sabor em cada prato.
                </p>
              </CardContent>
              </div>
              <div className='w-[300px] h-[90px]  flex items-center justify-center'>
              <CardFooter className={"flex justify-center"}>
                <Button className="bg-[#C99A45] hover:bg-orange-600 text-white items-center">
                  Saiba Mais
                </Button>
              </CardFooter>
              </div>
            </Card>
 
            <Card className="bg-white p-6 rounded-2xl shadow justify-center gap-2 space-y-8  flex flex-col items-center border border-[#C99A45]">
              <CardHeader className="flex flex-col items-center">
                <CardTitle className="w-[200px] mb-3">🧑‍🍽️ Serviço de Garçom</CardTitle>
                <div className='w-[300px] h-[90px]  flex items-start justify-center'>
                <CardDescription>
                  Garçons treinados para atender seus convidados com cordialidade, agilidade e atenção, garantindo conforto e organização.
                </CardDescription>
                </div>
              </CardHeader>
              <div className='w-[300px] h-[90px]  flex items-start justify-center'>
              <CardContent>
                <p className="text-sm text-gray-500">
                  Nossa equipe de garçons é treinada para oferecer um atendimento excepcional, garantindo que seus convidados sejam bem tratados.
                </p>
              </CardContent>
              </div>
              <div className='w-[300px] h-[90px] flex items-center justify-center'>
              <CardFooter className={"flex justify-center"}>
                <Button className="bg-[#C99A45] hover:bg-orange-600 text-white items-center">
                  Saiba Mais
                </Button>
              </CardFooter >
              </div>
            </Card>
 
            <Card className="bg-white p-6 rounded-2xl shadow justify-center gap-2 space-y-8 flex flex-col items-center border border-[#C99A45]">
              <CardHeader className="flex flex-col items-center">
                <CardTitle className="w-[200px] mb-3">🧑🍸 Serviço de Barman</CardTitle>
                <div className='w-[300px] h-[90px]  flex items-start justify-center'>
                <CardDescription>
                Barmans experientes para servir drinks com simpatia, agilidade e técnica, criando uma experiência sofisticada e descontraída para seus convidados.
                </CardDescription>
                </div>
              </CardHeader>
              <div className='w-[300px] h-[90px]  flex items-start justify-center'>  
              <CardContent>
                <p className="text-sm text-gray-500">
                  Nossos barmans são capacitados para preparar drinks clássicos e personalizados, garantindo uma experiência única para seus convidados.
                </p>
              </CardContent>
              </div>
              <div className='w-[300px] h-[90px]  flex items-center justify-center'>  
              <CardFooter className={"flex justify-center"}>
                <Button className="bg-[#C99A45] hover:bg-orange-600 text-white">
                  Saiba Mais
                </Button>
              </CardFooter>
              </div>
            </Card>
           
          </div>
        </div>

    
  )
}
