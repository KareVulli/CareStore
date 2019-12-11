import request from 'supertest';
import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import {MongoMemoryServer} from 'mongodb-memory-server';
import userRouter from '../server/routes/users';
import authRouter from '../server/routes/auth';

const app = express();
const mongoServer = new MongoMemoryServer();
app.use(bodyParser.json());
app.use(userRouter);
app.use(authRouter);


describe('User requests', () => {
    beforeAll(async () => {
        const URI = await mongoServer.getConnectionString();
        await mongoose.connect(URI, {useNewUrlParser: true, useUnifiedTopology: true});
    });
    afterAll(async () => {
        await mongoose.disconnect();
        await mongoServer.stop();
    });

    it('should return empty list of users', (done) => {
        request(app)
            .get('/users')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, [], done);
    });

    it('should create a new user', (done) => {
        request(app)
            .post('/users')
            .send({
                firstname: 'Foo',
                lastname: 'Bar',
                email: 'test@gmail.com',
                password: 'secret890'
            })
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(201)
            .end((err, res) => {
                if (err) return done(err);
                expect(res.body.message).toBe('User created');
                return done();
            });
    });

    it('should return 1 user', (done) => {
        request(app)
            .get('/users')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                expect(res.body[0].email).toBe('test@gmail.com');
                return done();
            });
    });

    it('should log in and return token', (done) => {
        request(app)
            .post('/auth/login')
            .send({
                email: 'test@gmail.com',
                password: 'secret890'
            })
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                expect(res.body.token).not.toBeUndefined();
                return done();
            });
    });

    it('should not log in', (done) => {
        request(app)
            .post('/auth/login')
            .send({
                email: 'test@gmail.com',
                password: 'wrongPassword'
            })
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(400)
            .end((err, res) => {
                if (err) return done(err);
                return done();
            });
    });
});
