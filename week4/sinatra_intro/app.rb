require 'sinatra'
require 'sinatra/reloader'

get '/' do

  "<html><body><h1>Fly me to the moon #{Time.now}</h1></body></html>"

end

get '/contact' do

  "Please give me money"

end

get '/about' do

  erb :index

end

get '/hello/:name' do

  "Hello there #{ params[:name] }"

end

get '/calc/multiply/:num1/:num2' do

  "#{ params[:num1] } x #{ params[:num2] } = #{ params[:num1].to_i * params[:num2].to_i }"

end