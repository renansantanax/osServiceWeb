// variaveis para configurar os endereços da APIs
export const osservice = 'http://localhost:8080';

//mapeamento de cada endpoint da API
export const endpoints = {
  criar_chamado: `${osservice}/api/chamados/criar`,
  atualizar_chamado: `${osservice}/api/chamados/atualizar`,
  listar_chamado: `${osservice}/api/chamados/listar`,
  encerrar_chamado: `${osservice}/api/chamados/encerrar`,
  criar_usuario: `${osservice}/api/usuario/criar`,
  auth_usuario: `${osservice}/api/usuario/autenticar`,
};
