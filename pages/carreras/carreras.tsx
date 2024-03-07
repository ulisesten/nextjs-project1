import React, { useState, useEffect } from 'react';
import Layout from '@/app/layout';
import { db } from '@/firebase/firebase';
import Link from 'next/link';
import { collection, onSnapshot } from 'firebase/firestore';
import Navbar from '@/Components/nabvar';

function Carreras() {
  const [carreras, setCarreras] = useState([]);

  useEffect(() => {
    const carrerasRef = collection(db, 'Configuracion Carreeras');
    const unsubscribe = onSnapshot(carrerasRef, (querySnapshot) => {
      const carrerasData = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setCarreras(carrerasData);
    });

    return () => unsubscribe();
  }, []);

  const handleInscribirse = (carreraId) => {
    console.log(`Inscribiéndose en la carrera con ID ${carreraId}`);
  };

  return (
    <>
      <Navbar />
      <Layout pagina='Nuestros eventos'>
        <div className=" tex-black min-h-screen" style={{ fontFamily: 'Arial', color: '#3c78f2#', backgroundColor: '#E0E6F3', }}>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded absolute top-0 right-0 mt-4 mr-4"
            onClick={() => window.history.back()}
          >
            Volver
          </button>
          <h1 style={{textAlign: 'center', fontSize: '30px', color: 'black'}}>EVENTOS DISPONIBLES</h1>

          <br />
          <br />
          <br />
          <table className="table-auto w-full border-collapse border border-gray-300 shadow-lg rounded">
            <thead style={{ backgroundColor: '#B1CEE3' }} className="">

              <tr>
                <th className="border px-4 py-2">Nombre</th>
                <th className="border px-4 py-2">Edición</th>
                <th className="border px-4 py-2">Fecha</th>
                <th className="border px-4 py-2">Distancia</th>
                <th className="border px-4 py-2">Tipo Carrera</th>
                <th className="border px-4 py-2">Estado Carrera</th>
                <th className="border px-4 py-2">Costo</th>
                <th className="border px-4 py-2">Responsable</th>
                <th className="border px-4 py-2">Contacto</th>
                <th className="border px-4 py-2">Accion</th>
              </tr>
            </thead>
            <tbody>
              {carreras.map(carrera => (
                <tr key={carrera.id} className="hover:bg-gray-100">
                  <td className="border px-4 py-2">{carrera.nombre}</td>
                  <td className="border px-4 py-2">{carrera.edicion}</td>
                  <td className="border px-4 py-2">{carrera.fecha}</td>
                  <td className="border px-4 py-2">{carrera.distancia} </td>
                  <td className="border px-4 py-2">{carrera.tipocarrera}</td>
                  <td className="border px-4 py-2">{carrera.estadocarrera}</td>
                  <td className="border px-4 py-2">{carrera.costo}</td>
                  <td className="border px-4 py-2">{carrera.responsable}</td>
                  <td className="border px-4 py-2">{carrera.contacto}</td>
                  {/* Add more cells as needed */}
                  <td className="border px-4 py-2 text-center"> {/* Agrega la clase 'text-center' para centrar */}
                    <a href={`/inscripcion/inscripcion`}>
                      <button style={{ backgroundColor: '#007bff', color: '#fff', border: 'none', padding: '5px 10px', cursor: 'pointer', margin: 'auto' }}> {/* Añade 'margin: auto' para centrar */}
                        Inscribirse
                      </button>
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Layout>
    </>
  );
}
export default Carreras;
