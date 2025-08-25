import express from 'express';
import { getAllSessions, getSession, addSession, deleteSession, updateTherapist, updateClient, updateNotes, updateDate, updateLength } from "../Controllers/SessionControl.js";
const router = express.Router();

//GET Routes
router.get("/", getAllSessions);
router.get("/therapist/:therapist", getSession);

//POST Route
router.post("/", addSession);

//DELETE Route
router.delete("/therapist/:therapist", deleteSession);

//PATCH Routes
router.patch("/therapist/:therapist", updateTherapist);
router.patch("/client/:client", updateClient);
router.patch("/notes/:notes", updateNotes);
router.patch("/date/:date", updateDate);
router.patch("/len/:len", updateLength);

export default router;