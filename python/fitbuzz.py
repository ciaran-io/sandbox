# if the number is divisible by 3 or 5 = FizzBuzz
# if the number is divisible by 3  = Fizz
# if the number is divisible by 5  = Buzz
# else print number

number = int(input("Please enter a number:"))

def is_divisible_num():
    if number % 3 == 0 and number% 5 == 0:
        print('FizzBuzz')
    elif number % 3 == 0:
        print('Fizz')
    elif number % 5 == 0:
        print('Buzz')
    else:
        print(number)

is_divisible_num()
    



