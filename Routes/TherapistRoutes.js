import express from 'express';
import {getAllTherapists, getTherapist, addTherapist, deleteTherapist, updateName, updateTitle, updateEmail, updateLocation, updateYears, updateAvailability } from "../Controllers/TherapistControl.js";
const router = express.Router();

//GET Routes
router.get("/", getAllTherapists);
router.get("/name/:name", getTherapist);

//POST Route
router.post("/", addTherapist);

//DELETE Route
router.delete("/name/:name", deleteTherapist);

//PATCH Routes
router.patch("/name/:name", updateName);
router.patch("/title/:title", updateTitle);
router.patch("/email/:email", updateEmail);
router.patch("/location/:location", updateLocation);
router.patch("/years/:years", updateYears);
router.patch("/avail/:avail", updateAvailability);

export default router;