require 'pry'

# 1/6 3/10

def sum fraction1, fraction2

  frac1 = /(\d+).(\d+)/.match(fraction1)
  frac2 = /(\d+).(\d+)/.match(fraction2)

  num1 = frac1[1].to_i
  dem1 = frac1[2].to_i

  num2 = frac2[1].to_i
  dem2 = frac2[2].to_i

  numerator = num1 * dem2 + num2 * dem1
  demnominator = dem1 * dem2

  puts numerator
  puts demnominator

  until i 

  end

  # if dem2 > dem1
  #   numerator = num1 * dem2 + num2 * dem2
  #   puts numerator
  # else
  #   numerator = num1 * dem1 + num2 * dem1
  #   puts numerator
  # end
end

binding.pry
