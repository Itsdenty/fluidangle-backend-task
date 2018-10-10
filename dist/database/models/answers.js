"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var answerModel = "\n  DROP TABLE IF EXISTS cAnswers CASCADE;\n  CREATE TABLE cAnswers (\n      answerId serial PRIMARY KEY,\n      userId INT NOT NULL,\n      questionId INT NOT NULL,\n      message TEXT NOT NULL,\n      createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,\n      foreign key(userId) REFERENCES aUsers(userId),\n      foreign key(questionId) REFERENCES bQuestions(questionId)\n  );\n";

var answerDb = "" + answerModel;

exports.default = answerDb;