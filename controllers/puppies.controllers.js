(function() {

  'use strict';

  // *** global array *** //
  const cage = [
    {
      id: 1,
      name: 'Wes',
      sex: 'M',
      breed: 'Chaweeny',
      aggresive: true
    },
    {
      id: 2,
      name: 'Michael',
      sex: 'M',
      breed: 'Golden Retriever',
      aggresive: false
    }
  ];

  function getAllPuppies(callback) {
    const returnObject = {
      message: 'All puppies!',
      data: cage
    };
    callback(null, returnObject);
  }

  function getSinglePuppy(puppyID, callback) {
    const singlePuppy = cage.filter(function(puppy) {
      return puppy.id === puppyID;
    });
    if (singlePuppy.length) {
      const returnObject = {
        message: 'Single puppy!',
        data: singlePuppy[0]
      };
      callback(null, returnObject);
    } else {
      const returnObject = {
        message: 'That puppy does not exist.',
        data: null
      };
      callback(returnObject);
    }
  }

  function createPuppy(puppyObject, callback) {
    const indexOfLast = cage.length - 1;
    const newID = cage[indexOfLast].id + 1;
    puppyObject.id = newID;
    cage.push(puppyObject);
    const returnObject = {
      message: 'Single puppy added!',
      data: puppyObject
    };
    callback(null, returnObject);
  }

  function updatePuppy(puppyObject, puppyID, callback) {
    const singlePuppy = cage.filter(function(puppy) {
      return puppy.id === puppyID;
    });
    if (!singlePuppy.length) {
      const returnObject = {
        message: 'That puppy does not exist.',
        data: null
      };
      callback(returnObject);
    } else {
      puppyObject.id = puppyID;
      const index = cage.indexOf(singlePuppy[0]);
      cage.splice(index, 1);
      cage.push(puppyObject);
      const returnObject = {
        message: 'Single puppy updated!',
        data: puppyObject
      };
      callback(null, returnObject);
    }
  }

  function deletePuppy(puppyID, callback) {
    const singlePuppy = cage.filter(function(puppy) {
      return puppy.id === puppyID;
    });
    if (!singlePuppy.length) {
      const returnObject = {
        message: 'That puppy does not exist.',
        data: null
      };
      callback(returnObject);
    } else {
      const index = cage.indexOf(singlePuppy);
      cage.splice(index, 1);
      const returnObject = {
        message: '' + singlePuppy[0].name + '...is gone',
        data: singlePuppy[0]
      };
      callback(null, returnObject);
    }
  }

  module.exports = {
    getAllPuppies,
    getSinglePuppy,
    createPuppy,
    updatePuppy,
    deletePuppy
  };

}());
