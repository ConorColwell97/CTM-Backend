import express from 'express';
import cors from 'cors';
import therapistRoutes from './Routes/TherapistRoutes.js';
import clientRoutes from './Routes/ClientRoutes.js';
import sessionRoutes from './Routes/SessionRoutes.js';

const server = express();
server.use(cors());
server.use(express.json());
server.use(express.urlencoded());

server.use("/therapists", therapistRoutes);
server.use("/clients", clientRoutes);
server.use("/sessions", sessionRoutes);

server.listen(5000, () => {
    console.log("Server is running on port 5000");
});