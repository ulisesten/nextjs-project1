import React, { useState, useEffect } from 'react';
import Layout from '@/app/layout';
import { db } from '@/firebase/firebase';
import { getFirestore, collection, onSnapshot } from 'firebase/firestore';

function Historico() {
  const [busqueda, setBusqueda] = useState('');
  const [carreras, setCarreras] = useState([]);

  const [resultados, setResultados] = useState<{
    id: number;
    nombre: string;
    cedula: string;
    posicion: number;
    tiempo: string;
    categoria: string;
  }[]>([]);
  const [hayResultados, setHayResultados] = useState(true);

  const handleBusquedaChange = (e) => {
    setBusqueda(e.target.value);
    if (!e.target.value) {
      setResultados([]);
      setHayResultados(true);
    }
  };

  useEffect(() => {
    const historicosCollection = collection(db, 'Historicos');

    const unsubscribe = onSnapshot(historicosCollection, (snapshot) => {
      const historicosData = snapshot.docs.map((doc) => doc.data());
      setCarreras(historicosData);
    });

    // Limpiar el listener cuando el componente se desmonta
    return () => unsubscribe();
  }, []);

  const handleSearch = () => {
    if (busqueda.trim() !== '') {
      const resultados = carreras.filter(carrera => {
        const { nombre, cedula } = carrera;
        return (
          nombre.toLowerCase().includes(busqueda.toLowerCase()) || 
          cedula.includes(busqueda)
        );
      });

      setResultados(resultados);
      setHayResultados(resultados.length > 0);
    } else {
      setResultados([]);
      setHayResultados(true);
    }
  };

  const renderFilas = () => {
    let filas;
    if (resultados.length > 0) {
      // Ordenar los resultados por posición antes de renderizar
      filas = [...resultados].sort((a, b) => a.posicion - b.posicion);
    } else {
      // Si no hay resultados, renderizar todas las carreras
      filas = [...carreras];
    }

    return filas.map(carrera => (
      <tr key={carrera.id}>
        <td className="p-2 border text-center">{carrera.nombre}</td>
        <td className="p-2 border text-center">{carrera.cedula}</td>
        <td className="p-2 border text-center">{carrera.posicion}</td>
        <td className="p-2 border text-center">{carrera.tiempo}</td>
        <td className="p-2 border text-center">{carrera.categoria}</td>
      </tr>
    ));
  };

  return (
    <Layout pagina='Historico'>
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-4">Historico de Corredores</h2>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded absolute top-0 right-0 mt-4 mr-4"
          onClick={() => window.history.back()}
        >
          Volver
        </button>
        <div className="mb-4 flex items-center">
          <input 
            type="text" 
            placeholder="Buscar por nombre o cédula" 
            value={busqueda} 
            onChange={handleBusquedaChange} 
            className="p-2 border rounded mr-2"
          />
          <button 
            onClick={handleSearch} 
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Buscar
          </button>
        </div>
        {!hayResultados && (
          <div className="text-red-500 font-bold mb-4">
            No se encontraron resultados.
          </div>
        )}
        <table style={{ width: '100%', border: '1px solid #ccc', borderCollapse: 'collapse', marginTop: '20px' }}>
          <thead style={{ backgroundColor: '#eee' }}>
            <tr>
              <th style={thStyle}>Nombre</th>
              <th style={thStyle}>Cédula</th>
              <th style={thStyle}>Posición</th>
              <th style={thStyle}>Tiempo</th>
              <th style={thStyle}>Categoría</th>
            </tr>
          </thead>
          <tbody>
            {renderFilas()}
          </tbody>
        </table>
      </div>
    </Layout>
  );
}

const thStyle = {
  backgroundColor: '#B1CEE3',
  fontWeight: 'bold',
  padding: '8px',
  border: '1px solid #ccc',
};

export default Historico;
