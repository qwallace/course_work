
puts "this is bottle number 1"
puts "this is bottle number 2"
puts "this is bottle number 3"

number = 0

while number < 5

  puts "this is bottle" + number.to_s
  number = number + 1 
  # or you could use: numbr += 1
  
end

3.times do
  puts "Beetlejuice"
end

dumplings_devoured = 0

begin
  
  puts "eat dumplings"
  dumplings_devoured += 1
  
end while dumplings_devoured < 50

number = 0

until number > 5
  puts "This is bottle #{number}" # Double quotes because interpolation 
  number += 1
end

while !bank_account.empty?
  puts 'Party on'  
end

until bank_account.empty?
  puts 'Party on'
end

1.upto(3) do
  puts 'Beetlejuice'
end

3.downto(1) do
  puts 'Beetlejuice'
end


