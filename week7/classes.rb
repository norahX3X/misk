
# class Vehicle 
#     def start
#         puts "Engine is on!"
#     end
#     def move 
#         return "Here we go" 
#     end 
# end 
# class SpaceShip < Vehicle
#     def move
#         puts super + "Up up and away!"
#     end 
# end 

# class Car < Vehicle
#     def move
#         puts super + "Vroom!"
#     end 
# end 

# SpaceShip.new.move


# class Animal 
#     def sound
#      "sounds makes"
#     end
#    end
   
#    class Bird < Animal
#     def sound
#      puts super + " Tweets" 
#     end
#    end
   
#    class Lion < Animal
#     def sound
#       puts super + "Roar"
#     end
#    end
   
#    animal = Animal.new
#    animal.sound
#    bird = Bird.new
#    bird.sound
#    lion = Lion.new
#    lion.sound


# # class Car 
# #     def initialize (name, model, distance, fuel)
# #         @name =name
# #         @model=model
# #         @distance = distance
# #         @fuel = fuel
# #     end


# #     def self.cartype
# #         puts "Toyota"
# #     end

# #     def model #getter method
# #         @model
# #     end

# #     def models(model) #setter method 
# #     @model = model
# #     end 

# #     def drive
# #         # if distance == 20
# #         if @fuel==0
# #             puts "you have to stop at patrol station"
# #         else
# #             @distance=@distance+20
# #             @fuel= @fuel-1
# #             puts "go drive your distance is #{@distance} km and your fuel is #{@fuel}"
# #         end
# #     end

# # end
# # car = Car.new('Tesla', 'X', 0 , 1)

# # car.drive

# # Car.cartype
# # class Song
# #     def initialize(song_list)
# #       @song_list = song_list
# #     end
  
# #     def shufle()
# #        array= @song_list.shuffle
# #        $result ="Playlist \n --------------------------- \n"
# #        array.each{|song| 
# #         $result = $result + song.keys[0].to_s + "  " + song.values[0] + "\n"
# #        }
# #     puts $result
# #     #    p array

# #         # while test
            
# #         # end
  
# #     end
# #   end

# #   song =  Song.new ([
# #     {:vagabond => "2:50"},
# #     {:sunflower => "2:30"},
# #     {:thunder => "2:20"}
# #   ]
# #  )
# # song.shufle()
# # #   Playlist 
# # # ---------------------------
# # # Song Name 1    2:32
# # # Song Name 2    2:32
# # # ...

# class TVShow 
#     def roll_credits
#         puts "- - - - - -"
#     end
# end

# class FamilyFeud < TVShow
#     def fast_money
#          puts "$$$$$$$$"
#     end 
# end 
# steve_harvey_family_feud = FamilyFeud.new
# steve_harvey_family_feud.fast_money
# steve_harvey_family_feud.roll_credits

# class Shape
#     attr_reader :num_sides 
#     attr_accessor  :side_length , :color


#     def initialize (num_sides, side_length)
#         @num_sides = num_sides
#         @side_length = side_length
#         # @color
#     end


#     def color=(color)
#         @color = color
#     end 

#     def calculate_area
#         area = @num_sides * @side_length * @side_length / (4 * Math.tan(Math::PI/@num_sides))
#         return area.round(2) 
#     end 
# end


# class Rectangle < Shape

# end 

# class Square < Rectangle
#     def initialize (side_length)
#        super(4,side_length)
#     end

# end 


# p Shape.new(4, 5).calculate_area
# p Rectangle.new(3, 4).calculate_area
# p Square.new(3).calculate_area

require './funny.rb'

class WDI4
    include Funny
end


puts WDI4.new.says("Nora")
puts WDI4.new.says("Sara")

