class MoviesController < ApplicationController
  def index
    @movies = Movie.all
  end
  def new
    @movie = Movie.new
  end

  def create
    movie = Movie.create(movie_params)
    redirect_to movies_path
  end

  def edit
  end

  def show
    @movie = Movie.find(params[:id])
  end

  private
  def movie_params
    params.require(:movie).permit(:name, :actor_id, :director_id)
  end
end
