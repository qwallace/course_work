     
require 'sinatra'
require 'sinatra/reloader'
require 'yahoofinance'

require 'pry'

get '/' do

  @stock_name = params[:stock_name]

  if @stock_name && !@stock_name.empty?

    result = YahooFinance::get_quotes(YahooFinance::StandardQuote, @stock_name)

    @price = result[@stock_name].lastTrade

  end

  erb :index

end

get '/stock/:stock' do

  # erb :stock

  "This is the stock: #{ params[:stock]}"

end

# get '/calc/multiply/:num1/:num2' do

#   "#{ params[:num1] } x #{ params[:num2] } = #{ params[:num1].to_i * params[:num2].to_i }"

# end




