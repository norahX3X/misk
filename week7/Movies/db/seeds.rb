# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Actor.destroy_all
actor = Actor.create(name: "Hadeel", image: "https://images.unsplash.com/photo-1546174727-28256231eccd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1502&q=80", dob: "1996-04-08")

Director.destroy_all
director = Director.create(name: "Sara", image: "https://images.unsplash.com/photo-1546174727-28256231eccd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1502&q=80")



Movie.destroy_all
Movie.create(name: "SuperHeroes",  actor_id: actor.id , director_id: director.id)

