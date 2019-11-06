var ghpages = require('gh-pages');

ghpages.publish('./', 'index.html', function(err) {
    if (err) {
        console.log(err);
    } else {
        console.log('published! 👍')
    }
});