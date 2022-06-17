import random 

def CreateNumber():
    digits = [0,1,2,3,4,5,6,7,8,9]
    digit1 = (random.choice(digits))
    digit2 = (random.choice(digits))
    digit3 = (random.choice(digits))
    digit4 = (random.choice(digits))

    num = str(digit1) + str(digit2) + str(digit3) + str(digit4)
    return num 

def Guesses(): 
    guess = input("Make a guess: ")

    if len(guess)!=4:
        print("Guess must be a four digit number")
        return Guesses()
    return guess

def hits(guess,num):
    guessChar=list(guess)
    numChar=list(num)
    a = zip(numChar,guessChar)
    b = map(isHit, a)

    return list(b)

def isHit(number):
    return number[0]==number[1]


def Balls(guess, num):
    balls=0 
    for n in range(0,4):
        testNum=num[:n]+num[n+1:]
        for d in testNum:
            if guess[n]==d:
                balls+=1
    return balls 


def RunGuess(guess, num):
    Miss = "Miss"

    s = Strikes(guess, num)
    b = Balls(guess, num)

    if s==0 and b==0:
        return Miss
    elif s==0 and b!=0:
        return "Balls: " + str(b)
    elif s!=0 and b==0:
        return "Hit: " + str(s)
    else:
        return "Balls: "+str(b) + "\n" + "Hit: "+str(s)
def RunGuessHelper(ball,hit,guess,num):
    while len(guess)>0 or len(num)>0:
        for i in range(len(guess)+1):
            for d in range(len(num)+1):
                guess_dig = guess[i]
                num_dig = num[d]
                print("num: "+num)
                print("i = "+str(i) + "\nguess_dig= "+guess_dig+"\nnum_dig= "+num_dig)

                if guess_dig == num_dig and i == d:
                    hit += 1
                    return RunGuessHelper(ball,hit,guess[i+1:],num[:d]+num[d+1:])
                elif guess_dig == num_dig and i != d:
                    ball += 1
                    return RunGuessHelper(ball,hit,guess[i+1:],num[:d]+num[d+1:])
    return (ball,hit)
 
def RunGuess2(guess, num):
   (ball,hit) =RunGuessHelper(0,0,guess,num)

   if ball==0 and hit==0:
        return "Miss"
   if ball==0:
       return "Hits: "+str(hit)
   elif hit==0:
       return "Balls: "+str(ball)
   else:
       return "Balls: "+str(ball)+"\nHits: "+str(hit)


def main(num,count):
    guess=Guesses()
    if guess == num:
        return "Congratulations, you figured out the number in "\
                +str(count)+" guesse(s)!"
    else:
        print(RunGuess2(guess,num))
        print("_____"+"Guess "+str(count)+"_____")
        print("-------------------------------------------")
        count+=1
        return main(num,count)

    print(RunGuess2(guess,num))


num = CreateNumber()
#print("Goal \nTry to guess a randomly generated 4-digit number. After each\
#guess, the player will recieve hints, guiding them to the correct answer. \n\nHow\
# to Play \n--Enter a 4-digit number guess \n--You will recieve a hint based on the\
#guess you submit containing balls, hits, or a miss. \n--A ball means a digit in\
#your guess is also a digit in the number, but it is in the wrong spot. \n--A hit\
# means a digit in your guess is also a digit in the number and it is in the\
#correct spot. \n--A miss means that none of the digits guessed are in the correct\
#number \n \nThe number of guesses is being counted, try and guess the number in\
#the least number of guesses! \nGood Luck :)\n") 
#print(main(num,1))

print(hits("1234","1564"))





