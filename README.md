# Workflow Automation

🚀 **Workflow Automation** is a smart solution for automating workflows, increasing efficiency, and reducing manual tasks within a system.

## ✨ Key Features

- ⚡ **Process Automation** - Automate repetitive tasks with configurable workflows.
- 🔗 **Easy Integration** - Compatible with various APIs and external systems.
- 🎯 **Interactive UI** - Responsive and user-friendly interface.
- 🛠 **Flexible Customization** - Adapt workflows to fit business needs.
- 🔍 **Monitoring & Logging** - Track and log every process with structured logs.

---

## 📦 Installation

Ensure you have **Node.js** installed on your system.

Clone this repository and navigate to the project directory:
```bash
git clone https://github.com/ivandj0h/workflow.git
cd workflow
```

Install dependencies:
```bash
npm install
# or if using yarn:
yarn install
```

Run the application in development mode:
```bash
npm run dev
# or
yarn dev
```

Access the application at **http://localhost:3000**.

---

## 🛠 Configuration

1. **Environment File (`.env`)** - Create a `.env` file and set environment variables as needed.
2. **Workflow Configuration** - Modify `config/workflow.json` to adjust automation rules and logic.
3. **API Integration** - Add required API keys in the configuration file.
4. **Database Setup (MongoDB & Prisma)** - Configure the database connection.

---

## 🛠 Setting Up Prisma & MongoDB

This project uses **Prisma** as the ORM and **MongoDB** as the database.

### **1️⃣ Configure MongoDB**
If you haven't installed MongoDB, follow the official [MongoDB Installation Guide](https://www.mongodb.com/docs/manual/installation/).

Once installed, start the MongoDB service:
```bash
mongod --dbpath /data/db
```

Or if using **Docker**:
```bash
docker run --name mongodb -d -p 27017:27017 mongo
```

### **2️⃣ Set Up Prisma**
After installing dependencies, initialize Prisma:
```bash
npx prisma init
```

This will generate a `.env` file and a `prisma/schema.prisma` file. Open `.env` and set up your MongoDB connection string:
```env
DATABASE_URL="mongodb://localhost:27017/workflow"
```

Or if using a remote MongoDB service:
```env
DATABASE_URL="mongodb+srv://username:password@cluster.mongodb.net/workflow?retryWrites=true&w=majority"
```

### **3️⃣ Migrate Database Schema**
Run the following command to push the schema to MongoDB:
```bash
npx prisma db push
```

To open the Prisma Studio GUI for database management:
```bash
npx prisma studio
```

---

## 🚀 Deployment

To run the application in **production mode**, use the following command:
```bash
npm run build
npm start
```

If using Docker:
```bash
docker build -t workflow .
docker run -p 3000:3000 workflow
```

---

## 📦 Docker Setup

For easier deployment and scalability, you can use Docker to containerize this application.

### **Dockerfile**
Create a `Dockerfile` in the root directory with the following content:
```dockerfile
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy the rest of the application files
COPY . .

# Build the application
RUN npm run build

# Expose port
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
```

### **Docker Compose**
For multi-container setup, create a `docker-compose.yml` file:
```yaml
version: '3.8'

services:
  workflow:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
    volumes:
      - .:/app
      - /app/node_modules
    restart: always

  mongodb:
    image: mongo
    container_name: mongodb
    ports:
      - "27017:27017"
    volumes:
      - mongodb_data:/data/db
    restart: always

volumes:
  mongodb_data:
```

### **Running with Docker Compose**
To start the application using Docker Compose, run:
```bash
docker-compose up -d
```

To stop the application:
```bash
docker-compose down
```

---

## 🤝 Contribution

We welcome contributions! If you would like to contribute:
1. **Fork** this repository.
2. Create a new branch (`git checkout -b feature-feature-name`).
3. Commit your changes (`git commit -m "Added feature X"`).
4. Push to the branch (`git push origin feature-feature-name`).
5. Submit a **Pull Request**!

Please read **CONTRIBUTING.md** before contributing. 🚀

---

## 📜 License

This project is licensed under the **MIT** license. Please see the [LICENSE](./LICENSE) file for more details.

---

🎉 **Thank you for using Workflow Automation!** Don't forget to ⭐ the repository if you find it useful! 😊

