# Mongoose User Model Backend idea

<img width="1174" alt="image" src="https://github.com/user-attachments/assets/04740be3-afcb-47bd-bb75-9252d3830cfb" />

# Mongoose User Model

A concise **README.md** for defining and understanding a Mongoose `User` schema in Node.js.

## Table of Contents

1. [Overview](#overview)  
2. [Usage](#usage)  
3. [Schema Definition](#schema-definition)  
4. [Field Options Explained](#field-options-explained)  
5. [Why These Patterns?](#why-these-patterns)  
6. [Interview Questions](#interview-questions)  

---

## Overview

This README covers:

- **What** a Mongoose schema is.  
- **How** to define and export a `User` model.  
- **Why** common options and methods are used.  
- A list of **interview questions** (questions only).

## Usage

1. **Import Mongoose:**

   ```js
   import mongoose from 'mongoose';


export const User = mongoose.model('User', userSchema);
export const User = mongoose.model('User', userSchema);


import { User } from './models/User.js';

// Example:
const newUser = await User.create({
  username: 'akshit',
  email: 'akshit@example.com',
  password: 'securepassword123'
});


Field Options Explained
type: Specifies the JavaScript data type (String, Number, etc.).

required: Ensures the field is mandatory; supports custom error messages.

lowercase: Automatically converts the input string to lowercase.

unique: Creates a unique index to prevent duplicates (note: not full validation).

timestamps: Automatically adds createdAt and updatedAt fields to documents.

Why These Patterns?
new mongoose.Schema(): Creates a schema instance with defined structure and options.

Automatic Collection Naming: mongoose.model('User', ...) stores documents in the users collection (lowercased and pluralized).

Validation + Indexing: Enforces input rules (required) and prevents duplication (unique).

Timestamps: Simplifies creation/update time tracking with no extra coding.

Interview Questions
Why use the new keyword when creating a Mongoose schema?

If the model is named User, what collection name does Mongoose use, and why?

What is the role of the type option in a schema field?

How can you customize the error message for a required field?

What does the unique option do, and what are its potential pitfalls?

How does the lowercase option affect input data?

What fields are added by setting { timestamps: true }?

What's the difference between instance methods and static methods on a schema?

How do you define virtual fields in Mongoose?

What are pre and post hooks (middleware) in Mongoose, and when might you use them?

How do you handle validation errors programmatically?

How do you create and use indexes in Mongoose schemas?

How do you reference another document (populate) in a schema?

What are discriminators, and when would you use them?

How do you execute a lean query, and why use it?

Can you override the default _id field; if so, how?
