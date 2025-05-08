import React from 'react';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faPhone, 
  faEnvelope, 
  faGlobe, 
  faUser
} from '@fortawesome/pro-light-svg-icons';

const ContactCard = ({ name, phone, phone1, whatsapp, email, website, photo, vcfFile }) => {
  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <img 
        style={styles.profileImage} 
        src={photo || 'https://tools.intrates.net/images/isologo.png'} 
        alt={`Foto de ${name}`} 
      />
      <div style={styles.name}>{name}</div>
      </div>
      
       {/* Iconos de contacto */}
      <div style={styles.iconsContainer}>
        <FontAwesomeIcon 
          icon={faPhone} 
          style={styles.socialIcon}
        />
        <FontAwesomeIcon 
          icon={faEnvelope} 
          style={styles.socialIcon}
        />
      </div>
      
      

      {/* Detalles de contacto */}
      <div style={styles.detailsCard}>
        {/* Teléfono */}
        <div style={styles.detailItem}>
          <FontAwesomeIcon 
            icon={faPhone} 
            style={{ ...styles.detailIcon, color: '#707070' }} 
          />
          <div style={styles.detailLabel}>Teléfono</div>
          <a href={`tel:${phone}`} style={styles.detailValue}>
            {phone}
          </a>
        </div>

        {/* Teléfono Empresa*/}
        <div style={styles.detailItem}>
          <FontAwesomeIcon 
            icon={faPhone} 
            style={{ ...styles.detailIcon, color: '#707070' }} 
          />
          <div style={styles.detailLabel}>Teléfono Oficina</div>
          <a href={`tel:${phone}`} style={styles.detailValue}>
            {phone1}
          </a>
        </div>

        {/* WhatsApp */}
        {whatsapp && (
          <div style={styles.detailItem}>
            <FontAwesomeIcon 
              icon={faWhatsapp} 
              style={{ ...styles.detailIcon, color: '#707070' }} 
            />
            <div style={styles.detailLabel}>WhatsApp</div>
            <a 
              href={`https://wa.me/${whatsapp.replace(/\D/g, '')}`}
              style={{...styles.detailValue, color: '#000'}}
              target="_blank"
              rel="noopener noreferrer"
            >
              {whatsapp}
            </a>
          </div>
        )}

        {/* Email */}
        <div style={styles.detailItem}>
          <FontAwesomeIcon 
            icon={faEnvelope} 
            style={{ ...styles.detailIcon, color: '#707070' }} 
          />
          <div style={styles.detailLabel}>E-mail</div>
          <a href={`mailto:${email}`} style={styles.detailValue}>
            {email}
          </a>
        </div>

        {/* Website */}
        <div style={styles.detailItem}>
          <FontAwesomeIcon 
            icon={faGlobe} 
            style={{ ...styles.detailIcon, color: '#707070' }} 
          />
          <div style={styles.detailLabel}>Sitio web</div>
          <a 
            href={website.startsWith('http') ? website : `https://${website}`}
            style={styles.detailValue}
            target="_blank"
            rel="noopener noreferrer"
          >
            {website}
          </a>
        </div>
      </div>

      {/* Botón de descarga VCF */}
      <a 
        href={vcfFile} 
        download 
        style={styles.downloadButton}
      >
        <FontAwesomeIcon 
          icon={faUser} 
          style={{ marginRight: '8px' }} 
        />
        Agregar contacto
      </a>
    </div>
  );
};

const styles = {
  container: {
    width: '100%',
    height: '500px',
    position: 'relative',
    background: '#F5F5F5',
    overflow: 'hidden',
    fontFamily: 'Inter, sans-serif',
    minHeight: '800px'
  },
  header: {
    width: '100%',
    height: '35%',
    maxHeight: '319px',
    position: 'absolute',
    background: '#B49746',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  profileIcon: {
    color: 'white',
    fontSize: '80px',
    opacity: '0.3'
  },
  profileImage: {
    width: 150,
    height: 150,
    left: '50%',
    transform: 'translateX(-50%)',
    top: '18%',
    position: 'absolute',
    borderRadius: '50%',
    objectFit: 'cover',
    border: '4px solid white',
    zIndex: 2
  },
  name: {
    width: '100%',
    left: 0,
    top: 'calc(18% + 170px)',
    position: 'absolute',
    textAlign: 'center',
    color: 'white',
    fontSize: '25px',
    fontWeight: 400,
    textShadow: '1px 1px 3px rgba(0,0,0,0.3)',
    zIndex: 1
  },
  iconsContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '50px',
    width: '100%',
    top: 'calc(18% + 7rem)',
    position: 'absolute',
    zIndex: 1
  },
  socialIcon: {
    color: 'black',
    fontSize: '.5rem',
    background: 'rgba(255,255,255)',
    borderRadius: '50%',
    padding: '15px',
    width: '2.5rem',
    height: '2.5rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  detailsCard: {
    width: '85%',
    maxWidth: '342px',
    height: 'auto',
    minHeight: '353px',
    left: '50%',
    transform: 'translateX(-50%)',
    top: '42%',
    position: 'absolute',
    background: 'white',
    borderRadius: '8px',
    padding: '20px',
    boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
  },
  detailItem: {
    marginBottom: '30px',
    position: 'relative',
    paddingLeft: '60px'
  },
  detailIcon: {
    position: 'absolute',
    left: '0.5rem',          
    top: '50%',               
    transform: 'translateY(-50%)', 
    color: '#B49746',
    fontSize: '1rem',
    background: '#F5F5F5',
    borderRadius: '50%',
    width: '1.5rem',
    height: '1.5rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  detailLabel: {
    color: '#707070',
    fontSize: '13px',
    marginBottom: '5px'
  },
  detailValue: {
    color: 'black',
    fontSize: '16px',
    wordBreak: 'break-word',
    textDecoration: 'none',
    display: 'block'
  },
  downloadButton: {
    position: 'absolute',
    bottom: '5%',  
    left: '50%',
    transform: 'translateX(-50%)',
    background: '#B49746',
    color: 'white',
    padding: '15px 30px',
    borderRadius: '5px',
    textDecoration: 'none',
    fontWeight: 'bold',
    border: 'none',
    cursor: 'pointer',
    fontSize: '16px',
    transition: 'all 0.3s ease',
    display: 'flex',
    alignItems: 'center',
    '&:hover': {
      background: '#9a7f3a',
      transform: 'translateX(-50%) scale(1.02)'
    }
  }
};

export default ContactCard;