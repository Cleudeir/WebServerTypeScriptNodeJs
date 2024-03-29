export async function authenticateService() {
  function create(body: object, user: object | null) {
    return body;
  }

  function read(query: object, user: object | null) {
    return query;
  }

  function remove(query: object, user: object | null) {
    return query;
  }

  function update(query: object, body: object, user: object | null) {
    return { query, body };
  }

  return { create, read, remove, update };
}
