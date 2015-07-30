
def defuse_bomb
  puts 'remove cover'
  puts 'first cut the red wire'
  puts 'then cut the blue wire'
end

defuse_bomb # or can use: defuse_bomb()

area = 3 * 4

area = 10 * 4

def area(length, width) # or can use: def area length, width
  return length * width
end

area(10, 4) # or can use: area 10, 4

# To print out

puts(area 10, 4)

def do_something(time_left, length, width)
  if time_left > 60
    puts 'remove cover'
    puts 'first cut the red wire'
    puts 'then cut the blue wire'
  else
    puts 'run'
  end

  return 'game over'

  length * width # never happen due to return
end

do_something(12, 3, 4)

def h1(body)
  return "<h1>#{body}</h1>"
end

puts h1 'methods are awesome'
