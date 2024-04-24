import { PDFViewer } from "@react-pdf/renderer";
import Paragraph from "../components/Paragraph";
import PdfDocument from "../components/PdfDocument";

const PdfPage = ({content}) => {
    return (
        <>           
            <PDFViewer width={"100%"} height={"700px"}><PdfDocument  content={content}/></PDFViewer>
            <a href="/" >Go Home</a>

        </>
    )
}

export default PdfPage;