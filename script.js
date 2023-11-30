function book(title,author,pages)
{
    this.title = title;
    this.author = author;
    this.pages = pages;

    this.info = function()
    {
        console.log(this.title+" by "+this.author+","+this.pages)
    };
}

const theHobbit = new book("The hobbit","J.R.R. Tolkien","295 pages");
theHobbit.info();
