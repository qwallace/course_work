
puts "Welcome to the guess number game"

secret_number = "22"

number = ""

while number != secret_number
  print "Guess a number "
  guess = gets.chomp
  number = guess
end

# DT code below uisng pre condition loop

age = 62

puts "Guess a number"
user_guess = gets.chomp.to_i # converst input to an integer
 
while user_guess != guess

  puts 'Guess again'
  user_guess = gets.chomp.to_i
  
end

puts "Well done, the number was 62"

# DT code below uisng post condition loop

begin
  puts "Guess a number"
  users_guess = gets.chomp.to_i
end

# print "What is your surname? "
# surname = gets.chomp

# puts "Your full name is #{firstname} #{surname}"

# print "What is your address? "
# address = gets.chomp

# puts "Your name is #{firstname} #{surname} and you live in #{address}"