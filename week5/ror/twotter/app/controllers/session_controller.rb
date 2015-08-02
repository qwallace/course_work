class SessionController < ApplicationController

  def new

  end

  def create

    # user = User.where(email: params[:email]).first

    user = User.find_by(email: params[:email])

    if user && user.authenticate(params[:password])
      # go somewhere
      session[:user_id] = user.id
      redirect_to '/posts'
    else
      # reject send back to form
      render :new
    end


  end

  def destroy

    session[:user_id] = nil
    redirect_to '/login'

  end


end