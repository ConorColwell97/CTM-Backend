import db from '../db.js';

const getAllClients = (req, res) => {

    db.query("SELECT * FROM Clients", (err, result) => {
        if(err) {
            return res.status(500).json({error : err.message});
        }
        if(result.length == 0) {
            return res.status(404).json({error : err.message});
        }

        res.json(result);
    });
};

const getClient = (req, res) => {
    const clientName = req.params.name;

    db.query("SELECT * FROM Clients WHERE Name = ?", [clientName], (err, result) => {
        if(err) {
            return res.status(500).json({error : err.message});
        }
        if(result.length == 0) {
            return res.status(404).json({error : err.message});
        }

        res.json(result[0]);
    });
};

const addClient = (req, res) => {
    const { Name, Email, PhoneNumber, Regularity } = req.body;

    db.query(
        "INSERT INTO Clients (Name, Email, PhoneNumber, Regularity) VALUES (?,?,?,?)",
        [Name, Email, PhoneNumber, Regularity],
        (err) => {
            if(err) {
                return res.status(500).json({error: err.message});
            }

            res.status(201).json({message: "Client added"});
        }
    );
};

const deleteClient = (req, res) => {
    const clientName = req.params.name;
    console.log(clientName);

    db.query("DELETE FROM Clients WHERE Name = ?", [clientName], (err, result) => {
        if(err) {
            return res.status(500).json({error : err.message});
        }
        if(result.affectedRows == 0) {
            return res.status(404).json({error : "Client not found"});
        }

        res.json({message: "Client deleted successfully"});
    });
};

const updateName = (req, res) => {
    const currName = req.params.name;
    const newName = req.body.newName;

    console.log(currName);
    console.log(newName);

    db.query("UPDATE Clients SET Name = ? WHERE Name = ?", [newName, currName], (err, result) => {
        if(err) {
            return res.status(500).json({ error: err.message });
        }

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: "Client not found" });
        }
    
        res.json({ message: "Client name updated successfully" });
    });
}

const updateEmail = (req, res) => {
    const currEmail = req.params.email;
    const newEmail = req.body.newEmail;

    console.log(currEmail);
    console.log(newEmail);

    db.query("UPDATE Clients SET Email = ? WHERE Name = ?", [newEmail, currEmail], (err, result) => {
        if(err) {
            return res.status(500).json({ error: err.message });
        }

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: "Client not found" });
        }

        res.json({ message: "Client Email updated successfully" });
    });
}

const updatePhoneNumber = (req, res) => {
    const currNumber = req.params.number;
    const newNumber = req.body.newNumber;

    console.log(currNumber);
    console.log(newNumber);

    db.query("UPDATE Clients SET PhoneNumber = ? WHERE Name = ?", [newNumber, currNumber], (err, result) => {
        if(err) {
            return res.status(500).json({ error: err.message });
        }

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: "Client not found" });
        }

        res.json({ message: "Client Phone Number updated successfully" });
    });

}

const updateRegularity = (req, res) => {
    const currReg = req.params.reg;
    const newReg = req.body.newReg;

    console.log(currReg);
    console.log(newReg);

    db.query("UPDATE Clients SET Regularity = ? WHERE Name = ?", [newReg, currReg], (err, result) => {
        if(err) {
            return res.status(500).json({ error: err.message });
        }

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: "Client not found" });
        }

        res.json({ message: "Client Regularity updated successfully" });
    });
}

export { getAllClients, getClient, addClient, deleteClient, updateName, updateEmail, updatePhoneNumber, updateRegularity };