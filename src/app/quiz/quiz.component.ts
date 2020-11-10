import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  constructor() { }
  questions = [
    {
      text : "1. Was the FIFA World Cup was played in 2019?",
      hints : ["The last FIFA world cup was held in 2014"],
      choice : [
        {
          text : "True",
          isCorrect : false,
          feedback : "Right answer"
        },

        {
          text : "False",
          isCorrect : true,
          feedback : "FIFA world cup was held in 2018"
        }

      ]
    },
    {
      text : "2. France won the FIFA World Cup 2018 after 22 years?",
      hints : ["Last time France won was didier deschamps was playing"],
      choice : [
        {
          text : "True",
          isCorrect : true,
          feedback : "2018 FIFA World Cup was played between France and Croatia"
        },
        {
          text : "False",
          isCorrect : false,
          feedback : "Wrong answer"
        }
      ]
    },
    {
      text : "3. Who was the top scorer in FIFA World Cup 2018?",
      hints : ["This player plays for spurs and england"],
      choice : [
        {
          text : "Rashford",
          isCorrect : false,
          feedback : "Wrong answer"
        },
        {
          text : "Muller",
          isCorrect : false,
          feedback : "Wrong answer"
        },
        {
          text : "Harry Kane",
          isCorrect : true,
          feedback : "Scored 6 goals"
        },
        {
          text : "Dele Alli",
          isCorrect : false,
          feedback : "Wrong answer"
        }

      ]
    },
    {
      text : "4. Who scored the first goal of the 2018 FIFA World Cup?",
      hints : ["This player scored 2 goals and made 1 assist"],
      choice : [
        {
          text : "Yury Gazinsky",
          isCorrect : true,
          feedback : "First goal in 20 mins"
        },
        {
          text : "Aleksandr Golovin",
          isCorrect : false,
          feedback : "Wrong answer"
        },
        {
          text : "Denis Cheryshev",
          isCorrect : false,
          feedback : "Wrong answer"
        },
        {
          text : "Zhirkov",
          isCorrect : false,
          feedback : "Wrong answer"
        }

      ]
    },
    {
      text : "5. Which team scored the most goals at the World Cup?",
      hints : ["This team finished third in FIFA World Cup"],
      choice : [
        {
          text : "Belgium",
          isCorrect : true,
          feedback : "16 goals were scored"
        },
        {
          text : "England",
          isCorrect : false,
          feedback : "Wrong answer"
        },
        {
          text : "France",
          isCorrect : false,
          feedback : "Wrong answer"
        },
        {
          text : "Russia",
          isCorrect : false,
          feedback : "Wrong answer"
        }

      ]
    },
    {
      text : "6. Which goalkeeper made the most saves?",
      hints : ["This team finished third in FIFA World Cup"],
      choice : [
        {
          text : "Courtois",
          isCorrect : true,
          feedback : "Made 27 saves"
        },
        {
          text : "Lloris",
          isCorrect : false,
          feedback : "Wrong answer"
        },
        {
          text : "Pickford",
          isCorrect : false,
          feedback : "Wrong answer"
        },
        {
          text : "David de gea",
          isCorrect : false,
          feedback : "Wrong answer"
        }

      ]
    },
    {
      text : "7. Who scored the last goal of the FIFA World Cup 2018?",
      hints : ["This team became the runners up of FIFA World Cup"],
      choice : [
        {
          text : "Mbappe",
          isCorrect : false,
          feedback : "Wrong answer"
        },
        {
          text : "Mandzukic",
          isCorrect : true,
          feedback : "Made it 4-2"
        },
        {
          text : "Modric",
          isCorrect : false,
          feedback : "Wrong answer"
        },
        {
          text : "Rakitic",
          isCorrect : false,
          feedback : "Wrong answer"
        }

      ]
    },
    {
      text : "8. Who team conceded most goals in FIFA World Cup 2018?",
      hints : ["Felipe Baloy who is aged 37 plays here"],
      choice : [
        {
          text : "Saudi Arabia",
          isCorrect : false,
          feedback : "Wrong answer"
        },
        {
          text : "Panama",
          isCorrect : true,
          feedback : "Conceded 11 goals on debut"
        },
        {
          text : "Egypt",
          isCorrect : false,
          feedback : "Wrong answer"
        },
        {
          text : "Argentina",
          isCorrect : false,
          feedback : "Wrong answer"
        }

      ]
    },
    {
      text : "9. Who won the best young player award?",
      hints : ["He plays for PSG"],
      choice : [
        {
          text : "Mbappe",
          isCorrect : true,
          feedback : "Aged 19 years"
        },
        {
          text : "Modric",
          isCorrect : false,
          feedback : "Wrong answer"
        },
        {
          text : "Pogba",
          isCorrect : false,
          feedback : "Wrong answer"
        },
        {
          text : "Martial",
          isCorrect : false,
          feedback : "Wrong answer"
        }

      ]
    },
    {
      text : "10. What was the approximate attendance in the World Cup final?",
      hints : ["Lesser than the Wembley stadium capacity"],
      choice : [
        {
          text : "70,000",
          isCorrect : true,
          feedback : "78,011 exactly"
        },
        {
          text : "90,000",
          isCorrect : false,
          feedback : "Wrong answer"
        },
        {
          text : "1,20,000",
          isCorrect : false,
          feedback : "Wrong answer"
        },
        {
          text : "50,000",
          isCorrect : false,
          feedback : "Wrong answer"
        }

      ]
    }
  ]


  ngOnInit(): void {
  }

}
