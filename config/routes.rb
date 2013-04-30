Bucketlist::Application.routes.draw do
  
  resources :comments, :only => :create
  resources :todo_items, :only => [:index, :show, :create]
  resources :destinations, :only => :index

  root :to => 'destinations#index'
end
