Rails.application.routes.draw do
  
  get 'directors/index'
  get 'directors/show'
  get 'directors/new'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root "actors#index"

  resources :actors

  resources :movies
end
