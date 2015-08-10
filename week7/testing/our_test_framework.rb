
# Take an array as argument
# Multiply the numbers in the array
# Return the integer product of numbers

# if Calculator.multiply([2, 3, 4]) == 24
#   puts 'Method works'
# else
#   puts 'Method failed'
# end

# *** This is the simple framework for testing ***
def test(message, expected, actual)
  if expected == actual
    puts "Pass - #{message}"
  else
    puts "Fail - #{message}"
  end
end

test "Product of 2, 3, 4 is 24", 24, Calculator.multiply([2, 3, 4])
test "Product of 0, 5 is 0", 0, Calculator.multiply([0, 5])
test "Pass in an empty array should return 0", 0, Calculator.multiply([])