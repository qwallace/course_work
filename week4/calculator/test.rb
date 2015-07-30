print "enter the max number:"
max = gets.to_i

#generate a secret number
secret = Random.rand(max + 1)

print "Please enter a guess:"
guess = gets.to_i

while guess != secret
  puts "That's not correct. "
  if guess > secret #too high
    puts "Lower, dumb ass"
  elsif guess < secret #too low
    puts "Higher, dumb ass"
  end

 guess = gets.to_i

end

puts "Winner, winner chicken dinner now GTFOH"