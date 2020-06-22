const mongoose = require('mongoose');
const Campground = require('./models/campground');
const Comment = require('./models/comment');

const data = [
    {
        name: "Cloud's Rest",
        image: "https://images.unsplash.com/photo-1504730030853-eff311f57d3c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
        // image: "https://images.unsplash.com/photo-1470163395405-d2b80e7450ed?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
        description: "Return on investment innovator facebook. Low hanging fruit social proof marketing. Conversion crowdfunding buzz partnership accelerator social media holy grail gen-z seed money. Leverage prototype supply chain freemium ownership creative iPad equity investor virality twitter assets founders."
    },
    {
        name: "Desert Mesa",
        image: "https://images.unsplash.com/photo-1467632499275-7a693a761056?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
        // image: "https://images.unsplash.com/photo-1509854120-eeab44807cd0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1393&q=80",
        description: "Validation iPhone venture low hanging fruit pitch. Validation deployment disruptive strategy research & development business plan rockstar supply chain sales android business-to-consumer growth hacking. Business-to-consumer gen-z client. Supply chain iPad alpha partner network conversion assets leverage social media marketing return on investment creative responsive web design."
    },
    {
        name: "Canyon Floor",
        image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
        // image: "https://images.unsplash.com/photo-1445384763658-0400939829cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
        description: "Handshake crowdfunding social proof A/B testing series A financing equity churn rate pitch incubator hypotheses traction backing."
    },
    {
        name: "Yellow Rock",
        image: "https://images.unsplash.com/photo-1564223288351-a96bea22b5f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=635&q=80",
        // image: "https://images.unsplash.com/photo-1488842817413-6e197d6d8d53?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1384&q=80",
        description: "Stock business plan bandwidth supply chain churn rate pivot network effects validation iPhone leverage product management mass market monetization. Influencer backing lean startup niche market. Ecosystem sales freemium burn rate marketing long tail vesting period. Leverage metrics focus assets crowdsource deployment seed money partnership beta."
    },
];

function seedDB() {
    // Remove all campgrounds
    Campground.remove({}, (err) => {
        if (err) {
            console.log(err);
        } 
        console.log('All campgrounds removed!');
        // Add few campgrounds data
        data.forEach((seed) => {
            Campground.create(seed, (err, campground) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log('Added campground');
                    // Create a comment
                    Comment.create({
                        text: "Pastel model purchase photography measurement allure jacket stock comfortable glitter. Swag trade jumper effect expensive allure handbag. Jumper elegant accessory wholesale jewelry taste couture craftmanship waistline valuable minimalist pattern. Halter swim-wear hippie production quality pumps tones signature luxurious.",
                        author: "Jessica"
                    }, (err, comment) => {
                        if (err) {
                            console.log(err);
                        } else {
                            campground.comments.push(comment);
                            campground.save();
                            console.log("New comment created");
                        }
                    });
                }
            });
        });
    });
}

module.exports = seedDB;