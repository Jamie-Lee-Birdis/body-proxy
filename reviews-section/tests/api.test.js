const axios = require('axios');
const db = require('../database');

test('it should get reviews for one game from the API', done => {
  const getReviews =  async (gameId) => {
    const API = 'http://127.0.0.1:3000/moist-air/reviews';

    var fetchData = async (query) => {
      var url = `${API}/?gameID=${query}`;
      return await axios.get(url);
    };
    var result = fetchData('9');

    return result;
  }
  getReviews(99)
  .then((result) => {
    expect(result.data.length).toBeGreaterThan(0);
    done();
  })
  .catch((err) => {
    done(err);
  });
});

test('it should update a review\'s awards from the API', async (done) => {
  var results = await db.getReviews(99);
  var oldValue = JSON.parse(results[0].get().awards)['Deep Thoughts'];
  var id = results[0].get().id;

  var updateReviews =  async (gameId, { key, value }) => {
    const API = 'http://127.0.0.1:3000/moist-air/reviews';

    const patchData = async (query) => {
      var url = `${API}/?reviewID=${query}&key=${key}&value=${value}`;
      return await axios.patch(url);
    };
    var result = patchData(id);
    return result;
  }
  updateReviews(99, { key: 'awards', value: 'Deep Thoughts' })
  .then((result) => {
    var newValue = JSON.parse(result.data.awards)['Deep Thoughts'];
    expect(newValue).toBe(oldValue + 1);
    done();
  })
  .catch((err) => {
    done(err);
  });
});

test('it should update a review\'s funny count from the API', async (done) => {
  var results = await db.getReviews(99);
  var oldValue = JSON.parse(results[0].get().funny_count);
  var id = results[0].get().id;


  var updateReviews =  async (gameId, { key }) => {
    const API = 'http://127.0.0.1:3000/moist-air/reviews';

    const patchData = async (query) => {
      var url = `${API}/?reviewID=${query}&key=${key}`;
      return await axios.patch(url);
    };
    var result = patchData(id);
    return result;
  }
  updateReviews(99, { key: 'funny' })
  .then((result) => {

    var newValue = result.data.funny_count;
    expect(newValue).toBe(oldValue + 1);
    done();
  })
  .catch((err) => {
    done(err);
  });
});

test('it should update a review\'s helpful count from the API', async (done) => {
  var results = await db.getReviews(99);
  var oldValue = JSON.parse(results[0].get().helpful_count);
  var id = results[0].get().id;

  var updateReviews =  async (gameId, { key }) => {
    const API = 'http://127.0.0.1:3000/moist-air/reviews';

    const patchData = async (query) => {
      var url = `${API}/?reviewID=${query}&key=${key}`;
      return await axios.patch(url);
    };
    var result = patchData(id);
    return result;
  }
  updateReviews(99, { key: 'helpful' })
  .then((result) => {

    var newValue = result.data.helpful_count;
    expect(newValue).toBe(oldValue + 1);
    done();
  })
  .catch((err) => {
    done(err);
  });
});