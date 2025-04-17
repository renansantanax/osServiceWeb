// Base URL
export const osservice = 'http://localhost:8080';

// Endpoints
export const endpoints = {
  criar_chamado: `${osservice}/api/chamados/criar`,
  atualizar_chamado: (id: number | string | number) =>
    `${osservice}/api/chamados/atualizar/${id}`,
  listar_por_perfil: `${osservice}/api/chamados/listar-por-perfil`,
  obter_chamado: (id: number | string | number) =>
    `${osservice}/api/chamados/obter/${id}`,
  encerrar_chamado: `${osservice}/api/chamados/encerrar`,
  listar_mensagem: (id: number | string | number) =>
    `${osservice}/api/chamados/${id}/mensagens/listar`,
  enviar_mensagem: (id: number | string | number) =>
    `${osservice}/api/chamados/${id}/mensagens/enviar`,
  consultar_todos: `${osservice}/api/chamados/consultar-todos`,
  dashboard: `${osservice}/api/chamados/dashboard`,
  dashboard_usuario: (id: number | string | number) =>
    `${osservice}/api/chamados/consultar/status-usuario/${id}`,

  criar_usuario: `${osservice}/api/usuario/criar`,
  auth_usuario: `${osservice}/api/usuario/autenticar`,
  listar_usuarios: `${osservice}/api/usuario/listar`,

  upload_anexo: (id: number | string | number) => `${osservice}/api/chamados/upload-anexos/${id}`
};
