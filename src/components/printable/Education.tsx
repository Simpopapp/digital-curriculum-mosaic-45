import { Separator } from "@/components/ui/separator";

export const Education = () => {
  return (
    <section className="mb-6 md:mb-8 print:mb-6">
      <h2 className="text-xl md:text-2xl font-bold text-primary print:text-gray-800 mb-3 md:mb-4">Formação Acadêmica</h2>
      <Separator className="mb-4 bg-[#403E43] h-[0.5px] opacity-30" />
      
      <div className="space-y-4 md:space-y-6 print:space-y-4">
        <div className="border-l-4 border-accent print:border-gray-400 pl-3 md:pl-4">
          <h3 className="text-lg md:text-xl font-semibold print:text-gray-700">Biomedicina</h3>
          <p className="text-secondary print:text-gray-600 text-sm md:text-base">Universidade UNG – Guarulhos</p>
          <p className="text-xs md:text-sm text-gray-600">7º semestre - Cursando</p>
        </div>

        <div className="border-l-4 border-accent print:border-gray-400 pl-3 md:pl-4">
          <h3 className="text-lg md:text-xl font-semibold print:text-gray-700">Ensino Médio</h3>
          <p className="text-secondary print:text-gray-600 text-sm md:text-base">E. E. Prof Frederico de Barros Brotero</p>
          <p className="text-xs md:text-sm text-gray-600">Completo</p>
        </div>
      </div>
    </section>
  );
};