 require 'pry'

 song1 = {
  title: 'Hello',
  artist: 'Lionel Richie',
  released: 1983
 }

 # Original hash syntax of Ruby

 song2 = {
  :title => "Nothing's gonna change my love for you",
  :artist => 'Glen Medeiros',
  :released => 1986
 }

song3 = {
  'title' => 'A whole new world',
  'artist' => 'Disney',
  'released' => 1992
}

classics = [song1, song2, song3]

# Another way of doing it, but not any more useful
# than array in this context

song4 = {
  0 => 'hello',
  1 => 'world',
  2 => '!'
}

binding.pry
