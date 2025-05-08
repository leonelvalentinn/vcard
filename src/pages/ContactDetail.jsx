import { useParams } from "react-router-dom";
import ContactCard from "../components/contactcard";

const contacts = {
  ullises: {
    name: "Ullises Pedroza",
    phone: "5544818142",
    phone1: "5577745180",
    whatsapp: "+5215544818142",
    email: "upedroza@scatena.com.mx",
    website: "www.scatena.com.mx",
    photo: "https://tools.intrates.net/images/isologo.png",
    vcfFile: "/assets/ullises.vcf",
  },

};

function ContactDetail() {
  const { id } = useParams();
  const contact = contacts[id];

  if (!contact) return <p>Contacto no encontrado</p>;

  return (
    <div style={{ 
      padding: "0",
      maxWidth: "500px",
      margin: "0 auto",
      height: "100vh",
      boxSizing: "border-box"
    }}>
      <ContactCard {...contact} />
    </div>
  );
}

export default ContactDetail;
