class DirectorsController < ApplicationController
  def index
    @directors = Director.all

  end

  def show
  end

  def new
  end
end
