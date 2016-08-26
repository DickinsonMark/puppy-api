process.env.NODE_ENV = 'test';

const chai = require('chai');
const should = chai.should();
const puppiesController = require('../../controllers/puppies.controllers.js');

describe('controllers : puppies', function() {

  describe('getAllPuppies()', function () {
    it('should return all puppies', function (done) {
      puppiesController.getAllPuppies(function(err, res) {
        should.not.exist(err);
        res.should.be.a('object');
        res.message.should.eql('All puppies!');
        res.data.length.should.eql(2);
        done();
      });
    });
  });

  describe('getSinglePuppy()', function () {
    it('should return a single puppy', function (done) {
      puppiesController.getSinglePuppy(1, function(err, res) {
        should.not.exist(err);
        res.should.be.a('object');
        res.message.should.eql('Single puppy!');
        res.data.should.be.a('object');
        done();
      });
    });
  });

  describe('getSinglePuppy()', function () {
    it('should NOT return a single puppy if the provided ID is not correct',
      function (done) {
      puppiesController.getSinglePuppy(9999, function(err, res) {
        should.not.exist(res);
        err.should.be.a('object');
        err.message.should.eql('That puppy does not exist.');
        should.not.exist(err.data);
        done();
      });
    });
  });

  describe('createPuppy()', function () {
    it('should create a single puppy', function (done) {
      // TODO: What if a puppy object is not passed in?
      const newPuppy = {
        name: 'Sample',
        sex: 'M',
        breed: 'Sample',
        aggresive: true
      };
      puppiesController.createPuppy(newPuppy, function(err, res) {
        should.not.exist(err);
        res.should.be.a('object');
        res.message.should.eql('Single puppy added!');
        res.data.should.be.a('object');
        done();
      });
    });
  });

  describe('updatePuppy()', function () {
    it('should update a single puppy', function (done) {
      // TODO: What if a puppy object is not passed in?
      const newPuppy = {
        name: 'Sample',
        sex: 'M',
        breed: 'Sample',
        aggresive: true
      };
      puppiesController.updatePuppy(newPuppy, 1, function(err, res) {
        should.not.exist(err);
        res.should.be.a('object');
        res.message.should.eql('Single puppy updated!');
        res.data.should.be.a('object');
        done();
      });
    });
  });

  describe('updatePuppy()', function () {
    it('should NOT update a single puppy if the provided ID is not correct', function (done) {
      // TODO: What if a puppy object is not passed in?
      const newPuppy = {
        name: 'Sample',
        sex: 'M',
        breed: 'Sample',
        aggresive: true
      };
      puppiesController.updatePuppy(newPuppy, 9999, function(err, res) {
        should.not.exist(res);
        err.should.be.a('object');
        err.message.should.eql('That puppy does not exist.');
        should.not.exist(err.data);
        done();
      });
    });
  });

  describe('deletePuppy()', function () {
    it('should delete a single puppy', function (done) {
      puppiesController.deletePuppy(1, function(err, res) {
        should.not.exist(err);
        res.should.be.a('object');
        res.data.should.be.a('object');
        done();
      });
    });
  });

  describe('deletePuppy()', function () {
    it('should NOT delete a single puppy if the provided ID is not correct', function (done) {
      puppiesController.deletePuppy(9999, function(err, res) {
        should.not.exist(res);
        err.should.be.a('object');
        err.message.should.eql('That puppy does not exist.');
        should.not.exist(err.data);
        done();
      });
    });
  });

});
