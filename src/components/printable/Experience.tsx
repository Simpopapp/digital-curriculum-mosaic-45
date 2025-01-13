import { Separator } from "@/components/ui/separator";

export const Experience = () => {
  return (
    <section className="mb-6 md:mb-8 print:mb-6">
      <h2 className="text-xl md:text-2xl font-bold text-primary print:text-gray-800 mb-3 md:mb-4">Experiência Profissional</h2>
      <Separator className="mb-4 bg-[#403E43] h-[0.5px] opacity-30" />
      
      <div className="space-y-6 md:space-y-8 print:space-y-6">
        <div className="border-l-4 border-accent print:border-gray-400 pl-3 md:pl-4">
          <h3 className="text-lg md:text-xl font-semibold print:text-gray-700">Decora flores artificiais</h3>
          <p className="text-secondary print:text-gray-600 text-sm md:text-base">Jovem aprendiz</p>
          <p className="text-xs md:text-sm text-gray-600">novembro/2020 a dezembro/2021</p>
          <ul className="mt-2 list-disc list-inside text-gray-700 print:text-gray-600 text-sm md:text-base">
            <li>Edição de imagens</li>
            <li>Publicação de anúncios</li>
            <li>Atendimento a perguntas de clientes pelo mercado livre</li>
          </ul>
        </div>

        <div className="border-l-4 border-accent print:border-gray-400 pl-3 md:pl-4">
          <h3 className="text-lg md:text-xl font-semibold print:text-gray-700">Padaria Santa Emília</h3>
          <p className="text-secondary print:text-gray-600 text-sm md:text-base">Atendente e caixa</p>
        </div>
      </div>
    </section>
  );
};