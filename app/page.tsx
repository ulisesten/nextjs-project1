import React from 'react';
import Navbar from '@/Components/nabvar';
import FAQItem from './FAQItem';
import Slider from 'react-slick';

const Home = () => {

  const faqs = [
    {
      pregunta: '¿Cómo me registro para una carrera?',
      respuesta: 'Para registrarte en una carrera, visita nuestro sitio web y navega hasta la página de inscripciones. Allí encontrarás un formulario sencillo que te guiará a través del proceso de registro.',
    },
    {
      pregunta: '¿Cuáles son los requisitos para participar?',
      respuesta: 'Los requisitos para participar varían según el evento, pero por lo general incluyen tener una edad mínima, estar en buena condición física y completar el formulario de inscripción correctamente.',
    },
    {
      pregunta: '¿Cómo contacto al equipo de Carrera Aventura?',
      respuesta: 'Puedes ponerte en contacto con nuestro equipo a través del formulario de contacto en nuestro sitio web o enviando un correo electrónico a [dirección de correo electrónico].',
    },
    {
      pregunta: '¿Qué debo hacer en caso de tener una emergencia durante la carrera?',
      respuesta: 'Si experimentas una lesión o emergencia durante la carrera, te recomendamos buscar ayuda de inmediato en uno de nuestros puestos de primeros auxilios o notificar a uno de los voluntarios.',
    },
  ];
  const upcomingEvents = [
    {
      title: 'Carrera ecologica',
      date: '2023-01-15',
      location: 'Campus Coto',
    },

    {
      title: 'Carrera de Montaña',
      date: '2023-02-20',
      location: 'San Vito',
    },

    {
      title: 'Carrera de Montaña',
      date: '2023-02-20',
      location: 'Cerro Chirripó',
    },
  ];
  const carouselImages = [
    "/PIES.png",
    "/25Aniversario.png",
    "/HAHA.png",
    // Agrega más rutas de imágenes según sea necesario
  ];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const halfLength = Math.ceil(faqs.length / 2);
  const faqsLeft = faqs.slice(0, halfLength);
  const faqsRight = faqs.slice(halfLength);

  return (
    <div className="bg-blue-800 text-white min-h-screen text-center">
      <Navbar />
      <div className="container mx-auto py-12 mt-16">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
          ¡Bienvenido a Carrera Aventura!
        </h1>
        <p className="text-lg mb-8">
          Descubre el emocionante mundo del atletismo y únete a nosotros para experiencias inolvidables.
        </p>
        <div className="flex justify-center mb-8">
  {carouselImages.map((image, index) => (
    <img
      key={index}
      src={image}
      alt={`Descripción de la imagen ${index + 1}`}
      className="shadow-lg transition-transform hover:scale-110 carousel-image"
      style={{ width: '350px', height: '250px', borderRadius: '15px', marginRight: '25px' }}
    />
  ))}
</div>

 {/* Sección de Próximos Eventos */}
<div className="mb-8 mx-auto flex items-center justify-center">
<div className="flex justify-center">
  {/* División izquierda */}
  <div className="w-1/2 p-2 flex flex-col">
    {/* Contenido para la mitad izquierda */}
    <h2 className="text-2xl font-bold mb-4">Categorias Femeninas</h2>
    <p className="flex-grow">1. Categoría Junior de 18 a 22 años cumplidos.</p>
    <p className="flex-grow">2. Categoría Mayor de 23 a 45 años cumplidos.</p>
    <p className="flex-grow">3. Veteranos A de 46 a 50 años cumplidos</p>
    <p className="flex-grow">4. Veteranos B de 51 a 55 años cumplidos</p>
    <p className="flex-grow">5. Veteranos C de 56 en adelante.</p>
    {/* Puedes agregar más contenido aquí */}
  </div>

  {/* División derecha */}
  <div className="w-1/2 p-2 flex flex-col">
    {/* Contenido para la mitad derecha */}
    <h2 className="text-2xl font-bold mb-4">Categorias Masculinas</h2>
    <p className="flex-grow">1. Categoría Junior de 18 a 22 años cumplidos.</p>
    <p className="flex-grow">2. Categoría Mayor de 23 a 45 años cumplidos.</p>
    <p className="flex-grow">3. Veteranos A de 46 a 50 años cumplidos</p>
    <p className="flex-grow">4. Veteranos B de 51 a 55 años cumplidos</p>
    <p className="flex-grow">5. Veteranos C de 56 en adelante.</p>
    {/* Puedes agregar más contenido aquí */}
  </div>
</div>


  <div className="text-center">
    <h2 className="text-4xl font-bold mb-4">Próximos Eventos</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      
      {upcomingEvents.map((event, index) => (
        <div
          key={index}
          className="p-6 bg-white bg-opacity-30 rounded-lg shadow-lg text-center event-card">
          <h3 className="text-xl font-bold mb-2">{event.title}</h3>
          <p className="text-lg mb-2">Fecha: {event.date}</p>
          <p className="text-lg">Ubicación: {event.location}</p>
        </div>
      ))}
    </div>
  </div>
</div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          <div className="p-6 bg-white bg-opacity-30 rounded-lg shadow-lg text-center">
            <h2 className="text-2xl font-bold mb-4">Nuestra Misión</h2>
            <p className="text-lg">
              En Carrera Aventura, nos dedicamos a fomentar la salud y el bienestar a través del atletismo. Organizamos eventos de primera categoría que buscan inspirar a las personas a ir más allá de sus límites y adoptar un estilo de vida activo. Creemos en la transformación que el deporte puede brindar a la vida de cada individuo. Esta versión resalta la dedicación de Carrera Aventura y enfatiza el impacto positivo que busca generar en la vida de las personas a través del atletismo.
            </p>
          </div>
          <div className="p-6 bg-white bg-opacity-30 rounded-lg shadow-lg text-center">
            <h2 className="text-2xl font-bold mb-4">Nuestra Visión</h2>
            <p className="text-lg">
              En Carrera Aventura, aspiramos a ser la plataforma líder a nivel mundial en carreras de atletismo. Nos dedicamos a proporcionar experiencias inolvidables que reúnan a atletas de diversas edades y niveles, tanto de empresas grandes como de pequeñas. Creemos que el deporte es un catalizador poderoso para el crecimiento y la colaboración, y estamos comprometidos a facilitar esta transformación en la comunidad empresarial global.
            </p>
      	  </div>
          <div className="flex justify-center">
</div>
  </div>
  <div className="mb-8 text-center">
  <h2 className="text-4xl font-bold mb-4">Preguntas Frecuentes</h2>
  <div className="flex justify-center">
    {/* División izquierda */}
    <div className="w-1/2 p-4">
      <div className="flex flex-col items-center">
        {faqsLeft.map((faq, index) => (
          <FAQItem key={index} pregunta={faq.pregunta} respuesta={faq.respuesta} />
        ))}
      </div>
    </div>

    {/* División derecha */}
    <div className="w-1/2 p-4">
      <div className="flex flex-col items-center">
        {faqsRight.map((faq, index) => (
          <FAQItem key={index} pregunta={faq.pregunta} respuesta={faq.respuesta} />
        ))}
      </div>
    </div>
  </div>
</div>

  </div>
</div>

    
  );
};

export default Home;
