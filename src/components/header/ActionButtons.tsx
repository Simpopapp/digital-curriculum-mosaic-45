import { FileText, Share2 } from "lucide-react";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";
import React from "react";
import { toast } from "../ui/use-toast";

export const ActionButtons = React.memo(() => {
  const navigate = useNavigate();

  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: 'Currículo - Pamela Leticia',
          url: window.location.href
        });
      } else {
        await navigator.clipboard.writeText(window.location.href);
        toast({
          title: "Link copiado!",
          description: "O link do currículo foi copiado para sua área de transferência."
        });
      }
    } catch (error) {
      console.error('Erro ao compartilhar:', error);
    }
  };

  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold">Objetivos</h3>
      <p className="mb-4">Auxiliar / Jovem Aprendiz</p>
      <div className="flex flex-wrap gap-2">
        <Button 
          variant="outline" 
          className="bg-white/10 hover:bg-white/20 text-white border-white/20"
          onClick={() => navigate('/print')}
        >
          <FileText className="mr-2 h-4 w-4" />
          Versão para Impressão
        </Button>
        <Button 
          variant="outline" 
          className="bg-white/10 hover:bg-white/20 text-white border-white/20"
          onClick={() => navigate('/print')}
        >
          <FileText className="mr-2 h-4 w-4" />
          Versão PDF
        </Button>
        <Button 
          variant="outline" 
          className="bg-white/10 hover:bg-white/20 text-white border-white/20"
          onClick={handleShare}
        >
          <Share2 className="mr-2 h-4 w-4" />
          Compartilhar
        </Button>
      </div>
    </div>
  );
});

ActionButtons.displayName = 'ActionButtons';