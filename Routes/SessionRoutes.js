import express from 'express';
import { getAllSessions, getSessionByID, getSessionByTherapist, getSessionSessionByClient, addSession, deleteSession, updateTherapist, updateClient, updateNotes, updateDate, updateLength } from "../Controllers/SessionControl.js";
const router = express.Router();

//GET Routes
router.get("/", getAllSessions);
router.get("/id/:id", getSessionByID);
router.get("/therapist/:therapist", getSessionByTherapist);
router.get("/client/:client", getSessionSessionByClient);

//POST Route
router.post("/", addSession);

//DELETE Route
router.delete("/session/:id", deleteSession);

//PATCH Routes
router.patch("/therapist/:id", updateTherapist);
router.patch("/client/:id", updateClient);
router.patch("/notes/:id", updateNotes);
router.patch("/date/:id", updateDate);
router.patch("/len/:id", updateLength);

export default router;