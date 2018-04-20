const models = require("../models");

// GET /quizzes
exports.index = (req, res, next) => {
	const quizzes = models.quiz.findAll();

	res.render('quizzes/index.ejs', {quizzes});
};

// GET /quizzes/:quizId
exports.show = (req, res, next) => {
	const quizId = Number(req.params.quizId);
	const quiz = models.quiz.findById(quizId);

	if (quiz) {
		res.render('quizzes/show', {quiz});
	} else {
		next(new Error('There is no quiz with id=' + quizId));
	}
};