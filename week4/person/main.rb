
require 'pry'

require_relative 'person'

# class Person
#   attr_accessor :name, :age, :gender

#   def initialize(name, age, gender)
#     @name = name
#     @age = age
#     @gender = gender
#   end

#   def to_s
#     "#{@name} is a #{@age} year old #{@gender}"
#   end

# end

# binding.pry

# db = File.new('database.txt', 'a+') # creates new file for db and open and appends if it already exists

File.open('database.txt', 'a+') do |file| # creates file or opens and appends data

  print 'Input person and save to a file (y/n)'
  response = gets.chomp.downcase

  while response == 'y'
    print 'Enter name, age, gender: '
    response = gets.chomp

    file.puts(response) # puts data to the db (eg file)

    # db.puts(response) # db.puts(gets.chomp) and remove response = ...

    print 'Input person and save to a file (y/n)'
    response = gets.chomp.downcase
  end

end # closes the db file

# db.close # closes file 


# File.foreach('database.txt') do |line| # Goes through each line of the db

#   puts line # puts line to console

# end

# Sets up an array and retrieves the person instances and stores them in an array
# so you can access them in the file.

people = []

File.open('database.txt', 'r') do |file|
  file.each do |line|
    data = line.split(',')
    person = Person.new(data[0], data[1], data[2])
    people << person
  end
end


binding.pry
