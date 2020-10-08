const db = require('../database');

test('Sanity Check - adds 1 + 2 to equal 3', () => {
  expect(1 + 2).toBe(3);
});

test('it should alter an existing value', async () => {

  var results = await db.getReviews(99);
  var id = results[0].get().id;
  var oldValue = JSON.parse(results[0].get().awards)['Deep Thoughts'];
  var dataToChange = { key: 'awards', val: 'Deep Thoughts' };
  var result = await db.updateReview(id, dataToChange)
  var newValue = JSON.parse(result.dataValues.awards)['Deep Thoughts'];
  expect(newValue).toBe(oldValue + 1);
});

test('it should pull all reviews for one game', done => {
  db.getReviews('99')
    .then((data) => {
      expect(data.length).toBeGreaterThan(0);
      done();
    })
    .catch((err) => {
      console.log(err);
      done(err);
    });
});