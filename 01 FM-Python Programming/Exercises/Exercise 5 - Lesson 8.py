# Question 1: Creating and Modifying Lists

# TODO: Create a list of fruits
fru=["Apple","Banana","Orange","Pear"]
# TODO: Add a fruit to the end of the list
fru.append("Pineapple")
# TODO: Insert a fruit at the beginning of the list
fru.insert(0,"Strawberry")
# TODO: Remove a fruit from the list
fru.pop()
# TODO: Print the modified list
print(fru)

#-------------------------------------------------------------------------
# Question 2: List Operations

# TODO: Create a list of numbers from 1 to 5
number=[i for i in range(1,6)]
# TODO: Create a new list with each number squared
square=[i**2 for i in number]
# TODO: Find the sum and average of the original numbers
x=sum(number)
avg=x/len(number)
# TODO: Print the results
print(number)
print(square)
print(x)
print(avg)

#-------------------------------------------------------------------------
# Question 3: Creating and Modifying Dictionaries

# TODO: Create a dictionary of countries and their capitals
cunt={'South Africa':'Pretoria',
'Britain':'London',
'Spain':'Madrid'
}
print(cunt)
# TODO: Add a new country-capital pair
cunt['France']='Paris'
# TODO: Update the capital of an existing country
cunt['South Africa']='Cape Town'
# TODO: Remove a country-capital pair
cunt.pop('Spain')
# TODO: Print the modified dictionary
print(cunt)

#-------------------------------------------------------------------------
# Question 4: Dictionary Operations

# TODO: Create a dictionary of fruit colors
fruit={'Apple':'Red',
       'Orange':'Orange',
       'Pear':'Green'}
# TODO: Print all the fruits (keys)
print(fruit.keys())
# TODO: Print all the colors (values)
print(fruit.values())
# TODO: Print each fruit and its color
for i,j in fruit.items():
    print(f"{i}:{j}")
o=input("Enter a fruit:")
# TODO: Check if a fruit is in the dictionary and print its color
if o in fruit:
    print("Colour is: ",fruit[o])
