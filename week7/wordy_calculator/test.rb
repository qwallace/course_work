require 'minitest/autorun'
require "minitest/reporters" # optional
Minitest::Reporters.use! Minitest::Reporters::SpecReporter.new() # optional

require_relative 'calc'

class CalcTest < MiniTest::Test

  def test_calculate_plus
    # skip
    number = Calculator.new("5 plus 4").calculate
    assert_equal 9, number
  end

  def test_calculate_subtract
    number = Calculator.new("5 subtract 4").calculate
    assert_equal 1, number
  end

  def test_calculate_multiply
    number = Calculator.new("5 multiply 4").calculate
    assert_equal 20, number
  end

  def test_calculate_divide
    number = Calculator.new("20 divide 4").calculate
    assert_equal 5, number
  end


end
