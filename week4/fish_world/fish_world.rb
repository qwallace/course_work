
require 'pry'

fish1 = {
  name: 'fishy fish',
  health: 100,
  speed: 5
}

shark = {
  name: 'sharky shark',
  health: 5000,
  speed: 20
}

ocean_world = []

ocean_world << fish1 << shark

def move_fish(fish)
  # moves the fish
end

def move_shark(shark)
  # moves the shark
end

def move_octopus(octopus)
  # moves the octopus
end

# class Fish 
#   def initialize
#     @name = 'fishy fish' #instance variable
#     @health = 100
#     @speed = 5
#   end
# end

# fish2 = Fish.new # creating a new fish object

class Fish

  def initialize(name, health, speed)
    @name = name
    @health = health
    @speed = speed
  end

  def sleep
    puts "sleeping"
  end

  def change_name(new_name)
    @name = new_name
  end

end

binding.pry