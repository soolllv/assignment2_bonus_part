const pool = require('../db');

exports.getUserTable = async (req, res)=>{
    try {
        const smth = await pool.query(`SELECT * FROM "Users";`)
        res.json(smth.rows);
    } catch (err) {
        console.error(err);
    }
}

exports.getCountryTable = async (req, res)=>{
    try {
        const smth = await pool.query(`SELECT * FROM "Country";`)
        res.json(smth.rows);
    } catch (err) {
        console.error(err);
    }
}

exports.getDiseaseTable = async (req, res)=>{
    try {
        const smth = await pool.query(`SELECT * FROM "Disease";`)
        res.json(smth.rows);
    } catch (err) {
        console.error(err);
    }
}

exports.getDiscoverTable = async (req, res)=>{
    try {
        const smth = await pool.query(`SELECT * FROM "Discover";`)
        res.json(smth.rows);
    } catch (err) {
        console.error(err);
    }
}

exports.getDiseaseTypeTable = async (req, res)=>{
    try {
        const smth = await pool.query(`SELECT * FROM "DiseaseType";`)
        res.json(smth.rows);
    } catch (err) {
        console.error(err);
    }
}

exports.getDoctorTable = async (req, res)=>{
    try {
        const smth = await pool.query(`SELECT * FROM "Doctor";`)
        res.json(smth.rows);
    } catch (err) {
        console.error(err);
    }
}

exports.getPublicServantTable = async (req, res)=>{
    try {
        const smth = await pool.query(`SELECT * FROM "PublicServant";`)
        res.json(smth.rows);
    } catch (err) {
        console.error(err);
    }
}

exports.getRecordTable = async (req, res)=>{
    try {
        const smth = await pool.query(`SELECT * FROM "Record";`)
        res.json(smth.rows);
    } catch (err) {
        console.error(err);
    }
}

exports.getSpecializeTable = async (req, res)=>{
    try {
        const smth = await pool.query(`SELECT * FROM "Specialize";`)
        res.json(smth.rows);
    } catch (err) {
        console.error(err);
    }
}

// -------------------- ADDING DATA

exports.addCountryRow = async (req, res) =>{
    try {
        const {cname, population} = req.body;
        await pool.query(
            `INSERT INTO "Country" (cname, population) values ($1, $2)`,
            [cname, parseInt(population)]
        )
        console.log("new Country row has been added");
    } catch (err) {
        console.error(err);
    }
}


exports.addUserRow = async (req, res) =>{
    try {
        const {email, name, surname, salary, phone, cname} = req.body;
        await pool.query(
            `INSERT INTO "Users" (email, name, surname, salary, phone, cname) VALUES ($1, $2, $3, $4, $5, $6)`,
            [email, name, surname, salary, phone, cname]
        )
        console.log("new User row has been added");
    } catch (err) {
        console.error(err);
    }
}

exports.addDiscoverRow = async (req, res) =>{
    try {
        const {cname, disease_code, first_enc_date} = req.body;
        await pool.query(
            `INSERT INTO "Discover" (cname, disease_code, first_enc_date) VALUES ($1, $2, $3)`,
            [cname, disease_code, first_enc_date]
        )
        console.log("new Discover row has been added");
    } catch (err) {
        console.error(err);
    }
}

exports.addDiseaseRow = async (req, res) =>{
    try {
        const {disease_code, pathogen, description, id} = req.body;
        await pool.query(
            `INSERT INTO "Disease" (disease_code, pathogen, description, id)  values ($1, $2, $3, $4)`,
            [disease_code, pathogen, description, id]
        )
        console.log("new Disease row has been added");
    } catch (err) {
        console.error(err);
    }
}

exports.addDiseaseTypeRow = async (req, res) =>{
    try {
        const {id, description} = req.body;
        await pool.query(
            `INSERT INTO "DiseaseType" (id, description) VALUES ($1, $2)`,
            [id, description]
        )
        console.log("new Disease Type row has been added");
    } catch (err) {
        console.error(err);
    }
}

exports.addDoctorRow = async (req, res) =>{
    try {
        const {email, degree} = req.body;
        await pool.query(
            `INSERT INTO "Doctor" (email, degree) VALUES ($1, $2)`,
            [email, degree]
        )
        console.log("new Doctor row has been added");
    } catch (err) {
        console.error(err);
    }
}

exports.addPublicServantRow = async (req, res) =>{
    try {
        const {email, department} = req.body;
        await pool.query(
            `INSERT INTO "PublicServant" (email, department) VALUES ($1, $2)`,
            [email, department]
        )
        console.log("new Public-Servant row has been added");
    } catch (err) {
        console.error(err);
    }
}

exports.addRecordRow = async (req, res) =>{
    try {
        const {email, cname, disease_code, total_deaths, total_patients} = req.body;
        await pool.query(
            `INSERT INTO "Record" (email, cname, disease_code, total_deaths, total_patients) VALUES ($1, $2, $3, $4, $5)`,
            [email, cname, disease_code, total_deaths, total_patients]
        )
        console.log("new Record row has been added");
    } catch (err) {
        console.error(err);
    }
}

exports.addSpecializeRow = async (req, res) =>{
    try {
        const {id, email} = req.body;
        await pool.query(
            `INSERT INTO "Specialize" (id, email) VALUES ($1, $2)`,
            [id, email]
        )
        console.log("new Specialize row has been added");
    } catch (err) {
        console.error(err);
    }
}

// -------------------- UPDATING DATA
exports.updateCountryRow = async (req, res) =>{
    try {
        const {population} = req.body;
        const cname = req.params.cname;
        await pool.query(
            `UPDATE "Country" SET population = $1 
            WHERE cname LIKE $2`,
            [population, cname.toString()]
        )
        console.log("Country row has been updated");
    } catch (err) {
        console.error(err);
    }
}


exports.updateUserRow = async (req, res) =>{
    try {
        const {email, name, surname, salary, phone, cname} = req.body;
        const prevEmail = req.params.email;

        await pool.query(
            `UPDATE public."Users" 
            SET email = $1, name = $2, surname = $3, salary = $4, phone = $5, cname = $6 
            WHERE email LIKE $7`,
            [email, name, surname, salary, phone, cname, prevEmail.toString()]
        )
        console.log("User row has been updated");
    } catch (err) {
        console.error(err);
    }
}

exports.updateDiscoverRow = async (req, res) =>{
    try {
        const {cname, disease_code, first_enc_date} = req.body;
        const prevDS = req.params.disease-code;
        await pool.query(
            `UPDATE public."Discover" 
            SET cname = $1, disease_code = $2, first_enc_date = $3 
            WHERE disease_code LIKE $4`,
            [cname, disease_code, first_enc_date, prevDS.toString()]
        )
        console.log("Discover row has been updated");
    } catch (err) {
        console.error(err);
    }
}

exports.updateDiseaseRow = async (req, res) =>{
    try {
        const {disease_code, pathogen, description, id} = req.body;
        const prevId = req.params.id;
        await pool.query(
            `UPDATE public."Disease" 
            SET disease_code = $1, pathogen = $2, description = $3, id = $4
            WHERE id LIKE $5`,
            [disease_code, pathogen, description, id, prevId]
        )
        console.log("new Disease row has been added");
    } catch (err) {
        console.error(err);
    }
}

exports.updateDiseaseTypeRow = async (req, res) =>{
    try {
        const {id, description} = req.body;
        const prevId = req.params.id;
        await pool.query(
            `UPDATE public."DiseaseType" 
            SET id = $1, description = $2 
            WHERE id LIKE $3`,
            [id, description, prevId]
        )
        console.log("new Disease Type row has been added");
    } catch (err) {
        console.error(err);
    }
}

exports.updateDoctorRow = async (req, res) =>{
    try {
        const {email, degree} = req.body;
        const prevEmail = req.params.email
        await pool.query(
            `UPDATE public."Doctor" 
            SET email = $1, degree = $2 
            WHERE email LIKE $3`,
            [email, degree, prevEmail.toString()]
        )
        console.log("Doctor row has been updated");
    } catch (err) {
        console.error(err);
    }
}

exports.updatePublicServantRow = async (req, res) =>{
    try {
        const {email, department} = req.body;
        const prevEmail = req.params.email
        await pool.query(
            `UPDATE public."PublicServant" 
            SET email = $1, department = $2 
            WHERE email LIKE $3`,
            [email, department, prevEmail.toString()]
        )
        console.log("Public-Servant row has been updated");
    } catch (err) {
        console.error(err);
    }
}

exports.updateRecordRow = async (req, res) =>{
    try {
        const {email, cname, disease_code, total_deaths, total_patients} = req.body;
        const prevEmail = req.params.email;
        await pool.query(
            `UPDATE public."Record" 
            SET email = $1, cname = $2, disease_code = $3, total_deaths = $4, total_patients = $5
            WHERE email LIKE $6`,
            [email, cname, disease_code, total_deaths, total_patients, prevEmail]
        )
        console.log("Record row has been updated");
    } catch (err) {
        console.error(err);
    }
}

exports.updateSpecializeRow = async (req, res) =>{
    try {
        const {id, email} = req.body;
        const prevId = req.params.id;
        await pool.query(
            `UPDATE public."Specialize" 
            SET id = $1, email = $2 
            WHERE id LIKE $3`,
            [id, email, prevId]
        )
        console.log("new Specialize row has been added");
    } catch (err) {
        console.error(err);
    }
}


// -------------------- DELETIING DATA
exports.deleteCountryRow = async (req, res) =>{
    try {
        const cname = req.params.cname;
        await pool.query(
            `DELETE FROM "Country" 
            WHERE cname LIKE $1`,
            [cname]
        )
        console.log(`Country row (with cname ${cname}) has been deleted`);
    } catch (err) {
        console.error(err);
    }
}


exports.deleteUserRow = async (req, res) =>{
    try {
        const email = req.params.email;

        await pool.query(
            `DELETE FROM "Users" 
            WHERE email LIKE $1`,
            [email]
        )
        console.log("User row has been deleted");
    } catch (err) {
        console.error(err);
    }
}

exports.deleteDiscoverRow = async (req, res) =>{
    try {
        const prevDS = req.params.disease-code;
        await pool.query(
            `DELETE FROM "Discover" 
            WHERE disease_code LIKE $1`,
            [prevDS]
        )
        console.log(`Discover row (with dis-code ${prevDS}) has been deleted`);
    } catch (err) {
        console.error(err);
    }
}

exports.deleteDiseaseRow = async (req, res) =>{
    try {
        const prevId = req.params.id;
        await pool.query(
            `DELETE FROM "Disease" 
            WHERE id LIKE $1`,
            [prevId]
        )
        console.log(`Disease row (with id ${prevId}) has been deleted`);
    } catch (err) {
        console.error(err);
    }
}

exports.deleteDiseaseTypeRow = async (req, res) =>{
    try {
        const prevId = req.params.id;
        await pool.query(
            `DELETE FROM "DiseaseType" 
            WHERE id LIKE $1`,
            [prevId]
        )
        console.log(`Disease Type row (with id ${prevId}) has been deleted`);
    } catch (err) {
        console.error(err);
    }
}

exports.deleteDoctorRow = async (req, res) =>{
    try {
        const prevEmail = req.params.email
        await pool.query(
            `DELETE FROM "Doctor" 
            WHERE email LIKE $1`,
            [prevEmail]
        )
        console.log(`Doctor row (with email ${prevEmail}) has been deleted`);
    } catch (err) {
        console.error(err);
    }
}

exports.deletePublicServantRow = async (req, res) =>{
    try {
        const prevEmail = req.params.email
        await pool.query(
            `DELEETE FROM "PublicServant" 
            WHERE email LIKE $1`,
            [prevEmail]
        )
        console.log(`Public-Servant row (with email ${prevEmail}) has been deleted`);
    } catch (err) {
        console.error(err);
    }
}

exports.deleteRecordRow = async (req, res) =>{
    try {
        const prevEmail = req.params.email;
        await pool.query(
            `DELETE FROM"Record" 
            WHERE email LIKE $1`,
            [prevEmail]
        )
        console.log(`Record row (with record ${prevEmail}) has been deleted`);
    } catch (err) {
        console.error(err);
    }
}

exports.deleteSpecializeRow = async (req, res) =>{
    try {
        const prevId = req.params.id;
        await pool.query(
            `DELETE FROM "Specialize" 
            WHERE id LIKE $1`,
            [prevId]
        )
        console.log(`Specialize row (with ${prevId}) has been deleted`);
    } catch (err) {
        console.error(err);
    }
}

