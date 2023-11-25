import express from "express"
import mysql from "mysql"
import cors from "cors"; 


const app = express()

const db = mysql.createConnection({
    host:"localhost",
    user: "root",
    password: "pass1234",
    database: "List"
})
app.use(express.json());
app.use(cors());

app.get("/", (req,res)=>{
    res.json("hello this is the backend")
})

app.get("/new_table", (req,res)=>{
    const q = "SELECT * FROM new_table"
    db.query(q,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})

{/*app.get("/new_table/:id", (req, res) => {
    const listId = req.params.id;
    const q = "SELECT * FROM new_table WHERE id = ?";

    db.query(q, [listId], (err, data) => {
        if (err) {
            console.error("Database Query Error:", err);
            res.status(500).json({ error: "An error occurred while querying the database." });
        } else {
            if (data.length > 0) {
                res.json(data[0]);
            } else {
                console.error("Record not found for ID:", listId);
                res.status(404).json({ error: "Record not found." });
            }
        }
    });
});*/}
app.get("/new_table/search", (req, res) => {
    const searchTerm = req.query.bName; 

    if (!searchTerm) {
        return res.status(400).json({ error: "Search term is required" });
    }

    const q = "SELECT * FROM new_table WHERE bName LIKE ?";

    db.query(q, [`%${searchTerm}%`], (err, data) => {
        if (err) {
            console.error("Database Error:", err);
            return res.status(500).json({ error: "Database error" });
        }

        return res.json(data);
    });
});

app.get("/new_table/:id", (req, res) => {
    const id = req.params.id; 
    const q = "SELECT * FROM new_table WHERE id = ?";

    db.query(q, [id], (err, data) => {
        if (err) {
            return res.status(500).json({ error: "Database error" });
        }

        if (data.length === 0) {
            return res.status(404).json({ error: "Record not found" });
        }

        return res.json(data[0]); 
    });
});

app.get("/broker", (req,res)=>{
    const q = "SELECT * FROM broker"
    db.query(q,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.get("/messages", (req,res)=>{
    const q = "SELECT * FROM messages"
    db.query(q,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})


app.get("/messages", (req, res) => {
    const userName = req.user.name;
    const q = 'SELECT * FROM messages WHERE toName = ?';

    db.query(q, [userName], (err, data) => {
        if (err) {
            console.error('Database Query Error:', err);
            return res.status(500).json({ error: 'An error occurred while querying the database.' });
        }

        res.json(data);
    });
});

app.get("/test/search", (req, res) => {
    const searchTerm = req.query.nameBroker; 

    if (!searchTerm) {
        return res.status(400).json({ error: "Search term is required" });
    }

    const q = "SELECT * FROM test WHERE nameBroker LIKE ?";

    db.query(q, [`%${searchTerm}%`], (err, data) => {
        if (err) {
            console.error("Database Error:", err);
            return res.status(500).json({ error: "Database error" });
        }

        return res.json(data);
    });
});

app.get("/test", (req,res)=>{
    const q = "SELECT * FROM test"
    db.query(q,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})
app.post("/test", (req,res)=>{
    const q = "INSERT INTO test (`request`, `nameBroker`) VALUES (?)"
    const values = [
        req.body.request,
        req.body.nameBroker,
    ]

    db.query(q,[values],(err,data)=>{
        if (err) {
            console.error("Database Insertion Error:", err);
            res.status(500).json({ error: "An error occurred while inserting the data into the database." });
        } else {
            console.log("Listing has been successfully created!");
            res.json("Listing has been successfully created!");
        }
    })
})

app.post("/broker", (req, res) => {
    const password = req.body.password;
    const email = req.body.email;
    const name = req.body.name;

    if (!name) {
        
        const loginQuery = "SELECT * FROM broker WHERE email = ? AND password = ?";
        db.query(loginQuery, [email, password], (err, data) => {
            if (err) {
                console.error("Database Query Error:", err);
                res.status(500).json({ error: "An error occurred while querying the database." });
            } else {
                if (data.length > 0) {
                    res.json({ message: "Login successful", user: data[0] });
                                    } else {
                    res.status(401).json({ error: "Invalid email or password." });
                }
            }
        });
    } else {
    
        const registrationQuery = "INSERT INTO broker (`email`, `password`, `name`, `licenseNum`, `company`) VALUES (?, ?, ?, ?, ?)";
        const values = [req.body.email, req.body.password, req.body.name, req.body.licenseNum, req.body.company];

        db.query(registrationQuery, values, (err, data) => {
            if (err) {
                console.error("Database Insertion Error:", err);
                res.status(500).json({ error: "An error occurred while inserting the data into the database." });
            } else {
                console.log("User has been successfully registered!");
                res.json("User has been successfully registered!");
            }
        });
    }
});

app.post("/new_table", (req,res)=>{
    const q = "INSERT INTO new_table (`address`, `numBath`, `numBed`, `location`, `bName`, `bCompany`, `sqf`, `price`, `imgsource`) VALUES (?)"
    const values = [
        req.body.address,
        req.body.numBath,
        req.body.numBed,
        req.body.location,
        req.body.bName,
        req.body.bCompany,
        req.body.sqf,
        req.body.price,
        req.body.imgsource
    ]

    db.query(q,[values],(err,data)=>{
        if (err) {
            console.error("Database Insertion Error:", err);
            res.status(500).json({ error: "An error occurred while inserting the data into the database." });
        } else {
            console.log("Listing has been successfully created!");
            res.json("Listing has been successfully created!");
        }
    })
})

app.post("/messages", (req,res)=>{
    const q = "INSERT INTO messages (`toName`, `fromName`, `message`, `offer`, `buyerEmail`,`buyerAddress`,`buyerName`,`deedDate`,`moveDate`,`propAddress`,`licenseNumber`,`agency`) VALUES (?)"
    const values = [
        req.body.toName,
        req.body.fromName,
        req.body.message,
        req.body.offer,
        req.body.buyerEmail,
        req.body.buyerAddress,
        req.body.buyerName,
        req.body.deedDate,
        req.body.moveDate,
        req.body.propAddress,
        req.body.licenseNumber,
        req.body.agency,
    ]

    db.query(q,[values],(err,data)=>{
        if (err) {
            console.error("Database Insertion Error:", err);
            res.status(500).json({ error: "An error occurred while inserting the data into the database." });
        } else {
            console.log("Message has been successfully sent!");
            res.json("Message has been successfully sent!");
        }
    })
})

app.delete("/new_table/:id",(req,res)=>{
    const listId = req.params.id;
    const q = "DELETE FROM new_table WHERE id= ?"

    db.query(q,[listId], (err,data)=>{
        if (err) {
            console.error("Database Insertion Error:", err);
            res.status(500).json({ error: "An error occurred while inserting the data into the database." });
        } else {
            console.log("Listing has been deleted successfully !");
            res.json("Listing has been deleted successfully !");
        }
    })
})

app.delete("/messages/:id",(req,res)=>{
    const messageId = req.params.id;
    const q = "DELETE FROM messages WHERE id= ?"

    db.query(q,[messageId], (err,data)=>{
        if (err) {
            console.error("Database Insertion Error:", err);
            res.status(500).json({ error: "An error occurred while inserting the data into the database." });
        } else {
            console.log("Listing has been deleted successfully !");
            res.json("Listing has been deleted successfully !");
        }
    })
})

app.listen(8800,() =>{
    console.log("Connected to backend!")
})

