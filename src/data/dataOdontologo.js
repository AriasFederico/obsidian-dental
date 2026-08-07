const CLINIC_NAME = 'Obsidian Dental';
const PHONE_NUMBER = '5491112345678'; // Número sin espacios ni símbolos (+, -, etc.)

const buildWaLink = (message) =>
  `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(message)}`;

export const dataOdontologo = {
  header: {
    clinicName: CLINIC_NAME,
    nav_links: [
      { text: 'Servicios', href: '#services', duration: '.1' },
      { text: 'Reseñas', href: '#reviews', duration: '.4' },
      { text: 'Ubicación', href: '#location', duration: '.7' },
      {
        text: 'Agendar',
        duration: '.9',
        href: buildWaLink('Hola!, me gustaría agendar un turno.'),
      },
    ],
  },

  hero: {
    topSection: 'Odontología de precisión · Polanco, CDMX',
    title: 'La arquitectura', //con affter ' de la sonrisa'
    text: 'Un estudio dental privado donde cada tratamiento se planea en digital antes de tocar un solo diente. Sin ruido, sin prisa, sin dolor.',

    ctas: [
      {
        text: 'AGENDAR POR WHATSAPP',
        href: buildWaLink('Hola!, me gustaría agendar un turno.'),
        variant: 'primary',
      },
      {
        text: 'VER SERVICIOS',
        href: '#services',
        variant: 'secondary',
        icon: 'arrowDown',
      },
    ],
  },

  services: {
    topSection: 'nuestros servicios',
    title: 'Tratamientos',
    text: 'Cada procedimiento inicia con un diagnóstico digital. Escribe por WhatsApp directamente al especialista del tratamiento que te interesa.',

    items: [
      {
        code: '01',
        name: 'Carillas Estéticas',
        desc: 'Porcelana ultradelgada de 0.3 mm diseñada digitalmente para replicar la translucidez del esmalte natural.',
        img: 'https://media.base44.com/images/public/6a738127593d00fa2c219e93/1b2caf35c_generated_image.png',
        cta: buildWaLink('Hola!, quiero reservar una consulta para ....'),
      },
      {
        code: '02',
        name: 'Implantes de Titanio',
        desc: 'Cirugía guiada por escáner 3D con carga inmediata. Precisión submilimétrica en cada colocación.',
        img: 'https://media.base44.com/images/public/6a738127593d00fa2c219e93/f2a170b9a_generated_image.png',
        cta: buildWaLink('Hola!, quiero reservar una consulta para ....'),
      },
      {
        code: '03',
        name: 'Ortodoncia Invisible',
        desc: 'Alineadores transparentes con planeación biomecánica progresiva y control mensual del avance.',
        img: 'https://media.base44.com/images/public/6a738127593d00fa2c219e93/d2532909e_generated_image.png',
        cta: buildWaLink('Hola!, quiero reservar una consulta para ....'),
      },
      {
        code: '04',
        name: 'Blanqueamiento Clínico',
        desc: 'Protocolo con luz LED de espectro frío. Hasta 8 tonos en una sola sesión sin sensibilidad.',
        img: 'https://media.base44.com/images/public/6a738127593d00fa2c219e93/6af9c455e_generated_image.png',
        cta: buildWaLink('Hola!, quiero reservar una consulta para ....'),
      },
      {
        code: '05',
        name: 'Endodoncia Microscópica',
        desc: 'Tratamiento de conductos asistido por microscopio óptico para conservar la máxima estructura dental.',
        img: 'https://media.base44.com/images/public/6a738127593d00fa2c219e93/7658df762_generated_image.png',
        cta: buildWaLink('Hola!, quiero reservar una consulta para ....'),
      },
      {
        code: '06',
        name: 'Diseño de Sonrisa',
        desc: 'Estudio facial digital, simulación previa y arquitectura de proporciones áureas antes de intervenir.',
        img: 'https://media.base44.com/images/public/6a738127593d00fa2c219e93/609bd79dd_generated_image.png',
        cta: buildWaLink('Hola!, quiero reservar una consulta para ....'),
      },
    ],
  },

  about: {
    img: 'https://media.base44.com/images/public/6a738127593d00fa2c219e93/fb05144b8_generated_image.png',
    top_section: 'el estudio',
    title: 'Silencio clínico,', //con affter 'precisión absoluta'
    text: 'Trabajamos con un solo paciente a la vez. Instrumental esterilizado en ciclos individuales, microscopía óptica y planeación digital de cada milímetro. La sensación no es de una clínica: es de un laboratorio privado dedicado a ti.',

    exp: [
      { number: '18', desc: 'Años de experiencia' },
      { number: '4,200+', desc: 'Tratamientos completados' },
      { number: '3D', desc: 'Escaneo intraoral en cada caso' },
    ],
  },

  reviews_section: {
    top_section: 'testimonios',
    title: 'Reseñas de Google',

    reviews: [
      {
        quote:
          'Nunca había sentido tanta calma en un consultorio dental. El resultado de mis carillas es absolutamente natural.',
        author: 'Mariana Ortega',
        stars: 5,
      },
      {
        quote:
          'Me colocaron dos implantes en una sola sesión. Cero dolor y una explicación clarísima de cada paso.',
        author: 'Rodrigo Salas',
        stars: 5,
      },
      {
        quote:
          'El nivel de tecnología es otro mundo. Vi mi sonrisa final simulada antes de empezar el tratamiento.',
        author: 'Ana Lucía Fernández',
        stars: 5,
      },
      {
        quote:
          'Terminé mi ortodoncia invisible en 11 meses. Seguimiento impecable y trato siempre puntual.',
        author: 'Diego Herrera',
        stars: 5,
      },
      {
        quote:
          'Limpieza y blanqueamiento en una visita. Salí con la sensación de haber estado en un spa clínico.',
        author: 'Paulina Ríos',
        stars: 5,
      },
      {
        quote:
          'Le tenía pánico al dentista. Aquí encontré paciencia real y una endodoncia sin una sola molestia.',
        author: 'Javier Mendoza',
        stars: 4,
      },
    ],
    cta: 'https://www.google.com/maps',
  },

  location: {
    top_section: 'Dónde estamos',
    title: 'Ubicación',

    items: [
      {
        icon: 'compass',
        name: 'Location',
        desc: 'Av. Presidente Masaryk 214, Polanco, CDMX',
      },
      {
        icon: 'clock',
        name: 'Horarios',
        desc: 'Lun – Vie · 9:00 a 19:00 · Sáb 9:00 a 14:00',
      },
      { icon: 'tel', name: 'Télefono', desc: '+52 55 1234 5678' },
    ],
    coordenates: `34°56'40.2"S 57°59'40.2"W`,
    cta: 'https://www.google.com/maps',
  },

  cta_section: {
    title: 'Tu transformación',
    text: 'Respondemos en minutos. Cuéntanos qué te preocupa y agendamos tu valoración.',
    cta: {
      iconLeft: 'cta',
      text: 'ESCRIBIR POR WHATSAPP',
      cta: buildWaLink('Hola!, quiero agendar un turno.'),
    },
  },

  whatsAppButton: {
    text: 'WHATSAPP',
    cta: buildWaLink('Hola!, me gustaría agendar un turno'),
  },

  footer: {
    name: CLINIC_NAME,
  },
};
