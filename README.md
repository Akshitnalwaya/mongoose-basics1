# Mongoose User Model Backend idea

<img width="1174" alt="image" src="https://github.com/user-attachments/assets/04740be3-afcb-47bd-bb75-9252d3830cfb" />

# Mongoose Schema Examples

This repository contains examples of Mongoose schemas for a simple ToDo application with user authentication. It demonstrates best practices for data modeling in MongoDB using Mongoose ODM (Object Document Mapper).

## Contents

- User Schema
- Todo Schema with references
- Explanations of Mongoose concepts
- Implementation details

## Schema Examples

### User Schema

```javascript
import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    // Schema definition goes here
})

export const User = mongoose.model("User", userSchema)
```

### Todo Schema

```javascript
import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
    content: {
        type: String,
        require: true
    },
    complete: {
        type: Boolean,
        default: false
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    subTodos: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "SubTodo"
    }]
}, {timestamps: true})

export const Todo = mongoose.model("Todo", todoSchema)
```

## Key Concepts Explained

1. **Schema Definition**: A schema defines the structure and properties of documents in MongoDB collections
2. **Models**: Mongoose models provide an interface to create, read, update, and delete documents
3. **References**: How to establish relationships between collections using ObjectId references
4. **Timestamps**: Automatic creation of createdAt and updatedAt fields

## MongoDB Collection Naming Convention

When a schema is exported as a model (e.g., `mongoose.model("User", userSchema)`), Mongoose automatically creates a collection with:
- Pluralized name
- All lowercase letters

For example:
- `User` model → `users` collection
- `Todo` model → `todos` collection

## Interview Questions

### Basic Mongoose Questions

1. **What is Mongoose and why do we use it with MongoDB?**
   - Mongoose is an ODM (Object Document Mapper) for MongoDB and Node.js
   - It provides schema validation, relationship management, and middleware capabilities

2. **Why do we use the `new` keyword when creating a schema?**
   - The `new` keyword creates an instance of the mongoose.Schema class
   - It initializes a new schema object with the specified configuration

3. **Explain the difference between Schema and Model in Mongoose.**
   - Schema: Defines the structure of documents (fields, types, validations)
   - Model: Provides an interface to interact with a specific MongoDB collection

### Intermediate Questions

4. **How are Mongoose model names converted to MongoDB collection names?**
   - Model names are automatically pluralized and converted to lowercase
   - Example: `User` becomes `users`, `TodoItem` becomes `todoitems`

5. **Explain how references work in Mongoose using ObjectId.**
   - References use MongoDB's ObjectId type to create relationships between documents
   - The `ref` option specifies which model the ObjectId refers to
   - References need to be populated explicitly using the `.populate()` method

6. **What is the purpose of the timestamps option in a schema?**
   - It automatically adds `createdAt` and `updatedAt` fields to documents
   - These fields are managed by Mongoose and track when documents are created/modified

### Advanced Questions

7. **Describe the difference between embedding and referencing documents in MongoDB.**
   - Embedding: Nesting documents within each other (faster reads, potential duplication)
   - Referencing: Using ObjectIds to connect documents (normalized data, separate documents)

8. **How would you implement one-to-many and many-to-many relationships in Mongoose?**
   - One-to-many: Store array of ObjectIds in the "one" side or reference "one" from "many" side
   - Many-to-many: Array of ObjectIds on both sides or separate join collection

9. **Explain Mongoose middleware (hooks) and provide use cases.**
   - Middleware functions run before/after certain operations (save, validate, remove, etc.)
   - Use cases: Password hashing, validation, logging, updating related documents

10. **How would you handle schema versioning and migrations in a production application?**
    - Using schema options like `versionKey`
    - Creating migration scripts with tools like mongoose-migrate
    - Implementing versioning logic in application code

## Getting Started

To use these schemas:

1. Install dependencies:
```bash
npm install mongoose
```

2. Connect to MongoDB:
```javascript
mongoose.connect('mongodb://localhost:27017/your-database')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));
```

3. Import and use your models:
```javascript
import { User } from './models/User.js';
import { Todo } from './models/Todo.js';

// Create a new user
const newUser = new User({
  // user properties
});

await newUser.save();
```

## License

MIT
