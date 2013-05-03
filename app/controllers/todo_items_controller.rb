class TodoItemsController < ApplicationController


	def index
		# @destinations= Destination.all
		@todo_items = TodoItem.all
	end

	def show
		@todo_item = TodoItem.find(params[:id])
	end

	def create
		@todo_item = TodoItem.new(params[:todo_item])
		@todo_item.save!
		render @todo_item
	end

	def like
		Like.create(:user_id => session[:user_id], :todo_item_id => params[:id])
		render :nothing => true
		binding.pry
	end

end


