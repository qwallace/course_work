

arr = ['a', 'b', 'c', 'd']

arr.each do |element|
  puts "Hey its #{element}"
end

# Can also use

arr.each { |element| puts element }

h = {
  title: 'Hello',
  artist: 'Lionel Richie',
  released: 1983
 }

 h.each do |key, value|
  puts value
end

# Can also use

h.each { |key, value| puts value }