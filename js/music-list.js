// To add more song, just copy the following code and paste inside the array

//   {
//     name: "Here is the music name",
//     artist: "Here is the artist name",
//     img: "image name here - remember img must be in .jpg formate and it's inside the images folder of this project folder",
//     src: "music name here - remember img must be in .mp3 formate and it's inside the songs folder of this project folder"
//   }

//paste it inside the array as more as you want music then you don't need to do any other thing

let allMusic = [
  {
    name: "Abhi Abhi Toh Mile Ho",
    artist: "K.K, Shreya Ghoshal",
    img: "music-1",
    src: "music-1"
  },
  {
    name: "Laapata",
    artist: "K.k & Palak Muchhal",
    img: "music-2",
    src: "music-2"
  },
  {
    name: "Tujhi Mein",
    artist: "KK",
    img: "music-3",
    src: "music-3"
  },
  {
    name: "DIL IBAADAT",
    artist: "K.K",
    img: "music-4",
    src: "music-4"
  },
  {
    name: "Yaaron",
    artist: "KK",
    img: "music-5",
    src: "music-5"
  },
  {
    name: "Soniye",
    artist: "KK",
    img: "music-6",
    src: "music-6"
  },
  {
    name: "HAAN TU HAI",
    artist: "KK",
    img: "music-7",
    src: "music-7"
  },
  {
    name: "Khwabon Khwabon",
    artist: "K.K",
    img: "music-8",
    src: "music-8"
  },
  {
    name: "Hai Junoon",
    artist: "K.K",
    img: "music-9",
    src: "music-9"
  },
  {
    name: "Tum Ho Mera Pyar",
    artist: "K.K",
    img: "music-10",
    src: "music-10"
  },
  {
    name: "Zara Sa",
    artist: "KK ",
    img: "music-11",
    src: "music-11"
  },
  {
    name: "Kabhi Aayine Pe Likha Tujhe",
    artist: "K.K",
    img: "music-12",
    src: "music-12"
  },
  {
    name: "KHUDA JAANE",
    artist: "K.K",
    img: "music-13",
    src: "music-13"
  },
  {
    name: "Labon Ko",
    artist: "K.K",
    img: "music-14",
    src: "music-14"
  },
  {
    name: "O Humdum Suniyo Re",
    artist: "K.K",
    img: "music-15",
    src: "music-15"
  },
  {
    name: "O Meri Jaan❤",
    artist: "K.K",
    img: "music-16",
    src: "music-16"
  },
  {
    name: "Sajde Kiye Hain Lakhon",
    artist: "K.K",
    img: "music-17",
    src: "music-17"
  },
  {
    name: "Soniye | Heartless ",
    artist: "K.K",
    img: "music-18",
    src: "music-18"
  },
  {
    name: "TERI YAADON MEIN",
    artist: "K.K",
    img: "music-19",
    src: "music-19"
  },
  {
    name: "Sun Zara",
    artist: "K.K",
    img: "music-20",
    src: "music-20"
  },
  {
    name: "Tu Hi Meri Shab Ha",
    artist: "K.K",
    img: "music-21",
    src: "music-21"
  },
  {
    name: "Jeet",
    artist: "Ritviz",
    img: "music-22",
    src: "music-22"
  },
  {
    name: "Udd Gaye",
    artist: "Ritviz",
    img: "music-23",
    src: "music-23"
  },
  {
    name: "Mast Magan",
    artist: "Arijit Singh",
    img: "music-24",
    src: "music-24"
  },
  {
    name: "Hamdard ",
    artist: "Arijit Singh",
    img: "music-25",
    src: "music-25"
  },
  {
    name: "HAWAYEIN",
    artist: "Arijit Singh",
    img: "music-26",
    src: "music-26"
  },
  {
    name: "Tu Hi Hai Aashiqui ",
    artist: " Arijit Singh , Palak Muchhal",
    img: "music-27",
    src: "music-27"
  },
  {
    name: "Khairiyat Puchho",
    artist: "Arijit Singh",
    img: "music-28",
    src: "music-28"
  },
  {
    name: "SAMJHAWAN ",
    artist: "Arijit Singh",
    img: "music-29",
    src: "music-29"
  },
  {
    name: "Phir Kabh",
    artist: "Arijit Singh",
    img: "music-30",
    src: "music-30"
  },
  {
    name: "JANAM JANAM",
    artist: "Arijit Singh",
    img: "music-31",
    src: "music-31"
  },
  {
    name: "JUDAAI",
    artist: "ARIJIT SINGH, REKHA BHARDWAJ",
    img: "music-32",
    src: "music-32"
  },
  {
    name: "AABAAD BARBAAD ",
    artist: "Arijit Singh",
    img: "music-33",
    src: "music-33"
  },
  {
    name: "HAMARI ADHURI KAHANI",
    artist: "Arijit Singh",
    img: "music-34",
    src: "music-34"
  },
  {
    name: "NAINA",
    artist: "Arijit Singh",
    img: "music-35",
    src: "music-35"
  },
  {
    name: "PYAR KE PAL ",
    artist: " KK ",
    img: "music-36",
    src: "music-36"
  },
  {
    name: "TUMHI DEKHO NA",
    artist: "SONU NIGAM, ALKA YAGNIK",
    img: "music-37",
    src: "music-37"
  },
  {
    name: "BOL DO NA ZARA ",
    artist: "ARMAAN MALIK",
    img: "music-38",
    src: "music-38"
  },
  {
    name: "GERUA",
    artist: "ARIJIT SINGH, ANTARA MITRA",
    img: "music-39",
    src: "music-39"
  },
  {
    name: "ABHI KUCH DINO SE",
    artist: "MOHIT CHAUHAN",
    img: "music-40",
    src: "music-40"
  },
  {
    name: "PEE LOON",
    artist: "MOHIT CHAUHAN ",
    img: "music-41",
    src: "music-41"
  },
  {
    name: "TUNE JO NA KAHA",
    artist: "MOHIT CHAUHAN",
    img: "music-42",
    src: "music-42"
  },
  {
    name: "Phir Se Ud Chala",
    artist: "MOHIT CHAUHAN",
    img: "music-43",
    src: "music-43"
  },
  {
    name: "TUM MILE",
    artist: "JAVED ALI",
    img: "music-44",
    src: "music-44"
  },
  {
    name: "DOORIYAN ",
    artist: " Mohit Chauhan ",
    img: "music-45",
    src: "music-45"
  },
  {
    name: "Apnaa Mujhe Tu Lagaa ",
    artist: "Aftab Shivdasani, Sonu Nigam",
    img: "music-46",
    src: "music-46"
  },
  {
    name: "Judaa",
    artist: " Arijit Singh ",
    img: "music-47",
    src: "music-47"
  },
  {
    name: "Saiyyan ",
    artist: " Kailash Kher ",
    img: "music-48",
    src: "music-48"
  },
  {
    name: "Uska Hi Banana ",
    artist: " Arijit Singh ",
    img: "music-49",
    src: "music-49"
  },
  {
    name: "Le Le Maza Le",
    artist: " Suzanne D'Mello, Soumya Raoh, Hrishikesh Kamerkar, Nikita Nigam ",
    img: "music-50",
    src: "music-50"
  },
  {
    name: "Parda",
    artist: "Sunidhi Chauhan & Rana Mazumder",
    img: "music-51",
    src: "music-51"
  },
  {
    name: "AADAT ",
    artist: "ATIF ASLAM ",
    img: "music-52",
    src: "music-52"
  },
  {
    name: "Main Agar Saamne ",
    artist: " Abhijeet & Alka Yagnik ",
    img: "music-53",
    src: "music-53"
  },
  {
    name: "Qatl-E-Aam",
    artist: " SONA MOHAPATRA ",
    img: "music-54",
    src: "music-54"
  },
  {
    name: "Tu Itni Khoobsurat Hai",
    artist: " Rahat Fateh Ali Khan",
    img: "music-55",
    src: "music-55"
  },
  {
    name: "Jo Bhi Kasmein",
    artist: "Udit Narayan & Alka Yagnik",
    img: "music-56",
    src: "music-56"
  },
  {
    name: "Judai ",
    artist: " Kamran Ahmed ",
    img: "music-57",
    src: "music-57"
  },
  {
    name: "WOH LAMHEIN WOH BAATEIN",
    artist: " ATIF ASLAM  ",
    img: "music-58",
    src: "music-58"
  },
  {
    name: "Main Yahaan Hoon",
    artist: "Udit Narayan ",
    img: "music-59",
    src: "music-59"
  },
  {
    name: "Kal Ho Naa Ho ",
    artist: " Sonu Nigam ",
    img: "music-60",
    src: "music-60"
  },
  {
    name: "TERI JHUKI NAZAR",
    artist: " Shafqat Amanat Ali ",
    img: "music-61",
    src: "music-61"
  },
  {
    name: "TU HI HAQEEQAT ",
    artist: " Javed Ali ",
    img: "music-62",
    src: "music-62"
  },
  {
    name: "Likhe Jo Khat Tujhe",
    artist: " Sonu Nigam ",
    img: "music-63",
    src: "music-63"
  },
  {
    name: "ABHI MUJH MEIN KAHIN",
    artist: " Sonu Nigam ",
    img: "music-64",
    src: "music-64"
  },
  {
    name: "SAPNA JAHAN",
    artist: "SONU NIGAM, NEETI MOHAN",
    img: "music-65",
    src: "music-65"
  },
  {
    name: "DO PAL ",
    artist: "LATA MANGESHKAR, SONU NIGAM",
    img: "music-66",
    src: "music-66"
  },
  {
    name: "Apnaa Mujhe Tu Lagaa ",
    artist: "SONU NIGAM",
    img: "music-67",
    src: "music-67"
  },
  {
    name: "Main Agar Kahoon ",
    artist: "SONU NIGAM",
    img: "music-68",
    src: "music-68"
  },
  {
    name: "Tere Bin",
    artist: "SONU NIGAM",
    img: "music-69",
    src: "music-69"
  },
  {
    name: "Kabhi Alvida Naa Kehna",
    artist: "SONU NIGAM",
    img: "music-70",
    src: "music-70"
  },
  {
    name: "Piyu Bole Piya Bole",
    artist: "Sonu Nigam, Shreya Ghoshal",
    img: "music-71",
    src: "music-71"
  },
  {
    name: "Shukran Allah",
    artist: " Shreya Ghoshal |Sonu Nigam",
    img: "music-72",
    src: "music-72"
  },
  {
    name: "Is Kadar Pyar Hai",
    artist: "SONU NIGAM",
    img: "music-73",
    src: "music-73"
  },
  {
    name: "On My Way",
    artist: "Alan Walker",
    img: "music-74",
    src: "music-74"
  },
  {
    name: "Ignite",
    artist: "K-391 & Alan Walker",
    img: "music-75",
    src: "music-75"
  },
  {
    name: "Faded",
    artist: "Alan Walker",
    img: "music-76",
    src: "music-76"
  },
  {
    name: "Lily",
    artist: "Alan Walker, K-391",
    img: "music-77",
    src: "music-77"
  },
  {
    name: " Love Me Like You Do",
    artist: "Ellie Goulding",
    img: "music-78",
    src: "music-78"
  },
  {
    name: " FRIENDS",
    artist: "Marshmello & Anne-Marie",
    img: "music-79",
    src: "music-79"
  },
  {
    name: "Memories",
    artist: "---------",
    img: "music-80",
    src: "music-80"
  },
  {
    name: "Cheap Thrills",
    artist: "Sia",
    img: "music-81",
    src: "music-81"
  },
  {
    name: "Shape of You",
    artist: "Ed Sheeran",
    img: "music-82",
    src: "music-82"
  },
  {
    name: " Safari",
    artist: "Serena",
    img: "music-83",
    src: "music-83"
  },
  {
    name: "Señorita",
    artist: "Geego Boy",
    img: "music-84",
    src: "music-84"
  },
  {
    name: "Unstoppable",
    artist: "Sia",
    img: "music-85",
    src: "music-85"
  },
  {
    name: "Broken Angel",
    artist: "Arash",
    img: "music-86",
    src: "music-86"
  },
  {
    name: "See You Again",
    artist: "Wiz Khalifa ",
    img: "music-87",
    src: "music-87"
  },
  {
    name: "Despacito",
    artist: "Justin Bieber",
    img: "music-88",
    src: "music-88"
  },
  {
    name: "Beggin",
    artist: "Måneskin",
    img: "music-89",
    src: "music-89"
  },
  {
    name: " Baby ft.",
    artist: "Justin Bieber",
    img: "music-90",
    src: "music-90"
  },
  {
    name: "My heart will go on",
    artist: "Céline Dion",
    img: "music-91",
    src: "music-91"
  },
  {
    name: "Aarambh hai Prachand",
    artist: "Piyush Mishra",
    img: "music-92",
    src: "music-92"
  },
  {
    name: "Dekho Aloy Alo Akash",
    artist: "Arijit Singh",
    img: "music-93",
    src: "music-93"
  },
  {
    name: "Tor Motoi ",
    artist: "nkush",
    img: "music-94",
    src: "music-94"
  },
  {
    name: "Shiddat",
    artist: "Yohani",
    img: "music-95",
    src: "music-95"
  },
  {
    name: "Barbaadiyan",
    artist: "Sachet Tandon, Nikhita Gandhi, Madhubanti Bagchi & Sachin- Jigar",
    img: "music-96",
    src: "music-96"
  },
  {
    name: "Jeene Laga Hoon",
    artist: "Atif Aslam",
    img: "music-97",
    src: "music-97"
  },
  {
    name: "Let Me Love You",
    artist: "DJ Snake ft. Justin Bieber",
    img: "music-98",
    src: "music-98"
  },
  {
    name: "ZINDAGI SE CHURAKE",
    artist: "SHAFQAT AMANAT ALI KHAN",
    img: "music-99",
    src: "music-99"
  },
  {
    name: "Aafreen",
    artist: "K.K, Antara Mitra",
    img: "music-100",
    src: "music-100"
  },
  {
    name: " Om Shanti Om",
    artist: "Shaan, Udit Narayan, Shreya Ghosal, Sunidhi Chauhan, Rahul Saxena",
    img: "music-101",
    src: "music-101"
  },
  {
    name: " Tumse Milke Dil ka Jo Haal Kiya Kare",
    artist: "Sonu Nigam, Aftab Sabti, Hashim Sabri",
    img: "music-102",
    src: "music-102"
  },
  {
    name: "Senorita",
    artist: "Farhan Akhtar, Hrithik Roshan",
    img: "music-103",
    src: "music-103"
  },
  {
    name: "Aankhon Mein Teri Ajab Si",
    artist: " K.K.",
    img: "music-104",
    src: "music-104"
  },
  {
    name: "Dil Tu Hi Bataa ",
    artist: " Alisha Chinai, Zubeen Garg.",
    img: "music-105",
    src: "music-105"
  },
  {
    name: "DIL CHEEZ TUJHE DEDI",
    artist: " Ankit Tiwari, Arijit Singh",
    img: "music-106",
    src: "music-106"
  },
  {
    name: "Dheere Dheere Se Meri Zindagi",
    artist: "Yo Yo Honey Singh",
    img: "music-107",
    src: "music-107"
  },



  
  // like this paste it and remember to give comma after ending of this bracket }
  // {
  //   name: "Here is the music name",
  //   artist: "Here is the artist name",
  //   img: "image name here - remember img must be in .jpg formate and it's inside the images folder of this project folder",
  //   src: "music name here - remember img must be in .mp3 formate and it's inside the songs folder of this project folder"
  // }
];