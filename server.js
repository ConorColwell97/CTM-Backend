import express from 'express';
import cors from 'cors';
import therapistRoutes from './Routes/TherapistRoutes.js';
import clientRoutes from './Routes/ClientRoutes.js';
import sessionRoutes from './Routes/SessionRoutes.js';

const server = express();
server.use(cors({
    origin: process.env.URL,
    credentials: true
}));

server.use(express.json());
server.use(express.urlencoded({ extended: true }));

server.use("/therapists", therapistRoutes);
server.use("/clients", clientRoutes);
server.use("/sessions", sessionRoutes);

const PORT = process.env.PORT || 8080;

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});