
require 'pry'

days_of_the_week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

# Other ways of making an array

days_of_the_week = %w{Monday Tuesday Wednesday Thursday Friday Saturday Sunday} # Can use | or nothing instead of {}

days_of_the_week.pop
days_of_the_week.unshift('Sunday')

# days_of_the_week.unshift(days_of_the_week.pop)

puts days_of_the_week

# Programmers print

p days_of_the_week

new_days_of_the_week = [['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], ['Saturday', 'Sunday']]

# new_days_of_the_week =[%w{Monday Tuesday Wednesday Thursday Friday}, w%{Saturday Sunday}]

new_days_of_the_week.pop
new_days_of_the_week[0].sort

# or using flatten to create a shallow array

new_days_of_the_week.pop
new_days_of_the_week.flatten.sort

# If you use ! it changes the original not a copy

put new_days_of_the_week

binding.pry