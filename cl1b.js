module.exports = {
  get: (server, id, callback, isApi = true) => !isApi ? server.get(id, callback) : server.get(`/api/${id}`, callback),
  post: (server, id, callback) => server.post(`/api/${id}`, callback),
  put: (server, id, callback) => server.put(`/api/${id}`, callback),
  delete: (server, id, callback) => server.delete(`/api/${id}`, callback),
  portHook: port => console.log(`Backend is up listening the port ${port} 🎨`)
}