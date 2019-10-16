class ActorsController < ApplicationController

# onlouad function!
    def index
        @actors = Actor.all
        # bybug for debuging 
    end 

    # create instance from actor 
    def new 
        @actor = Actor.new
    end
    # save it to database 
    def create 
        actor = Actor.create(actor_params)
        redirect_to  actors_path

    end
    def show
        # find_by to spcify search tearm if its name dat eof what ever  
        @actor = Actor.find(params[:id])
        # redirect_to  actors_path
    end
    #edit come with update function 
    def edit 
        @actor = Actor.find(params[:id])
    end 

    def update 
        actor = Actor.find(params[:id])
        actor.update(actor_params)
        redirect_to  actor
    end 
    def destroy
        actor = Actor.find(params[:id])
        actor.destroy 
        redirect_to  actor

    end


    #  anything under private word is hidden 
    private
    def actor_params
        params.require(:actor).permit(:name, :image, :dob)
    end
end
