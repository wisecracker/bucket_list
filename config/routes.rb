Bucketlist::Application.routes.draw do
  
  resources :comments, :only => :create
  resources :destinations, :only => :index

  resources :todo_items, :only => [:index, :show, :create] do
  	member do
  		post :like
  	end
  end

  root :to => 'destinations#index'
end
