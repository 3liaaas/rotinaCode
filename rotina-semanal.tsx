import React from 'react';

const RotinaVisual = () => {
  const rotinaSemana = [
    { horario: "6h30 - 7h00", atividade: "Acordar e preparação matinal", tipo: "pessoal" },
    { horario: "7h00 - 9h00", atividade: "Academia (treino + deslocamento)", tipo: "academia" },
    { horario: "9h00 - 9h30", atividade: "Banho e lanche pós-treino", tipo: "pessoal" },
    { horario: "9h30 - 11h00", atividade: "Estudos (1h30 focado)", tipo: "estudo" },
    { horario: "11h00 - 12h00", atividade: "Almoço e preparação", tipo: "pessoal" },
    { horario: "12h00 - 12h45", atividade: "Deslocamento para o trabalho", tipo: "trabalho" },
    { horario: "13h00 - 22h00", atividade: "Trabalho", tipo: "trabalho" },
    { horario: "22h00 - 22h45", atividade: "Volta para casa", tipo: "trabalho" },
    { horario: "22h45 - 00h00", atividade: "Jantar e descompressão", tipo: "pessoal" },
    { horario: "00h00 - 6h30", atividade: "Sono (6h30)", tipo: "sono" }
  ];

  const rotinaSabado = [
    { horario: "7h30 - 9h00", atividade: "Acordar e academia", tipo: "academia" },
    { horario: "9h00 - 10h00", atividade: "Banho e preparação", tipo: "pessoal" },
    { horario: "10h00 - 14h00", atividade: "Trabalho", tipo: "trabalho" },
    { horario: "14h00 em diante", atividade: "Livre (descanso, lazer, estudos)", tipo: "livre" }
  ];

  const rotinaDomingo = [
    { horario: "Flexível", atividade: "Descanso, recuperação, lazer e estudos complementares", tipo: "livre" }
  ];

  const getCorTipo = (tipo) => {
    const cores = {
      pessoal: "bg-blue-100 border-blue-300",
      academia: "bg-green-100 border-green-300",
      estudo: "bg-purple-100 border-purple-300",
      trabalho: "bg-orange-100 border-orange-300",
      sono: "bg-indigo-100 border-indigo-300",
      livre: "bg-pink-100 border-pink-300"
    };
    return cores[tipo] || "bg-gray-100 border-gray-300";
  };

  const Tabela = ({ titulo, dados }) => (
    <div className="mb-8">
      <h3 className="text-xl font-bold mb-3 text-gray-800">{titulo}</h3>
      <div className="overflow-hidden rounded-lg border-2 border-gray-300">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-4 py-3 text-left font-semibold text-gray-700 border-b-2 border-gray-300">Horário</th>
              <th className="px-4 py-3 text-left font-semibold text-gray-700 border-b-2 border-gray-300">Atividade</th>
            </tr>
          </thead>
          <tbody>
            {dados.map((item, index) => (
              <tr key={index} className={`${getCorTipo(item.tipo)} border-b border-gray-200`}>
                <td className="px-4 py-3 font-medium text-gray-700">{item.horario}</td>
                <td className="px-4 py-3 text-gray-700">{item.atividade}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  const Legenda = () => (
    <div className="mt-8 p-4 bg-gray-50 rounded-lg border-2 border-gray-300">
      <h4 className="font-bold mb-3 text-gray-800">Legenda de Cores:</h4>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-blue-100 border-2 border-blue-300 rounded"></div>
          <span className="text-sm text-gray-700">Pessoal</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-green-100 border-2 border-green-300 rounded"></div>
          <span className="text-sm text-gray-700">Academia</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-purple-100 border-2 border-purple-300 rounded"></div>
          <span className="text-sm text-gray-700">Estudos</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-orange-100 border-2 border-orange-300 rounded"></div>
          <span className="text-sm text-gray-700">Trabalho</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-indigo-100 border-2 border-indigo-300 rounded"></div>
          <span className="text-sm text-gray-700">Sono</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-pink-100 border-2 border-pink-300 rounded"></div>
          <span className="text-sm text-gray-700">Livre</span>
        </div>
      </div>
    </div>
  );

  const Resumo = () => (
    <div className="mt-6 p-4 bg-yellow-50 rounded-lg border-2 border-yellow-300">
      <h4 className="font-bold mb-2 text-gray-800">📊 Resumo Semanal:</h4>
      <ul className="space-y-1 text-sm text-gray-700">
        <li>• <strong>Sono:</strong> 6h30 por noite (dias de semana)</li>
        <li>• <strong>Estudos:</strong> 1h30/dia (seg-sex) = 7h30/semana mínimo</li>
        <li>• <strong>Academia:</strong> 5-6x por semana</li>
        <li>• <strong>Trabalho:</strong> 49h/semana</li>
      </ul>
    </div>
  );

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white">
      <h1 className="text-3xl font-bold mb-2 text-center text-gray-800">Minha Rotina Semanal</h1>
      <p className="text-center text-gray-600 mb-8">Trabalho • Estudos • Academia • Descanso</p>
      
      <Tabela titulo="Segunda a Sexta-feira" dados={rotinaSemana} />
      <Tabela titulo="Sábado" dados={rotinaSabado} />
      <Tabela titulo="Domingo" dados={rotinaDomingo} />
      
      <Legenda />
      <Resumo />
      
      <div className="mt-6 p-4 bg-blue-50 rounded-lg border-2 border-blue-300">
        <h4 className="font-bold mb-2 text-gray-800">💡 Dicas para o Sucesso:</h4>
        <ul className="space-y-1 text-sm text-gray-700">
          <li>• Prepare roupa da academia e materiais de estudo na noite anterior</li>
          <li>• Use o domingo para meal prep da semana</li>
          <li>• Respeite o horário de dormir (00h00)</li>
          <li>• Ajuste conforme necessário, mas mantenha a consistência</li>
        </ul>
      </div>
    </div>
  );
};

export default RotinaVisual;