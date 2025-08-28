import db from '../db.js';

const getAllTherapists = (req, res) => {

    db.query("SELECT * FROM Therapists", (err, result) => {
        if(err) {
            return res.status(500).json({error : err.message});
        }
        if(result.length == 0) {
            return res.status(404).json({error : "No Therapist found"});
        }

        res.json(result);
    });
};

const getTherapist = (req, res) => {
    const therapistName = req.params.name;
    console.log(therapistName);

    db.query("SELECT * FROM Therapists WHERE Name = ?", [therapistName], (err, result) => {
        if(err) {
            return res.status(500).json({error : err.message});
        }
        if(result.length == 0) {
            return res.status(404).json({error : "Therapist not found"});
        }
        console.log(`result: ${result[0]}`);
        res.json(result[0]);
    });
};

const addTherapist = (req, res) => {
    const { Name, Title, Email, Location, YearsOfPractice, Availability } = req.body;

    db.query(
        "INSERT INTO Therapists (Name, Title, Email, Location, YearsOfPractice, Availability) VALUES (?,?,?,?,?,?)",
        [Name, Title, Email, Location, YearsOfPractice, Availability],
        (err) => {
            if(err) {
                return res.status(500).json({error: err.message});
            }

            res.status(201).json({message: "Therapist added"});
        }
    );
};

const deleteTherapist = (req, res) => {
    const therapistName = req.params.name;

    db.query("DELETE FROM Therapists WHERE Name = ?", [therapistName], (err, result) => {
        if(err) {
            return res.status(500).json({error : err.message});
        }
        if(result.affectedRows == 0) {
            return res.status(404).json({error : "Therapist not found"});
        }

        res.json({message: "Therapist deleted successfully"});
    });
};

const updateName = (req, res) => {
    const currName = req.params.name;
    const newName = req.body.data;

    db.query("UPDATE Therapists SET Name = ? WHERE Name = ?", [newName, currName], (err, result) => {
        if(err) {
            return res.status(500).json({ error: err.message });
        }

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: "Therapist not found" });
        }
    
        res.json({ message: "Therapists name updated successfully" });
    });
}

const updateTitle = (req, res) => {
    const currTitle = req.params.title;
    const newTitle = req.body.data;

    console.log(currTitle);
    console.log(newTitle);

    db.query("UPDATE Therapists SET Title = ? WHERE Name = ?", [newTitle, currTitle], (err, result) => {
        if(err) {
            return res.status(500).json({ error: err.message });
        }

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: "Therapist not found" });
        }

        res.json({ message: "Therapists Title updated successfully" });
    });
}

const updateEmail = (req, res) => {
    const currEmail = req.params.email;
    const newEmail = req.body.data;

    db.query("UPDATE Therapists SET Email = ? WHERE Name = ?", [newEmail, currEmail], (err, result) => {
        if(err) {
            return res.status(500).json({ error: err.message });
        }

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: "Therapist not found" });
        }

        res.json({ message: "Therapists Email updated successfully" });
    });
}

const updateLocation = (req, res) => {
    const currLocation = req.params.location;
    const newLocation = req.body.data;

    db.query("UPDATE Therapists SET Location = ? WHERE Name = ?", [newLocation, currLocation], (err, result) => {
        if(err) {
            return res.status(500).json({ error: err.message });
        }

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: "Therapist not found" });
        }

        res.json({ message: "Therapists location updated successfully" });
    });

}

const updateYears = (req, res) => {
    const currYears = req.params.years;
    const newYears = req.body.data;

    db.query("UPDATE Therapists SET YearsOfPractice = ? WHERE Name = ?", [newYears, currYears], (err, result) => {
        if(err) {
            return res.status(500).json({ error: err.message });
        }

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: "Therapist not found" });
        }

        res.json({ message: "Therapists years of practice updated successfully" });
    });
}

const updateAvailability = (req, res) => {
    const currAvail = req.params.avail;
    const newAvail = req.body.data;

    db.query("UPDATE Therapists SET Availability = ? WHERE Name = ?", [newAvail, currAvail], (err, result) => {
        if(err) {
            return res.status(500).json({ error: err.message });
        }

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: "Therapist not found" });
        }

        res.json({ message: "Therapists Availability updated successfully" });
    });
}

export { getAllTherapists, getTherapist, addTherapist, deleteTherapist, updateName, updateTitle, updateEmail, updateLocation, updateYears, updateAvailability };