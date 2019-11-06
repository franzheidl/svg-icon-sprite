var ghpages = require('gh-pages');

ghpages.publish('src', function(err) {
    if (err) {
        console.log(err);
    } else {
        console.log('published! 👍')
    }
});