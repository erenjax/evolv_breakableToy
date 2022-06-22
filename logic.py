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


def Strikes(guess, num): 
    strikes = 0 
    for i in range(0,4):
        if guess[i]==num[i]:
            strikes+=1
    return strikes



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

def main(num,count):
    guess=Guesses()
    if guess == num:
        return "Congratulations, you figured out the number in "\
                +str(count)+" guesse(s)!"
    else:
        print("------------------------------------")
        print("Turn: "+str(count)+"\n=====================")
        print(RunGuess(guess,num))
        print("------------------------------------")
        count+=1
        return main(num,count)

    print(RunGuess(guess,num))


num = CreateNumber()
print("Goal \nTry to guess a randomly generated 4-digit number. After each\
guess, the player will recieve hints, guiding them to the correct answer. \n\nHow\
 to Play \n--Enter a 4-digit number guess \n--You will recieve a hint based on the\
guess you submit containing balls, hits, or a miss. \n--A ball means a digit in\
your guess is also a digit in the number, but it is in the wrong spot. \n--A hit\
 means a digit in your guess is also a digit in the number and it is in the\
correct spot. \n--A miss means that none of the digits guessed are in the correct\
number \n \nThe number of guesses is being counted, try and guess the number in\
the least number of guesses! \nGood Luck :)\n") 
print(main(num,1))






