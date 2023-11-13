// import React from "react";
// import { ClerkProvider } from "@clerk/nextjs";
 
// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en">
//       <head>
//         <title>Next.js 13 with Clerk</title>
//       </head>
//       <ClerkProvider>
//         <body>{children}</body>
//       </ClerkProvider>
//     </html>
//   );
// }



import React, { useState } from 'react';
import axios from 'axios';
import { ClerkProvider } from "@clerk/nextjs";

const Formulario = () => {
  const [formValues, setFormValues] = useState({
    nomeMae: '',
    dataSaidaEmprego: '',
    dataNascimentoBebe: '',
    matriculaCertidao: '',
    dataRegistro: '',
    contribuinteIndividual: false,
    dataContribuicao: '',
    rua: '',
    numero: '',
    bairro: '',
    cep: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validar campos obrigatórios

    const errorsObj = {};
    if (!formValues.nomeMae) {
      errorsObj.nomeMae = 'Por favor, informe o nome da mãe.';
    }
    if (!formValues.dataSaidaEmprego) {
      errorsObj.dataSaidaEmprego = 'Por favor, informe a data de saída do emprego.';
    }
    if (!formValues.dataNascimentoBebe) {
      errorsObj.dataNascimentoBebe = 'Por favor, informe a data de nascimendo do bebê.';
    }
    if (!formValues.rua) {
      errorsObj.rua = 'Por favor, informe o Logradouro(rua).';
    }
    if (!formValues.numero) {
      errorsObj.numero = 'Por favor, informe o número do imóvel.';
    }
    if (!formValues.bairro) {
      errorsObj.bairro = 'Por favor, informe o bairro.';
    }
    if (!formValues.cep) {
      errorsObj.cep = 'Por favor, informe o CEP';
    }  


    if (Object.keys(errorsObj).length > 0) {
      setErrors(errorsObj);
      return;
    }

    try {
      const response = await axios.post('http://localhost:3000/api/auxilioMaternidade', formValues);

      console.log('Resposta da API:', response.data);
    } catch (error) {
      console.error('Erro ao enviar dados:', error);
    }
  };

  return (
    <form className="max-w-md mx-auto mt-8" onSubmit={handleSubmit}>
    <ClerkProvider>
      <div className="mb-4">
        <label htmlFor="nomeMae" className="block text-sm font-medium text-gray-600">
          Nome da Mãe
        </label>
        <input
          type="text"
          id="nomeMae"
          name="nomeMae"
          className={`mt-1 p-2 border rounded-md w-full ${errors.nomeMae ? 'border-red-500' : ''
            }`}
          value={formValues.nomeMae}
          onChange={handleChange}
        />
        {errors.nomeMae && <p className="text-red-500 text-sm mt-1">{errors.nomeMae}</p>}
      </div>
      <div className="mb-4">
        <label htmlFor="dataSaidaEmprego" className="block text-sm font-medium text-gray-600">
          Data Saída Emprego
        </label>
        <input
          type="datetime-local"
          id="dataSaidaEmprego"
          name="dataSaidaEmprego"
          className={`mt-1 p-2 border rounded-md w-full ${errors.dataSaidaEmprego ? 'border-red-500' : ''
            }`}
          value={formValues.dataSaidaEmprego}
          onChange={handleChange}
        />
        {errors.dataSaidaEmprego && (
          <p className="text-red-500 text-sm mt-1">{errors.dataSaidaEmprego}</p>
        )}
      </div>

      <div className="mb-4">
        <label htmlFor="dataNascimentoBebe" className="block text-sm font-medium text-gray-600">
          Data de Nascimento do bebê
        </label>
        <input
          type="text"
          id="dataNascimentoBebeMae"
          name="dataNascimentoBebe"
          className={`mt-1 p-2 border rounded-md w-full ${errors.dataNascimentoBebe ? 'border-red-500' : ''
            }`}
          value={formValues.dataNascimentoBebe}
          onChange={handleChange}
        />
        {errors.dataNascimentoBebe && <p className="text-red-500 text-sm mt-1">{errors.dataNascimentoBebe}</p>}
      </div>

      <div className="mb-4">
        <label htmlFor="rua" className="block text-sm font-medium text-gray-600">
          Rua
        </label>
        <input
          type="text"
          id="rua"
          name="rua"
          className={`mt-1 p-2 border rounded-md w-full ${errors.rua ? 'border-red-500' : ''
            }`}
          value={formValues.rua}
          onChange={handleChange}
        />
        {errors.rua && (
          <p className="text-red-500 text-sm mt-1">{errors.rua}</p>
        )}
      </div>

      <div className="mb-4">
        <label htmlFor="bairro" className="block text-sm font-medium text-gray-600">
          Bairro
        </label>
        <input
          type="text"
          id="bairro"
          name="bairro"
          className={`mt-1 p-2 border rounded-md w-full ${errors.bairro ? 'border-red-500' : ''
            }`}
          value={formValues.rua}
          onChange={handleChange}
        />
        {errors.bairro && (
          <p className="text-red-500 text-sm mt-1">{errors.bairro}</p>
        )}
      </div>      <div className="mb-4">
        <label htmlFor="cep" className="block text-sm font-medium text-gray-600">
          CEP
        </label>
        <input
          type="text"
          id="cep"
          name="cep"
          className={`mt-1 p-2 border rounded-md w-full ${errors.cep ? 'border-red-500' : ''
            }`}
          value={formValues.cep}
          onChange={handleChange}
        />
        {errors.cep && (
          <p className="text-red-500 text-sm mt-1">{errors.cep}</p>
        )}
      </div>
      </ClerkProvider>

      <button type="submit" className="bg-blue-500 text-white p-2 rounded-md">
        Enviar
      </button>
    </form>
  );
};

export default Formulario;