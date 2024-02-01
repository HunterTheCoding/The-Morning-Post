import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import "./Pdf.css"

type Props = {
  rootElementId: string;
  downloadFileName: string;
};

const Pdf: React.FC<Props> = ({ rootElementId, downloadFileName }) => {

  const downloadFileDocument = () => {
    console.log("download...........");
    
    const input = document.getElementById(rootElementId);
    if (!input) {
      return;
    }

    html2canvas(input)
    .then((canvas) => {
       const imgData = canvas.toDataURL("image/png");
       const pdf = new jsPDF("p", "pt", "a4");
       pdf.addImage(imgData, 'PNG', 0, 0, pdf.internal.pageSize.getWidth(), pdf.internal.pageSize.getHeight());
       pdf.save(`${downloadFileName}.pdf`);
    })

 
  };

const Pdf = () => {
  return (
    <div>
      
    </div>
  );
};

export default Pdf;