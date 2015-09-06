Rails.application.routes.draw do

  get '/star_count/:id' => 'stars#count'

  resources :dishes, :only => [:index, :create]

  resources :stars, :only => [:index, :create]

end
