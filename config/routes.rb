Rails.application.routes.draw do
 
  
  resources :users
  root 'home#index'
  get 'navy/navy'
  get  'army/army'
  get '*path', to: 'home#index'

  resources :events do
    resources :comments
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
