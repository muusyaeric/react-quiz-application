export const shuffleAnswers = (question) => {
    const unShuffledAnswers = [
        question.correctAnswer,
        ...question.incorrectAnswers,
    ];

    return unShuffledAnswers
    .map(answer => ({sort: Math.random(), value: answer}))
    .sort((a,b) => a.sort - b.sort)
    .map((obj) => obj.value);
}