class DishesController < ApplicationController

  def index

    dishes = Dish.all

    # render json: dishes.to_json, status: 200
    # Shorthand way of writing :json => and :status => see create for full syntax

    render json: dishes, methods: :star_count, status: 200

  end

  def create

    dish = Dish.new(dish_params)
    # dish.name = params[:name]
    # dish.image_url = params[:image_url]
    if dish.save
      render :json => dish.to_json, :status => 201
    else
      render :json => { message: 'Failed'}.to_json
    end

  end

  def dish_params
    params.require(:dish).permit(:name, :image_url)
    # need to add 'dish' to the data in ajax call
    # eg data: { 'dish': { 'name': 'xyx', 'image_url': 'http:url.com'}}

  end

end
