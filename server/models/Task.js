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

  // Setters
  set id(value) {
    this._id = value;
  }

  set name(value) {
    this._name = value;
  }

  set description(value) {
    this._description = value;
  }

  set createdAt(value) {
    this._createdAt = value;
  }

  set updatedAt(value) {
    this._updatedAt = value;
  }

  set status(value) {
    this._status = value;
  }


  toJSON() {
    return {
      id: this._id,
      name: this._name,
      description: this._description,
      createdAt: this._createdAt,
      updatedAt: this._updatedAt,
      status: this._status
    };
  }
}



module.exports = Task