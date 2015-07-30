
puts ' ------------------------------------- '
puts '| Awesome... Maths!                   |'
puts '|                                     |'
puts '| Are you ready?                      |'  
puts '|                                     |'
puts '| Type Y or N and press enter         |'
puts ' ------------------------------------- '
action = gets.chomp

if action == "N"
  return
else
  until action == 'N'

    puts 'Enter a number'
    num1 = gets.chomp.to_i
    puts 'Enter an operator eg + - x /'
    operator = gets.chomp
    puts 'Enter another number'
    num2 = gets.chomp.to_i
  
    if operator == '+'
      puts num1 + num2
    elsif operator == '-'
      puts num1 - num2
    elsif operator == 'x'
      puts num1 * num2
    elsif operator == '/'
      puts num1 / num2
    else
      puts 'Please enter a valid input'
    end

    puts ' ------------------------------------- '
    puts '| Are you ready to go again?          |'  
    puts '|                                     |'
    puts '| Type Y or N and press enter         |'
    puts ' ------------------------------------- '
    action = gets.chomp
  end

end

# ** for exponent
# Math.sqrt(number)