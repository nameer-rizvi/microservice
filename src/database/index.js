// Database class is for demo purposes only.
class Database {
  constructor() {
    this.store = [];
  }

  add(data) {
    const id = (this.store[this.store.length - 1]?.id || 0) + 1;
    const newDoc = { id, data };
    this.store.push(newDoc);
    return newDoc;
  }

  get(id) {
    return this.store[this.store.findIndex((doc) => doc.id === id)];
  }

  remove(id) {
    const index = this.store.findIndex((doc) => doc.id === id);
    if (index !== -1) this.store.splice(index, 1);
    return { success: index !== -1 };
  }
}

module.exports = new Database();
