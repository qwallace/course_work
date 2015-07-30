
require 'pry'

class Coffee

  def initialize(type, size, extras, name)
    @type = type
    @size = size
    @extras = extras
    @name = name
  end

  def print_order
    puts "Order for #{@name}, #{@size} #{@type}, with #{@extras}" 
  end

# Incomplete name_mash method for Starbucking the name

  def name_mash
    letters = ['B', 'T', 'K', 'F']
    new_name = @name.split('')
    new_name.shift
    new_name = new_name.unshift(letters.sample).join('')
    puts new_name
  end

end

binding.pry