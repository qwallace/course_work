
require 'pry'
require 'sinatra'
require 'sinatra/reloader'

get '/' do

  @total = 1 + 1
  erb :index

end

get '/search' do

  erb :search

end

get '/magic' do
  erb "Oh! You want #{ params[:search_string] }"
end