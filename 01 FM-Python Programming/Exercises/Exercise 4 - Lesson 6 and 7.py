# Question 1: Using a for loop with a list

# TODO: Create a list of fruits
fruitytooty=["Mango","Orange","Strawbery","Peach","Banana","Date","Pear","Apple"]
# TODO: Use a for loop to print each fruit in the list
for i in fruitytooty:
    print(i)
print("Task 1 done!")
#-------------------------------------------------------------------------
# Question 2: Using a while loop for countdown

# TODO: Use a while loop to create a countdown from 5 to 1
counter=5
while counter >0:
    print(counter)
    counter-=1
print("Task 2 done!")
#-------------------------------------------------------------------------
# Question 3: Using a for loop with range()

# TODO: Use a for loop to print the first 10 square numbers
for i in range(1,11):
    print(i**2)
print("Task 3 done!")
#-------------------------------------------------------------------------

# Question 4: Using the random module

# TODO: Import the random module
import random
# TODO: Create a list of colors
colourme=["Red","Blue","Green","Yellow","Orange","White","Black","Purple","Pink"]
# TODO: Use a for loop to select and print 3 random colors from the list 
y=8
for i in range(3):
    x=random.randint(0, y)
    z=colourme[x]
    print(z)
    colourme.remove(z)
    y-=1
print("Task 4 done!")    
#-------------------------------------------------------------------------
# Question 5: Creating and using a custom module

# TODO: Create a new file named 'math_operations.py' with the following content:
"""
def add(a, b):
    return a + b

def subtract(a, b):
    return a - b

def multiply(a, b):
    return a * b

def divide(a, b):
    if b != 0:
        return a / b
    else:
        return "Error: Division by zero"
"""

# TODO: Import the custom module and use its functions
import math_operations as math

# TODO: Use a while loop to create a simple calculator
counter=1
while counter>0:
    def cont():
        a=float(input("First Number?:"))
        x=input("add, subtract, multiply or divide:").lower()
        b=float(input("Second Number?:"))
        if x=="add":
            print("Answer:",math.add(a,b))
        elif x=="subtract":
            print("Answer:",math.subtract(a,b))
        elif x=="multiply":
            print("Answer:",math.multiply(a,b))
        elif x=="divide":
            print("Answer:",math.divide(a,b))
    y=input("Want to do a calculation? Yes/No?:").lower()
    if y=="yes":
        cont()
    elif y=="no":
        counter-=1
        print("Exiting Calculator.")
    else:
        print("That is not a correct input!")
print("Task 5 done!")  
    
    
        