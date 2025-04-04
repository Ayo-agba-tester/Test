const books = {
    title: 'Tinubu',
    description: 'How to kill economy',
    numberOfPages: 2027,
    author: 'Onanuga',
    reading: true,
    toggleReadingStatus:function(){
        return this.reading = !this.reading;
    }
}
console.log(books.toggleReadingStatus())