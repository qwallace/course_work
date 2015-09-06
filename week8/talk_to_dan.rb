require 'pry'

# Daniel
# Daniel is a lackadaisical teenager. In conversation, his responses are very limited.
# He answers 'Sure.' if you ask him a question.
# He answers 'Whatever.' if you tell him something.
# He answers 'Woah, chill out!' if you yell at him (ALL CAPS).
# He says 'Fine. Be that way!' if you address him without actually saying anything.
# Write Daniel so that you can have an interactive conversation with him.
## Hints
# `gets`, _get string_ is the opposite of `puts` _put string_.
# Notice that when you type "Something" and then hit enter, you get the string
# "Something\n"
#
# loop do
#   # talk to Daniel here
# end


def dan

  puts 'What?'

  input = gets.chomp

  until input == 'exit'

    if input == input.upcase
      puts "Woah, chill out!"
    elsif input.include? "?"
      puts "Sure..."
    else
      puts "Whatever..."
    end

    input = gets.chomp

  end
  
end

binding.pry
