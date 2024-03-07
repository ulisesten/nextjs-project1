import React from 'react';
import Layout from '@/app/layout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/router';

function Acercade() {
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };

  return (
    <Layout pagina='Acercade'>
      <div className="bg-blue-900 text-white py-4 text-center">
        <h1 className="text-2xl font-bold">¡Bienvenido a Carrera Aventura!</h1>
        <p>Descubre el emocionante mundo del atletismo y únete a nosotros para experiencias inolvidables.</p>
      </div>
      <div className="container mx-auto p-4 text-center bg-blue-100">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded absolute top-0 right-0 mt-4 mr-4"
          onClick={handleGoBack}
        >
          <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
          Volver
        </button>
        <h1 className="text-4xl font-bold mb-4 text-blue-900">Acerca de Carrera Aventura</h1>
        <p className="text-lg mb-4 mx-auto max-w-xl">
          Carrera Aventura es una plataforma dedicada a promover el atletismo y el bienestar. Nuestra misión es ofrecer experiencias únicas que inspiren a las personas a superar sus límites y adoptar un estilo de vida activo.
        </p>
        <p className="text-lg mb-4 mx-auto max-w-xl">
          Desde nuestros inicios, hemos organizado eventos de alta calidad que reúnen a atletas de diversas edades y niveles. Creemos en el poder transformador del deporte y estamos comprometidos a hacer una diferencia positiva en la vida de cada individuo.
        </p>
        <img src="/CARRERAS.jpg" alt="Descripción de la imagen" className="mx-auto rounded-full shadow-lg mb-8" style={{ width: '300px', height: '300px' }} />
      </div>
    </Layout>
  );
}

export default Acercade;



