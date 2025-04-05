const books = [
 {
    title: 'Tinubu',
    description: 'How to kill economy',
    numberOfPages: 2027,
    author: 'Onanuga',
    reading: false
},
{
    title: 'June12',
    description: 'annulment of election',
    numberOfPages: 1993,
    author: 'Babangida',
    reading: true
},
{
    title: 'Baba Daura',
    description: 'second worst president ever',
    numberOfPages: 2015,
    author: 'Buhari',
    reading: true
},
{
    title: 'Rivers state',
    description: 'State of emergency',
    numberOfPages: 2025,
    author: 'Wike',
    reading: true
},
{    
    title: 'Kogi',
    description: 'the white lion',
    numberOfPages: 2024,
    author: 'Bello',
    reading: false
}
];
for(let currently = 0; currently < books.length; currently++){
    if (books[currently].reading) {
        console.log(`Currently Reading: ${books[currently].title} by ${books[currently].author}`);
      }
    }
    