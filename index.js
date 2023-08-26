const axios = require('axios');
const cheerio = require('cheerio');


async function testme(url){
    await axios.get(url)
    .then(res => {
        const $ = cheerio.load(res.data)
        $('a').each((index, element) => {
            console.log($(element).attr('href'))
        });

    }).catch(err => console.error(err))

}

testme('https://dev.to/drsimplegraffiti/i-scraped-dev-to-using-axios-and-cheerio-26ko')