import React from 'react';

interface FAQItemProps {
  pregunta: string;
  respuesta: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ pregunta, respuesta }) => {
  return (
    <div className="mb-8 border-b pb-4 lg:w-1/2 lg:pr-8">
      <h3 className="text-xl font-bold mb-2">{pregunta}</h3>
      <p className="text-lg">{respuesta}</p>
    </div>
  );
};

export default FAQItem;
