
// Check if the user is ready to play!
confirm("are you ready to play?")

    age = prompt("what's your age?")

    if (age < 13)
        {
            console.log("ok, you can play but we aren't responsible for the res\
ults!")
        }
    else
        {
            console.log("hey there you adult, play on!")
                }

console.log("You are at a Justin Bieber concert, and you hear this lyric 'Lace \
my shoes off, start racing.'")

    console.log("Suddenly, Bieber stops and says, 'Who wants to race me?'")

    userAnswer = prompt("do you want to race Bieber on stage?")
    if(userAnswer === "yes")
        {
            console.log("You and Bieber start racing. It's neck and neck! You w\
in by a shoelace!")
        }
    else
        {
            console.log("Oh no! Bieber shakes his head and sings 'I set a pace,\
 so I can race without pacing.'")
		}


feedback = prompt("rate this game from 1 to 10!")

    if(feedback > 8)
        {
            console.log("Thank you! We should race at the next concert!")
	}
    else
	{
	    console.log("I'll keep practicing coding and racing.")
		}


