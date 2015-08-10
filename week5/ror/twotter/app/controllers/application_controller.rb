class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  def logged_in?
    !!current_user # !! changes it to a boolean
  end
  helper_method :logged_in?

  def current_user
    User.find_by(id: session[:user_id])
  end
  helper_method :current_user # makes this method available in views otherwise only available in controllers

  def authenticate
    flash[:info] = 'Please sign in'
    redirect_to '/login' unlesss logged_in?
  end


end
