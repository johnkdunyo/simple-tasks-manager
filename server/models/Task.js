class Task {
  constructor(id, name, description, createdAt, updatedAt, status) {
    this._id = id;
    this._name = name;
    this._description = description;
    this._createdAt = createdAt;
    this._updatedAt = updatedAt;
    this._status = status;
  }

  // Getters
  get id() {
    return this._id;
  }

  get name() {
    return this._name;
  }

  get description() {
    return this._description;
  }

  get createdAt() {
    return this._createdAt;
  }

  get updatedAt() {
    return this._updatedAt;
  }

  get status() {
    return this._status;
  }

  getTask() {
    return {
      id: this.id,
      name: this.name,
      description: this.description,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
      status: this.status
    }
  }

  // Setters
  set name(newName) {
    this._name = newName;
  }

  set description(newDescription) {
    this._description = newDescription;
  }

  set createdAt(newCreatedAt) {
    this._createdAt = newCreatedAt;
  }

  set updatedAt(newUpdatedAt) {
    this._updatedAt = newUpdatedAt;
  }

  set status(newStatus) {
    this._status = newStatus;
  }
}

module.exports = Task;
