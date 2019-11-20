const db = require('../data/db-config.js');


module.exports = {
    find,
    findById,
    findSteps,
    add, 
    addStep,
    update, 
    remove,

};


function find() {
    return db('scheme');
}
// this resuts in a single user.....first()
function findById(id){
    return db('scheme').where({ id }).first();
}
function findSteps(id){
return db('steps').where({ id }).first();
}
function add(stepData){
    return db('scheme').insert(stepData)
    .then(step => {
        res.status(201).json(step);
      });
}

function addStep(stepData){
    return db('scheme').insert(stepData)
    .then(step => {
        res.status(201).json(step);
      });
}
// Make sure to add the destruct. id in the db method. 
function update(changes, id){
    return db ('scheme').where({ id }).update(changes)
    .then(updatedScheme => {
        res.json(updatedScheme);
      });
 
}
function remove(id){
    return db ('scheme').where({ id }).del();
}


