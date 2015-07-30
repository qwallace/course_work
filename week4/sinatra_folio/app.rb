require 'pry'
require 'sinatra'
require 'sinatra/reloader'

get '/' do

  erb :index

end

get '/home' do

  erb :index

end

get '/about' do

  erb :about

end

get '/contact' do

  erb :contact

end

# get '/magic' do
#   erb "Oh! You want #{ params[:search_string] }"
# end