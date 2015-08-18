class StarsController < ApplicationController

  def index

    stars = Star.all

    render json: stars.to_json, status: 200
    # Shorthand way of writing :json => and :status => see create for full syntax

  end

  def create

    star = Star.new(star_params)

    if star.save
      render json: { star_count: star.dish.star_count }
      # render :json => star.to_json, :status => 201
    else
      render :json => { message: 'Failed'}.to_json
    end

  end

  def star_params
    params.require(:star).permit(:dish_id)
    # need to add 'star' to the data in ajax call
    # eg data: { 'star': { 'dish_id': id}}

  end

  # def count
  #
  #   stars = Star.where dish_id: params[:id]
  #
  #   star_count = stars.count
  #
  #   render json: star_count.to_json, status: 200
  #
  # end




end
