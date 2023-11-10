const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

let date = new Date();
let month = months[date.getMonth()] + ' 22, ' + date.getFullYear();

const movies = [
  
  {
    id: 1,
    title: "Avatar: The Way of Water",
    content: "Jake Sully lives with his newfound family formed on the planet of Pandora. Once a familiar threat returns to finish what was previously started, Jake must work with Neytiri and the army of the Na'vi race to protect their planet.    ",
    genre: "Action, Aventure & Fantasy",
    duration: "105",
    Date: month, //oki
    img: "https://m.media-amazon.com/images/M/MV5BMWFmYmRiYzMtMTQ4YS00NjA5LTliYTgtMmM3OTc4OGY3MTFkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_.jpg",
    bgimg: "https://images4.alphacoders.com/761/76146.jpg",
    slot: 1, 
    casts:
    [
      {
        name: "Chris pratt",
        image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRzGnI__Ul05wKYDq3QYeoy1QbXXdWMvJpLezay515H6OiORtH-"
      },
      {
        name: "Zoe Saldaña",
        image: "https://flxt.tmsimg.com/assets/194024_v9_bb.jpg",
      },
      {
        name: "Dave Bautista",
        image: "https://img.redbull.com/images/c_limit,w_1500,h_1000,f_auto,q_auto/redbullcom/2020/2/7/nk7g57wzun7st7gnbccu/dave-bautista",
      }
    ],
    price: 300,
    video: "avatar.mp4",

    category: "fantasy"
  },
  {
    id: 2,
    title: "Thor Love and Thunder",
    content: "Thor enlists the help of Valkyrie, Korg and ex-girlfriend Jane Foster to fight Gorr the God Butcher, who intends to make the gods extinct.",
    Date: month,
    duration: "118",
    genre: "Action-Adventure, Comedy, Fantasy, Romance & Superhero",
    img: "https://lumiere-a.akamaihd.net/v1/images/p_thorloveandthunder_639_593cb642.jpeg",
    bgimg: "https://i.ytimg.com/vi/pX2PO-LOXc0/maxresdefault.jpg",
    casts:
    [
      {
        name: "Chris Hemsworth",
        image: "https://flxt.tmsimg.com/assets/528854_v9_bb.jpg"
      },
      {
        name: "Natalie Portman",
        image: "https://m.media-amazon.com/images/M/MV5BYzU0ZGRhZWItMGJlNy00YzlkLWIzOWYtNDA2NzlhMDg3YjMwXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg",
      },
      {
        name: "Christian Bale",
        image: "https://upload.wikimedia.org/wikipedia/commons/0/0a/Christian_Bale-7837.jpg",
      } 
      ],
    slot: 4,
    price: 300,
    video: "marvel.mp4",

    category: "action"
  },
  {
    id: 3,
    title: "Black Panther: Wakanda Forever",
    content: "The nation of Wakanda is pitted against intervening world powers as they mourn the loss of their king T'Challa.    ",
    Date: month,
    duration: "104",
    genre: "Adventure, Action & Drama",
    img: "https://cosmicbook.news/wp-content/uploads/2022/10/black-panther-wakanda-forever-cp-6-810x1200.jpg",
    bgimg: "https://images.thedirect.com/media/article_full/black-panther-wakanda-forever-character-posters-mcu-marvel.jpg",
    slot: 6,
    price: 300,
    casts:
    [
      {
        name: "Martin Freeman",
        image: "https://m.media-amazon.com/images/M/MV5BMjE0MjAwOTMzMF5BMl5BanBnXkFtZTcwMDg1MjEyNw@@._V1_.jpg"
      },
      {
        name: "Angela Basset",
        image: "https://upload.wikimedia.org/wikipedia/commons/6/68/Angela_Bassett_by_Gage_Skidmoe.jpg",
      },
      {
        name: "Lupita Nyong'o",
        image: "https://upload.wikimedia.org/wikipedia/commons/3/34/SXSW_2019_4_%2847282558132%29_%28cropped%29.jpg",
      } 
      ],
    video: "wakanda.mp4",
  
    category: "action"
  },
  
  {
    id: 4,
    title: "Emergency Declaration",
    content: "After a terror incident occurs mid-flight, a passenger jet declares an emergency.    ",
    Date: month,
    duration: "141",
    genre: "Action, Drama & Thriller",
    img: "https://kdramadiary.com/wp-content/uploads/2022/09/Emergency-Declaration-kdramadiary-c.jpg",
    bgimg: "https://makassar.terkini.id/wp-content/uploads/2022/07/terkiniid_untitled-18.jpg",
    slot: 7,
    casts:
    [
      {
        name: "Martin Freeman",
        image: "https://m.media-amazon.com/images/M/MV5BMjE0MjAwOTMzMF5BMl5BanBnXkFtZTcwMDg1MjEyNw@@._V1_.jpg"
      },
      {
        name: "Angela Basset",
        image: "https://upload.wikimedia.org/wikipedia/commons/6/68/Angela_Bassett_by_Gage_Skidmoe.jpg",
      },
      {
        name: "Lupita Nyong'o",
        image: "https://upload.wikimedia.org/wikipedia/commons/3/34/SXSW_2019_4_%2847282558132%29_%28cropped%29.jpg",
      } 
      ],
    price: 300,
    video: "emergency-declaration.mp4",

    category: "action"
  },
  {
    id: 5,
    title: "Spider-Man No Way Home",
    content: "Spider-Man seeks the help of Doctor Strange to forget his exposed secret identity as Peter Parker. However, Strange's spell goes horribly wrong, leading to unwanted guests entering their universe.",
    Date: month,
    duration: "148",
    genre: "Action, Adventure & Fantasy",
    img: "https://www.sonypictures.com/sites/default/files/styles/max_560x840/public/title-key-art/spidermannowayhome_onesheet_rating.jpg?itok=tjZOthvB",
    bgimg: "https://coolthemestores.com/wp-content/uploads/2022/01/spider-man-no-way-home-wallpaper-background.jpg",
    slot: 5,
    price: 300,
    casts:
    [
      {
        name: "Tom Holland",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Tom_Holland_by_Gage_Skidmore.jpg/1200px-Tom_Holland_by_Gage_Skidmore.jpg"
      },
      {
        name: "Zendaya",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Zendaya_-_2019_by_Glenn_Francis.jpg/640px-Zendaya_-_2019_by_Glenn_Francis.jpg",
      },
      {
        name: "Benedict Cumberbatch",
        image: "https://m.media-amazon.com/images/M/MV5BMjE0MDkzMDQwOF5BMl5BanBnXkFtZTgwOTE1Mjg1MzE@._V1_.jpg",
      } 
      ],
      video: "spiderman.mp4",

    category: "action"
  },
  {
    id: 6,
    title: "One Piece Film: Red",
    content: "For the first time ever, Uta - the most beloved singer in the world - will reveal herself to the world at a live concert. The voice that the whole world has been waiting for is about to resound.    ",
    Date: month,
    duration: "115",
    genre: "Animation, Action & Adventure",
    img: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQwBT7XzacboMfZC6b89A5J6Mx0tyGv9kV0cIUzp-YzGpfRlMWk",
    bgimg: "https://areajugones.sport.es/wp-content/uploads/2022/07/one-piece-film-red-estreno-espana.jpg",
    casts:
    [
      {
        name: "Chō",
        image: "https://cdn.myanimelist.net/images/voiceactors/3/54628.jpg"
      },
      {
        name: "Hiroaki Hirata",
        image: "https://m.media-amazon.com/images/M/MV5BMjNhNzgzY2ItZDQwNC00MmQ2LWJhMDUtODU3MTJkMDhkZmRkXkEyXkFqcGdeQXVyNDQxNjcxNQ@@._V1_.jpg",
      },
      {
        name: "Shūichi Ikeda",
        image: "https://static.wikia.nocookie.net/pacificrim/images/9/93/Shuichi_Ikeda.jpg/revision/latest?cb=20140715214943",
      } 
      ], slot: 9,
    price: 300,
    video: "onepiece.mp4",
    category: "fantasy"
  },

  {
    id: 7,
    title: "The Invitation",
    content: "A young woman is courted and swept off her feet, only to realize a gothic conspiracy is afoot. A young woman is courted and swept off her feet, only to realize a gothic conspiracy is afoot. A young woman is courted and swept off her feet, only to realize a gothic conspiracy is afoot.",
    genre: "Horror, Mystery & Thriller",
    duration: "105",
    Date: month,
    img: "https://dx35vtwkllhj9.cloudfront.net/sonypictures/the-invitation/images/regions/us/onesheet.jpg",
    bgimg: "https://dx35vtwkllhj9.cloudfront.net/sonypictures/the-invitation/images/regions/us/share.png",
    slot: 2, casts:
    [
      {
        name: "Nathalie Emmanuel",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Nathalie_Emmanuel_by_Gage_Skidmore.jpg/1200px-Nathalie_Emmanuel_by_Gage_Skidmore.jpg"
      },
      {
        name: "Thomas Doherty",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Thomas_Doherty_2019_by_Glenn_Francis.jpg/1200px-Thomas_Doherty_2019_by_Glenn_Francis.jpg",
      },
      {
        name: "Sean Pertwee",
        image: "https://upload.wikimedia.org/wikipedia/commons/e/eb/Sean_Pertwee_2017.jpg",
      } 
      ],
      video: "the-invitation.mp4",
    price: 300,

    category: "fantasy"
  },
  {
    id: 8,
    title: "Expensive Candy",
    content: "Candy is a sex worker. A poor teacher, Toto (Carlo Aquino), falls in love with her and she becomes his motivation to work hard.    ",
    Date: month,
    duration: "104",
    genre: "Romance, R18",
    img: "https://m.media-amazon.com/images/M/MV5BM2VkNDU1NDAtOTE1MC00MTgzLWJhMGQtZWZiOTE3MjQ1YjcwXkEyXkFqcGdeQXVyMTMzODk3NDU0._V1_.jpg",
    bgimg: "https://villagepipol.com/wp-content/uploads/2022/08/Expensive-Candy-FI.jpeg",
    slot: 8, casts:
    [
      {
        name: "Carlo Aquino",
        image: "https://i.mydramalist.com/eAdoq_5f.jpg"
      },
      {
        name: "Julia Barretto",
        image: "https://yt3.ggpht.com/ZYzfuB3_L8p43CwwGT8-7kPEXoVNmPWHd_e-2mIxGcUoFdX9GuLJh3LBiorh1EsVzM7ucGdEhg=s900-c-k-c0x00ffffff-no-rj",
      },
      {
        name: "Quinn Carrillo",
        image: "https://m.media-amazon.com/images/M/MV5BOGVmMTAxNTgtZWQ5NS00MWY1LTk3NWUtMDNhZDM5OWYyNWRhXkEyXkFqcGdeQXVyNTI5NjIyMw@@._V1_.jpg",
      } 
      ],
    price: 300,
    video: "expensive-candy.mp4",
    category: "fantasy"
  },
  {
    id: 9,
    title: "Black Adam",
    content: "Nearly 5,000 years after he was bestowed with the almighty powers of the Egyptian gods-and imprisoned just as quickly-Black Adam (Johnson) is freed from his earthly tomb, ready to unleash his unique form of justice on the modern world. ",
    Date: month,
    duration: "106",
    genre: " Action/Fantasy",
    img: "https://m.media-amazon.com/images/M/MV5BNmEwODNmOTYtMWRmYS00ZTEzLWJmNTAtMWQ4OWVlMzU0MWIyXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg",
    bgimg: "https://www.riseupfilm.com/wp-content/uploads/2022/08/black-adam-poster.webp",
    slot: 10, casts:
    [
      {
        name: "Viola Davis",
        image: "https://upload.wikimedia.org/wikipedia/commons/8/85/Viola_Davis_by_Gage_Skidmore.jpg"
      },
      {
        name: "Dwayne Johnson",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Dwayne_Johnson_2014_%28cropped%29.jpg/640px-Dwayne_Johnson_2014_%28cropped%29.jpg",
      },
      {
        name: "Sarah Shahi",
        image: "https://m.media-amazon.com/images/M/MV5BMTU0MzE2NTI1NV5BMl5BanBnXkFtZTcwODcwMzMwOQ@@._V1_.jpg",
      } 
      ],
      video: "black-adam.mp4",
    price: 300,

    category: "action"
  }, 
  {
    id: 10,
    title: "Pinocchio ",
    content: "Despite guidance from the Blue Fairy and the love of his father, a wooden puppet's curious spirit leads him into one wild adventure after another.   ",
    Date: month,
    duration: "104",
    genre: "Kids, Family & Fantasy",
    img: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4a/Pinocchio_%282022_animated_film%29.jpg/220px-Pinocchio_%282022_animated_film%29.jpg",
    bgimg: "https://i0.wp.com/www.awn.com/sites/default/files/styles/large_featured/public/image/featured/gdt-p1-1280.jpg?resize=780,470",
    slot: 6,
    price: 300,    casts:
    [
      {
        name: "Joseph Gordon-Levitt",
        image: "https://m.media-amazon.com/images/M/MV5BMTY3NTk0NDI3Ml5BMl5BanBnXkFtZTgwNDA3NjY0MjE@._V1_.jpg"
      },
      {
        name: "Tom Hanks",
        image: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Tom_Hanks_TIFF_2019.jpg",
      },
      {
        name: "Benjamin Evan Ainsworth",
        image: "https://m.media-amazon.com/images/M/MV5BYzc5ODIwZjktNTJmMy00NzQ0LWE2ZWMtZmQ0OTMyMjRhZTllXkEyXkFqcGdeQXVyOTcwNTQxNDU@._V1_.jpg",
      } 
      ],
      video: "Pinocchio.mp4",
    category: 'Kids'

  },
  {
    id: 11,
    title: "365 DNI ",
    content: "Despite guidance from the Blue Fairy and the love of his father, a wooden puppet's curious spirit leads him into one wild adventure after another.   ",
    Date: month,
    bgimg: "https://i.ytimg.com/vi/d65EvA4tiS4/maxresdefault.jpg",
    img: "https://images.ottplay.com/posters/365_Days__This_Day_2022_movie_poster_1_124.jpeg",
    genre: "Kids, Family & Fantasy",
    casts:
    [
      {
        name: "Anna-Maria Sieklucka",
        image: "https://upload.wikimedia.org/wikipedia/commons/9/9b/Anna-Maria_Sieklucka_%282020%29.jpg"
      },
      {
        name: "Michele Morrone",
        image: "https://media1.popsugar-assets.com/files/thumbor/HmPACIgxxK8U8_FejB5IKa4-mDg/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2022/09/26/714/n/1922398/tmp_pDzS5W_fdc9ca250c678e0c_GettyImages-1426893905.jpg",
      },
      {
        name: "Simone Susinna",
        image: "https://mediaslide-us.storage.googleapis.com/heroes/pictures/445/5820/large-1615411863-95708cef5b7d97ebfe810d4a8fa354cd.jpg",
      } 
      ],
      video: "365DNI.mp4",
      price: 300,
      category: ['Kids', 'family',]
      
  },
  {
    id: 12,
    title: "The Ritual ",
    content: "A group of old college friends reunite for a trip to a forest in Sweden, Northern Europe, but encounter a menacing presence there stalking them.",
    Date: month,
    bgimg: "https://i0.wp.com/www.awn.com/sites/default/files/styles/large_featured/public/image/featured/gdt-p1-1280.jpg?resize=780,470",
    img: "https://m.media-amazon.com/images/I/51Rgahcy4RL._AC_.jpg",
    genre: "Kids, Family & Fantasy",
    casts:
    [
      {
        name: "Rafe Spall",
        image: "https://www.themoviedb.org/t/p/w500/zcqUqAvO7RQnitcCNNfTVPaiQtS.jpg"
      },
      {
        name: "Arsher Ali",
        image: "https://m.media-amazon.com/images/M/MV5BYjQyYmZiYmItYzE0NS00NzllLTk2OTAtMjdlYjBmZThlY2I4XkEyXkFqcGdeQXVyMTYxODQzOA@@._V1_UY1200_CR124,0,630,1200_AL_.jpg",
      },
      {
        name: "Robert James-Collier",
        image: "https://upload.wikimedia.org/wikipedia/commons/2/22/Robert_James-Collier_May_2014_%28cropped%29.jpg",
      } 
      ],
      video: "the-ritual.mp4",
      price: 300,
      category: "action"
  },
]


export default movies;