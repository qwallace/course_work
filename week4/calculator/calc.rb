
require 'pry'


# puts 'Choose add, subtract, multiply or divide'

puts ' ------------------------------------- '
puts '| Choose an option:                   |'
puts '|                                     |'
puts '| + - x / and hit enter               |'
puts ' ------------------------------------- '
action = gets.chomp

until action == 'quit'

  puts 'Please enter a number'
  num1 = gets.chomp.to_i
  puts 'Please enter another number'
  num2 = gets.chomp.to_i
  
  if action == '+'
    puts num1 + num2
  elsif action == '-'
    puts num1 - num2
  elsif action == 'x'
    puts num1 * num2
  elsif action == '/'
    puts num1 / num2
  else
    puts 'Please enter a valid option'
  end

  puts ' ------------------------------------- '
  puts '| Choose another option:              |'
  puts '|                                     |'
  puts '| + - x / and hit enter               |'
  puts '|                                     |'
  puts '| or                                  |'
  puts '|                                     |'
  puts '| type quit and hit enter             |'
  puts ' ------------------------------------- '
  action = gets.chomp

end


# puts 'This is the calculator'

# puts "What type of calculation would you like to do?"

# puts "Choose from add, subtract, multiply or divide"
# type = gets.chomp

# puts 'Please enter a number'
# number_1 = gets.chomp

# puts 'Please enter another number'
# number_2



# puts 'Choose add, subtract, multiply or divide'
# action = gets.chomp

# while action != 'quit'
#   puts 'Choose add, subtract, multiply or divide'
#   type
# end

# def menu 
#   puts 'Choose from add, subtract, multiply or divide or use "q" to quit.'
#   type = gets.chomp
#   while type != 'q'
#     puts 'Please enter a number'
#     num1 = gets.chomp.to_i
#     puts 'Please enter another number'
#     num2 = gets.chomp.to_i
#     calculator(type, num1, num2)
#     def calculator(type, num1, num2)

#       if type == 'add'
#         puts num1 + num2
#       elsif type == 'subtract'
#         puts num1 - num2
#       elsif type == 'multiply'
#         puts num1 * num2
#       elsif type == 'divide'
#         puts num1 / num2
#       else
#         puts 'Pleae enter a valid option'
#       end

#     end
#   end
  
# end


# binding.pry




# Using switch

# case type
# when 'add'
#   puts 'Please enter a number'
#   num1 = gets.chomp.to_i
#   puts 'Please enter another number'
#   num2 = gets.chomp.to_i
#   puts num1 + num2
# when 'subtract'
#   puts 'Please enter a number'
#   num1 = gets.chomp.to_i
#   puts 'Please enter another number'
#   num2 = gets.chomp.to_i
#   puts num1 - num2
# when 'multiply'
#   puts 'Please enter a number'
#   num1 = gets.chomp.to_i
#   puts 'Please enter another number'
#   num2 = gets.chomp.to_i
#   puts num1 * num2
# when 'divide'
#   puts 'Please enter a number'
#   num1 = gets.chomp.to_i
#   puts 'Please enter another number'
#   num2 = gets.chomp.to_i
#   puts num1 / num2
# else
#   puts 'Please enter a valid command'
# end


# def add(num1, num2)
#   # insert code
#   puts num1 + num2
# end

# def subtract ()
#   # insert code
# end

# def multiply()
#   # insert code
# end

# def divide()
#   # insert code
# end

# add 5, 4
