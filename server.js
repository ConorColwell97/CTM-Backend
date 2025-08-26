import express from 'express';
import cors from 'cors';
import therapistRoutes from './Routes/TherapistRoutes.js';
import clientRoutes from './Routes/ClientRoutes.js';
import sessionRoutes from './Routes/SessionRoutes.js';

const server = express();
server.use(cors({
    origin: "*",
    methods: ["GET", "POST", "PATCH", "PUT", "DELETE"],
    credentials: true
}));

server.use(express.json());
server.use(express.urlencoded({ extended: true }));

server.use("/therapists", therapistRoutes);
server.use("/clients", clientRoutes);
server.use("/sessions", sessionRoutes);

const PORT = process.env.PORT;

server.listen(PORT, "0.0.0.0", () => {
    console.log(`Server is running on port ${PORT}`);
});