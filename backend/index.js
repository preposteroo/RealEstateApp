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

app.get("/new_table/:id", (req, res) => {
    const listId = req.params.id;
    const q = "SELECT * FROM new_table WHERE id = ?";

    db.query(q, [listId], (err, data) => {
        if (err) {
            console.error("Database Query Error:", err);
            res.status(500).json({ error: "An error occurred while querying the database." });
        } else {
            if (data.length > 0) {
                res.json(data[0]); // Assuming you want to return the first matching record
            } else {
                console.error("Record not found for ID:", listId);
                res.status(404).json({ error: "Record not found." });
            }
        }
    });
});


app.get("/new_table", (req,res)=>{
    const q = "SELECT * FROM new_table"
    db.query(q,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.get("/broker", (req,res)=>{
    const q = "SELECT * FROM broker"
    db.query(q,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})


app.post("/broker", (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
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

app.listen(8800,() =>{
    console.log("Connected to backend!")
})

