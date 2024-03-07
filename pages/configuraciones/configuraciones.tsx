import React, { useState, useEffect } from 'react';
import Layout from '@/app/layout';
import { db } from '@/firebase/firebase';
import { collection, addDoc, getDocs, deleteDoc, doc, updateDoc } from 'firebase/firestore';
import crypto from 'crypto';

interface Administrador {
  id: string;
  nombre: string;
  email: string;
  usuario: string;
  password: string;
}

function Configuraciones() {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [apellidos, setApellidos] = useState('');
  const [password, setPassword] = useState('');
  const [administradores, setAdministradores] = useState<Administrador[]>([]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newAdmin: Administrador = {
      nombre,
      email,
      usuario: apellidos,
      password: hashPassword(password),
    };

    try {
      await addUserDataToFirebase(newAdmin);
      setAdministradores([...administradores, newAdmin]);

      // Limpiar todos los campos después de agregar el administrador
      setNombre('');
      setEmail('');
      setApellidos('');
      setPassword('');
    } catch (error) {
      console.error('Error al agregar datos del usuario a Firebase:', error);
    }
  };

  const addUserDataToFirebase = async (nuevoUsuario: Administrador) => {
    try {
      const docRef = await addDoc(collection(db, 'Usuarios'), nuevoUsuario);
      console.log('Datos del usuario agregados con ID: ', docRef.id);
    } catch (error) {
      console.error('Error al agregar datos del usuario: ', error);
      throw error;
    }
  };

  const handleEliminar = async (id: string) => {
    try {
      await deleteDoc(doc(db, 'Usuarios', id));

      const nuevosAdministradores = administradores.filter((admin) => admin.id !== id);
      setAdministradores(nuevosAdministradores);
    } catch (error) {
      console.error('Error al eliminar el administrador:', error);
    }
  };

  const handleEditar = async (id: string) => {
    try {
      const administradorEditado = administradores.find((admin) => admin.id === id);

      await updateDoc(doc(db, 'Usuarios', id), {
        nombre: nombre || administradorEditado?.nombre,
        email: email || administradorEditado?.email,
        apellidos: apellidos || administradorEditado?.usuario,
        password: hashPassword(password) || administradorEditado?.password,
      });

      const nuevosAdministradores = administradores.map((admin) => {
        if (admin.id === id) {
          return {
            ...admin,
            nombre: nombre || admin.nombre,
            email: email || admin.email,
            apellidos: apellidos || admin.usuario,
            password: hashPassword(password) || admin.password,
          };
        }
        return admin;
      });

      setAdministradores(nuevosAdministradores);
    } catch (error) {
      console.error('Error al editar el administrador:', error);
    }
  };

  const hashPassword = (password: string) => {
    const hashedPassword = crypto.createHash('sha256').update(password).digest('hex');
    return hashedPassword;
  };
  

  useEffect(() => {
    const obtenerAdministradoresDesdeFirebase = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'Usuarios'));
        const administradoresData: Administrador[] = [];

        querySnapshot.forEach((doc) => {
          administradoresData.push({ id: doc.id, ...doc.data() } as Administrador);
        });

        setAdministradores(administradoresData);
      } catch (error) {
        console.error('Error al obtener administradores desde Firebase:', error);
      }
    };

    obtenerAdministradoresDesdeFirebase();
  }, []);

  return (
    <Layout pagina='Configuraciones'>
      <div className="container">
        <div className="flex justify-end mb-4">
          <button
            className="bg-blue-800 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out"
            onClick={() => window.history.back()}
            style={{
              boxShadow: '0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08)',
            }}
          >
            Volver
          </button>
      <style jsx global>
        {`
          /* Estilos globales */
          .container {
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
            border: 1px solid #ccc;
            border-radius: 8px;
            background: #f9f9f9;
          }

          input,
          button[type="submit"] {
            width: calc(100% - 20px);
            margin-bottom: 10px;
            padding: 8px;
            border-radius: 4px;
            border: 1px solid #ccc;
          }
          
          
          button[type="submit"] {
            width: 100%; /* Ocupar todo el ancho disponible */
            margin: 0 auto; /* Centrar horizontalmente */
            margin-bottom: 5px;
            padding: 8px;
            border-radius: 4px;
            border: 1px solid #ccc;
            background: #0D47A1; /* Color azul */
            color: #fff;
            font-size: 16px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
          }
          
          

          button.editar,
button.eliminar {
  width: 45%; /* Ancho ajustado */
  margin-right: 5px; /* Separación entre botones */
  background: #0D47A1; /* Color azul */
  color: #fff;
  font-size: 18px; /* Tamaño de fuente aumentado */
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

table {
  border-collapse: collapse;
  width: 80%;
  table-layout: fixed; /* Añade esta línea */
 
}

th, td {
  border: 1px solid black;
  padding: 8px;
  text-align: left;
  overflow: hidden; /* Añade esta línea */
  white-space: nowrap; /* Añade esta línea */
}
        `}
      </style>

      </div>
      <h2 style={{ textAlign: 'center', fontSize: '2em', fontWeight: 'bold' }}>Perfil Administradores</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nombre">Nombre:</label>
        <input
          type="text"
          id="nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />

          <label htmlFor="apellidos">Apellidos:</label>
          <input
            type="text"
            id="apellidos"
            value={apellidos}
            onChange={(e) => setApellidos(e.target.value)}
            required
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="password">Contraseña:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit">Agregar Administrador</button>
        </form>

        <div>
        <h2 style={{ textAlign: 'center', fontSize: '2em', fontWeight: 'bold' }}>Administradores Agregados</h2>
    <div style={{ overflowX: 'auto' }}>
    <table className="table-center w-full border-collapse border border-gray-300 shadow-lg rounded-center">
        <thead style={{ backgroundColor: '#B1CEE3' }} className="">
             
                <tr>
                  <th>Nombre</th>
                  <th>Apellidos</th>
                  <th>Email</th>
                  <th>Contraseña</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {administradores.map((admin, index) => (
                  <tr key={index}>
                    <td>{admin.nombre}</td>
                    <td>{admin.usuario}</td>
                    <td>{admin.email}</td>
                    <td>{admin.password}</td>
                    <td>
                      <button className="editar" onClick={() => handleEditar(admin.id)}>
                        Editar
                      </button>
                      <button className="eliminar" onClick={() => handleEliminar(admin.id)}>
                        Eliminar
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Configuraciones;
