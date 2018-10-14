import { expect } from 'chai';
import request from 'supertest';
import app from '../index';

// let app = require('../app'),
//     expect = require('chai').expect,
//     request = require('supertest');

/**
 *
 *
 * @returns {String} fstring
 */
function generateDummyName() {
  const xterBank = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let fstring = '';
  for (let i = 0; i < 7; i += 1) {
    fstring += xterBank[parseInt(Math.random() * 52, 10)];
  }
  return fstring;
}


const
  emailFrag1 = generateDummyName(),
  emailFrag2 = emailFrag1.substring(0, 4),
  email = `${emailFrag1}@${emailFrag2}.com`;


describe('User API endpoints intgeration Tests', () => {
  const contact = {
    contact: {
      firstName: 'test-firstname',
      lastName: 'test-lastname',
      phoneNumber: '08123456789',
      email,
    }
  };
  const user = {
    user: {
      firstName: 'test-firstname',
      lastName: 'test-lastname',
      password: 'password1234',
      email,
    }
  };

  const login = {
    login: {
      email,
      password: 'password1234',
    }
  };
  let token = '';

  describe('#POST / user', () => {
    it('should create a single user', (done) => {
      request(app).post('/api/v1/user').send(user)
        .end((err, res) => {
          if (err) return done(err);
          expect(res.statusCode).to.equal(200);
          expect(res.body).to.be.an('object');
          expect(res.body.payload).to.be.an('object');
          expect(res.body.responseCode).to.equal(1);
          expect(res.body.responseText).to.equal('ok');
          user.user = res.body.payload;
          done();
        });
    });
  });

  describe('#POST / user login', () => {
    it('should login a user', (done) => {
      request(app).post('/api/v1/user/login').send(login)
        .end((err, res) => {
          if (err) return done(err);
          expect(res.statusCode).to.equal(200);
          expect(res.body).to.be.an('object');
          expect(res.body.payload).to.be.an('object');
          expect(res.body.responseCode).to.equal(1);
          expect(res.body.responseText).to.equal('ok');
          user.user = res.body.payload.user;
          token = `Bearer ${res.body.payload.token}`;
          done();
        });
    });
  });

  describe('#POST / contact', () => {
    it('should create a single contact', (done) => {
      request(app).post('/api/v1/contact').send(contact)
        .set('Authorization', token)
        .end((err, res) => {
          if (err) return done(err);
          expect(res.statusCode).to.equal(200);
          expect(res.body).to.be.an('object');
          expect(res.body.payload).to.be.an('object');
          expect(res.body.responseCode).to.equal(1);
          expect(res.body.responseText).to.equal('ok');
          contact.contact = res.body.payload.contact;
          done();
        });
    });
  });
});
