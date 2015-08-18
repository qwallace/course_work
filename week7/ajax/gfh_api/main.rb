require 'sinatra'
require 'sinatra/reloader'

require_relative 'database_config'
require_relative 'dish'

after do
  ActiveRecord::Base.connection.close
end

get '/dishes.json' do
  content_type :json
  response.headers['Access-Control-Allow-Origin'] = '*'
  @dishes = Dish.all
  @dishes.to_json
end
