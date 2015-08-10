require_relative 'calc'
require 'minitest/autorun'

# Optional to show test results like spec
require 'minitest/reporters'
MiniTest::Reporters.use! MiniTest::Reporters::SpecReporter.new

class CalcTest < MiniTest::Test

  def test_product_of_0_5_is_0
    assert_equal 0, Calculator.multiply([0, 5])
  end

  def test_empty_array_returns_0
    assert_equal 0, Calculator.multiply([])
  end

  def test_product_of_2_3_4_is24
    assert_equal 24, Calculator.multiply([2,3,4])
  end

end