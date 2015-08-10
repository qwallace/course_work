require_relative 'leap'
require 'minitest/autorun'

# Optional to show test results like spec
require 'minitest/reporters'
MiniTest::Reporters.use! MiniTest::Reporters::SpecReporter.new

describe LeapYear, "minitest syntas reference" do


  describe "Is 1997 a leap year" do
    it "1997 is not a leap year" do
      LeapYear.leap_year?(1997).must_equal false
    end
  end

  describe "Is 1900 a leap year" do
    it "1900 is not a leap year" do
      LeapYear.leap_year?(1900).must_equal false
    end
  end

  describe "Is 1996 a leap year" do
    it "1996 is a leap year" do
      LeapYear.leap_year?(1996).must_equal true
    end
  end

  describe "Is 2000 a leap year" do
    it "2000 is a leap year" do
      LeapYear.leap_year?(2000).must_equal true
    end
  end

  describe "Is 2004 a leap year" do
    it "2004 is a leap year" do
      LeapYear.leap_year?(2004).must_equal true
    end
  end

end