import { expect } from 'chai';
import request from 'supertest';
import app from '../index';

// let app = require('../app'),
//     expect = require('chai').expect,
//     request = require('supertest');

describe('User API endpoints intgeration Tests', () => {
  const user = {
    user: {
      username: 'test-name',
      password: 'password1234',
      email: 'dent4reanltt@gmail.com',
      role: '5b4fafca821cf474ccf0a221',
      phone_number: '08169086013',
    }
  };

  // let login = {
  //     'user': {
  //         'email': 'dent4real@yahoo.com',
  //         'password': 'superduperpassword',
  //     }
  // };

  // let token = "";

  // let update = {
  //   user: {
  //     username: 'recent-name'
  //   }
  // };

  describe('#POST / user', () => {
    it('should create a single user', (done) => {
      request(app).post('/apis/v1/user').send(user)
        .end((err, res) => {
          if (err) return done(err);
          expect(res.statusCode).to.equal(200);
          expect(res.body).to.be.an('object');
          expect(res.body.payload).to.be.an('object');
          expect(res.body.payload.role).to.be.an('object');
          expect(res.body.payload.permissions).to.be.an('array');
          expect(res.body.responseCode).to.equal(1);
          expect(res.body.responseText).to.equal('ok');
          user.user = res.body.payload;
          done();
        });
    });
  });
});
