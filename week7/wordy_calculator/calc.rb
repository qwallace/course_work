require 'pry'

class Calculator

  def initialize(string)
    @string = string
  end

  def calculate
    matches = /(\d+)\s?(\w+)\s?(\d+)/.match(@string)
    # binding.pry
    @num1 = matches[1].to_i
    @num2 = matches[3].to_i
    @action = matches[2]

    if @action == "plus"
      return plus(@num1, @num2)
    elsif @action == "subtract" #|| "minus"
      return subtract(@num1, @num2)
    elsif @action == "multiply" #|| "times"
      return multiply(@num1, @num2)
    elsif @action == "divide"
      return divide(@num1, @num2)
    else
      puts "Please type something I understand"
    end

  end

  def plus(num1, num2)
    num1 + num2
  end

  def subtract(num1, num2)
    num1 - num2
  end

  def multiply(num1, num2)
    return num1 * num2
  end

  def divide(num1, num2)
    return num1 / num2
  end

end

# binding.pry
