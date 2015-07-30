require 'pry'

# hero - fishy fish

class Hero
  attr_accessor :pocket # creates getter and setter method for the class

  def initialize(name)
    @name = name
    @pocket = []
  end

  def name # getter method for name
    @name
  end

  def name=(new_name) # setter method for name
    @name = new_name
  end

end

class Item
end

# villian - sharky shark

class Shark
  # attr_reader :health, :name # getter shortcut
  # attr_writer :health, :name # setter shortcut
  attr_accessor :health, :name # read & write

  def initialize(name)
    @name = name
    @health = 5000
  end

  # stock getter - reader
  # def health
  #   @health
  # end

  # stock setting - writing
  # def health=(new_health)
  #   @health =  new_health
  # end

end


binding.pry