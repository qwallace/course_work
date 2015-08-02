class PostsController < ApplicationController

  def index
    @posts = Post.all
  end

  def new

  end

  def create
    Post.create(title: "#{ params[:title] }", body: "#{ params[:body]}")
    redirect_to '/'

  end

  #edit page

  def edit

    @post = Post.find params[:id]

  end

  #update post

  def update

    @post = Post.find params[:id]
    @post.title = params[:title]
    @post.body = params[:body]
    @post.save
    redirect_to '/'

  end

  def destroy
    @post = Post.find params[:id]
    @post.destroy
    redirect_to '/posts'
  end

end