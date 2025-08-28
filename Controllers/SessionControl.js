import db from '../db.js';

const getAllSessions = (req, res) => {

    db.query("SELECT * FROM Sessions", (err, result) => {
        if(err) {
            return res.status(500).json({error : err.message});
        }
        if(result.length == 0) {
            return res.status(404).json({error : "No Sessions found"});
        }

        res.json(result);
    });
};

const getSession = (req, res) => {
    const sessionTherapist = req.params.therapist;

    db.query("SELECT * FROM Sessions WHERE Therapist = ?", [sessionTherapist], (err, result) => {
        if(err) {
            return res.status(500).json({error : err.message});
        }
        if(result.length == 0) {
            return res.status(404).json({error : "Session not found"});
        }

        res.json(result[0]);
    });
};

const addSession = (req, res) => {
    const { Therapist, Client, Notes, SessionDate, Length } = req.body;

    db.query(
        "INSERT INTO Sessions (Therapist, Client, Notes, SessionDate, Length) VALUES (?,?,?,?,?)",
        [Therapist, Client, Notes, SessionDate, Length],
        (err) => {
            if(err) {
                return res.status(500).json({error: err.message});
            }

            res.status(201).json({message: "Session added"});
        }
    );
};

const deleteSession = (req, res) => {
    const sessionTherapist = req.params.therapist;
    console.log("Delete " + sessionTherapist);

    db.query("DELETE FROM Sessions WHERE Therapist = ?", [sessionTherapist], (err, result) => {
        if(err) {
            return res.status(500).json({error : err.message});
        }
        if(result.affectedRows == 0) {
            return res.status(404).json({error : "Session(s) not found"});
        }

        res.json({message: "Session(s) deleted successfully"});
    });
};

const updateTherapist = (req, res) => {
    const currTherapist = req.params.data;
    const newTherapist = req.body.newTherapist;

    db.query("UPDATE Sessions SET Therapist = ? WHERE Therapist = ?", [newTherapist, currTherapist], (err, result) => {
        if(err) {
            return res.status(500).json({ error: err.message });
        }

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: "Session not found" });
        }
    
        res.json({ message: "Session Therapist updated successfully" });
    });
}

const updateClient = (req, res) => {
    const currClient = req.params.data;
    const newClient = req.body.newClient;

    console.log(currClient);
    console.log(newClient);

    db.query("UPDATE Sessions SET Client = ? WHERE Client = ?", [newClient, currClient], (err, result) => {
        if(err) {
            return res.status(500).json({ error: err.message });
        }

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: "Session not found" });
        }

        res.json({ message: "Session Client updated successfully" });
    });
}

const updateNotes = (req, res) => {
    const currNotes = req.params.data;
    const newNotes = req.body.newNotes;

    db.query("UPDATE Sessions SET Notes = ? WHERE Notes = ?", [newNotes, currNotes], (err, result) => {
        if(err) {
            return res.status(500).json({ error: err.message });
        }

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: "Sessions not found" });
        }

        res.json({ message: "Session Notes updated successfully" });
    });
}

const updateDate = (req, res) => {
    const currDate = req.params.data;
    const newDate = req.body.newDate;

    db.query("UPDATE Sessions SET SessionDate = ? WHERE SessionDate = ?", [newDate, currDate], (err, result) => {
        if(err) {
            return res.status(500).json({ error: err.message });
        }

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: "Session not found" });
        }

        res.json({ message: "Session Date updated successfully" });
    });

}

const updateLength = (req, res) => {
    const currLength = req.params.data;
    const newLength = req.body.newLength;

    db.query("UPDATE Sessions SET Length = ? WHERE Length = ?", [newLength, currLength], (err, result) => {
        if(err) {
            return res.status(500).json({ error: err.message });
        }

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: "Session not found" });
        }

        res.json({ message: "Session Length updated successfully" });
    });
}
export { getAllSessions, getSession, addSession, deleteSession, updateTherapist, updateClient, updateNotes, updateDate, updateLength };