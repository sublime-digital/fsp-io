import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-two',
    templateUrl: './two.component.html',
    styleUrls: ['./two.component.css'],
    standalone: false
})
export class TwoComponent implements OnInit {

  //@Input() firstname: Customer;


  constructor() { }

  ngOnInit(): void {
  }

  question = ""

  allquestions = [
    "Describe what is a soliloquy",
    "Describe what is an aside in drama",
    "In writer Virginia Woolf's <a href='https://amzn.to/3MSAtrb'>'Mrs. Dalloway'</a> what is the backstory of character Septimus Smith?",
    "Why is important to be succinct in your writing?",
    "Why should we check our facts?",
    "How can active listening help our communications?",
    "What is the plotline of <a href='https://amzn.to/3MSAtrb'>Catcher & the Rye?</a>",
    "What is the plotline of <a href='https://amzn.to/3MSAtrb'>Mrs. Dalloway?</a>",
    "What are 3 novels by Jane Austen?",
    "Who is the writer of <a href='https://amzn.to/3MSAtrb'>Catch 22?</a>",
    "Who is the writer of <a href='https://amzn.to/3MSAtrb'>The Great Gatsby?</a>",
    "What is the plotnline of <a href='https://amzn.to/3MSAtrb'>Robinson Crusoe?</a>",
    "Who is the main character of Jane Austen's novel <a href='https://amzn.to/3MSAtrb'>'Emma'</a>?",
    "Who is the main character of Mary Shelly's novel <a href='https://amzn.to/3MSAtrb'>'Frankenstein'</a>?",
    "Who authored the novel <a href='https://amzn.to/3MSAtrb'>'Jane Eyre'</a>?",
    "What is the plotline of <a href='https://amzn.to/3MSAtrb'>'Wuthering Heights'</a>?",
    "Who is writer of the classic <a href='https://amzn.to/3MSAtrb'>'David Copperfield'</a>?",
    "What is plotline of <a href='https://amzn.to/3MSAtrb'>'The Scarlet Letter'</a>?",
    "What is plotline of <a href='https://amzn.to/3MSAtrb'>'The Moonstone'</a>?",
    "What is plotline of <a href='https://amzn.to/3q9ug1l'>'The Adventure of Huckleberry Finn'</a>",
    "What is the ending of <a href='https://amzn.to/3MSAtrb'>'The Sign of Four'</a>?",
    "Please summarize <a href='https://amzn.to/3MSAtrb'>'Treasure Island'</a> by Robert Louis Stevenson",
    "Please summarize <a href='https://amzn.to/3MSAtrb'>'Moby Dick'</a> by Herman Melvillen",
    "Please summarize <a href='https://amzn.to/3MSAtrb'>'Gulliver's Travels'</a> by Jonathan Swift",
    "Please summarize <a href='https://amzn.to/3MSAtrb'>'The Pilgrim's Progress'</a> by John Bunyan",
    "Please summarize <a href='https://amzn.to/3MSAtrb'>'A Tale of Two Cities'</a> by Charles Dickens",
    "Please summarize <a href='https://amzn.to/3MSAtrb'>'Great Expectations'</a> by Charles Dickens",
    "Please summarize <a href='https://amzn.to/3MSAtrb'>'Oliver Twist'</a> by Charles Dickens",
    "Please summarize <a href='https://amzn.to/3MSAtrb'>'Uncle Tom's Cabin'</a> by Harriet Beecher Stowe",
    "Please summarize <a href='https://amzn.to/3MSAtrb'>'The Wizard of Oz'</a> by L. Frank Baum",
    "Please summarize <a href='https://amzn.to/3MSAtrb'>'The Secret Garden'</a> by Frances Hodgson Burnett",
    "Please summarize <a href='https://amzn.to/3MSAtrb'>'The Little Prince'</a> by Antoine de Saint-Exupéry",
    "Please summarize <a href='https://amzn.to/3MSAtrb'>'The Wind in the Willows'</a> by Kenneth Grahame",
    "Please summarize <a href='https://amzn.to/3MSAtrb'>'Anna Karenina'</a> by Leo Tolstoy",
    "Please summarize <a href='https://amzn.to/3MSAtrb'>'Sense and Sensibility'</a> by Jane Austin",
    "Please summarize <a href='https://amzn.to/3MSAtrb'>'Heidi'</a> by Johanna Spyri",
    "Please summarize <a href='https://amzn.to/3MSAtrb'>'The Count of Monte Cristo'</a> by Alexandre Dumas",
    "What are the themes in <a href='https://amzn.to/3MSAtrb'>'The Picture of Dorian Gray'</a>?",
  ]

  getNew() {
    this.question = this.allquestions[Math.floor(Math.random()*this.allquestions.length)];
  }

}
