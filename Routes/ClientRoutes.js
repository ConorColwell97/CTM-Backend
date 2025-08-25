import express from 'express';
import { getAllClients, getClient, addClient, deleteClient, updateName, updateEmail, updatePhoneNumber, updateRegularity } from "../Controllers/ClientControl.js";
const router = express.Router();

//GET Routes
router.get("/", getAllClients);
router.get("/name/:name", getClient);

//POST Route
router.post("/", addClient);

//DELETE Route
router.delete("/name/:name", deleteClient);

//PATCH Routes
router.patch("/name/:name", updateName);
router.patch("/email/:email", updateEmail);
router.patch("/number/:number", updatePhoneNumber);
router.patch("/reg/:reg", updateRegularity);

export default router;