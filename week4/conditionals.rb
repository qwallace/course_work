
if 2 + 2 == 5
  puts 'The world has gone mad!'
end

if ((2 * 2) == 5)
  puts 'The world has gone mad!'
else
  puts 'All good'
end

person = 'Matty'

if person != 'Wally'
  puts "Where's Wally?"
end

puts "Where's Wally?" unless person == "Wally"

puts "Where's Wally?" if person != "Wally"

# Switch / case 

grade = 'B'

case grade
when 'A'
  puts 'Well done, mega nerd!'
when 'B'
  puts 'Well done, almost there'
when 'C'
  puts 'Almost there'
else
  puts 'Fail'
end

if grade == 'A'
  puts 'Well done, mega nerd!'
elsif grade == 'B'
  puts 'Well done, almost there'
elsif grade == 'C'
  puts 'Almost there'
else
  puts 'Fail'
end
  
  