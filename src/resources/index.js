//. there will be a list of these - user can activate multiple or make their own

export const reminder = {
  title: "Psyche reminder",
  options: {
    body: `Take a mindful pause. Be an observer of your thoughts and feelings.`,
    icon: require("../assets/icons/icon.png")
  },
  schedule: {
    // every: "5 seconds" //. handle number prefixes
    // every: "minute"
    every: "hour"
  }
}

//. these can be resources from the cloud db and hosting and cdn

export const background = {
  title: "Cliffs of Moher",
  author: "Vincent Guth",
  image: require("./backgrounds/vincent-guth-ISI5DlnYvuY-unsplash.jpg"),
  source: "https://unsplash.com/photos/rock-formation-above-water-ISI5DlnYvuY"
}

// local images
// const image = require("./backgrounds/pexels-min-an-920534.jpg") // stars
// const image = require("./backgrounds/pexels-pixabay-326055.jpg") // butterflies
// const image = require("./backgrounds/purple_and_white_flowers_during_windy_day (720p).mp4")

// remote images
// const image = { uri: "https://foo.com/resources/backgrounds/pexels-min-an-920534.jpg" }
