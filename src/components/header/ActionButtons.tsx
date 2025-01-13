import { FileText, Share2 } from "lucide-react";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";
import React from "react";
import { toast } from "../ui/use-toast";
import html2pdf from 'html2pdf.js';

export const ActionButtons = React.memo(() => {
  const navigate = useNavigate();

  const generatePDF = async () => {
    // Clone the PDF content from printable page
    const printableContent = document.createElement('div');
    printableContent.id = 'pdf-content';
    document.body.appendChild(printableContent);

    // Navigate to print page to get content
    navigate('/print');

    // Wait for content to load
    await new Promise(resolve => setTimeout(resolve, 1000));

    const element = document.getElementById('pdf-content');
    const opt = {
      margin: [10, 10],
      filename: 'curriculo.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { 
        scale: 2,
        useCORS: true,
        letterRendering: true
      },
      jsPDF: { 
        unit: 'mm', 
        format: 'a4', 
        orientation: 'portrait' 
      }
    };

    try {
      const pdf = await html2pdf().set(opt).from(element).output('blob');
      return pdf;
    } catch (error) {
      console.error('Erro ao gerar PDF:', error);
      toast({
        title: "Erro",
        description: "Houve um erro ao gerar o PDF. Tente novamente.",
        variant: "destructive"
      });
      throw error;
    } finally {
      // Clean up
      document.body.removeChild(printableContent);
      navigate('/');
    }
  };

  const handleShare = async () => {
    try {
      const cvUrl = "https://digital-curriculum-mosaic-45.lovable.app/"; // Fixed URL as requested
      const pdf = await generatePDF();
      
      // Create a temporary URL for the PDF
      const pdfUrl = URL.createObjectURL(pdf);
      
      // Prepare WhatsApp message with CV link and PDF instructions
      const message = `Confira meu currículo online: ${cvUrl}\n\nBaixe também a versão PDF na página.`;
      
      // Prepare WhatsApp URL with message
      const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`;
      
      // Open WhatsApp in a new tab
      window.open(whatsappUrl, '_blank');

      toast({
        title: "Compartilhamento iniciado!",
        description: "O WhatsApp será aberto para você compartilhar seu currículo."
      });
    } catch (error) {
      console.error('Erro ao compartilhar:', error);
      toast({
        title: "Erro",
        description: "Houve um erro ao compartilhar. Tente novamente.",
        variant: "destructive"
      });
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
          Compartilhar no WhatsApp
        </Button>
      </div>
    </div>
  );
});

ActionButtons.displayName = 'ActionButtons';
