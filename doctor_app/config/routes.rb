Rails.application.routes.draw do
  resource :appointment
  resource :patient
  resource :doctor
  root 'appointment#index'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
