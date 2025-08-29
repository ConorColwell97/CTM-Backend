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

const getSessionByID = (req, res) => {
    const sessionID = req.params.id;

    db.query("SELECT * FROM Sessions WHERE ID = ?", [sessionID], (err, result) => {
        if(err) {
            return res.status(500).json({error : err.message});
        }
        if(result.length == 0) {
            return res.status(404).json({error : "Session not found"});
        }

        res.json(result[0]);
    });
};

const getSessionByTherapist = (req, res) => {
    const sessionTherapist = req.params.therapist;

    db.query("SELECT * FROM Sessions WHERE Therapist = ?", [sessionTherapist], (err, result) => {
        if(err) {
            return res.status(500).json({error : err.message});
        }
        if(result.length == 0) {
            return res.status(404).json({error : "Session not found"});
        }

        res.json(result);
    });
};

const getSessionSessionByClient = (req, res) => {
    const sessionClient = req.params.client;

    db.query("SELECT * FROM Sessions WHERE Client = ?", [sessionClient], (err, result) => {
        if(err) {
            return res.status(500).json({error : err.message});
        }
        if(result.length == 0) {
            return res.status(404).json({error : "Session not found"});
        }

        res.json(result);
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
    const session = req.params.id;
    console.log("Delete " + session);

    db.query("DELETE FROM Sessions WHERE ID = ?", [session], (err, result) => {
        if(err) {
            return res.status(500).json({error : err.message});
        }
        if(result.affectedRows == 0) {
            return res.status(404).json({error : "Session not found"});
        }

        res.json({message: "Session deleted successfully"});
    });
};

const updateTherapist = (req, res) => {
    const currTherapist = req.params.id;
    const newTherapist = req.body.data;

    db.query("UPDATE Sessions SET Therapist = ? WHERE ID = ?", [newTherapist, currTherapist], (err, result) => {
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
    const currClient = req.params.id;
    const newClient = req.body.data;

    console.log(currClient);
    console.log(newClient);

    db.query("UPDATE Sessions SET Client = ? WHERE ID = ?", [newClient, currClient], (err, result) => {
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
    const currNotes = req.params.id;
    const newNotes = req.body.data;

    db.query("UPDATE Sessions SET Notes = ? WHERE ID = ?", [newNotes, currNotes], (err, result) => {
        if(err) {
            return res.status(500).json({ error: err.message });
        }

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: "Session not found" });
        }

        res.json({ message: "Session Notes updated successfully" });
    });
}

const updateDate = (req, res) => {
    const currDate = req.params.id;
    const newDate = req.body.data;

    db.query("UPDATE Sessions SET SessionDate = ? WHERE ID = ?", [newDate, currDate], (err, result) => {
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
    const currLength = req.params.id;
    const newLength = req.body.data;

    db.query("UPDATE Sessions SET Length = ? WHERE ID = ?", [newLength, currLength], (err, result) => {
        if(err) {
            return res.status(500).json({ error: err.message });
        }

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: "Session not found" });
        }

        res.json({ message: "Session Length updated successfully" });
    });
}
export { getAllSessions, getSessionByID, getSessionByTherapist, getSessionSessionByClient, addSession, deleteSession, updateTherapist, updateClient, updateNotes, updateDate, updateLength };