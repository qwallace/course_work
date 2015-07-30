
# Air Conditioning

# - a/c functionality, by asking if the A/C is functional, and what
# temperature they wish it was.

# - If the airconditioner is functional and the current temperature is
# above the the desired temperature... display "A/C COOLING"

# - If the airconditioner is non-functional and the current temperature is
# above the the desired temperature... display "Fix the A/C now!  It's hot!"

# - If the airconditioner is non-functional and the current temperature is below
# the the desired temperature... display "Fix the A/C whenever you have the chance...
#  It's cool..."

require 'pry'

def ac
  puts 'Is the power on or off?'
  power = gets.chomp
  if power == 'off'
    puts 'Turn power on please'
    binding.pry
  elsif power == 'on'
    puts 'What temperature is it?'
    user_input = gets.chomp.to_i
    binding.pry
    if user_input >= 22 && user_input <= 24
      puts 'Temperature just right'
    elsif user_input < 22
      puts 'A/C heating'
    else
      puts 'A/C cooling'
    end
  else
    puts 'Please enter something I understand'
  end
end

# def ac
#   puts 'Is the AC working?'
#   working = gets.chomp
#   puts 'What temperature do you want?'
#   temperature = gets.chomp.to_i
#   if working == 'yes' && temperature 
# end

ac