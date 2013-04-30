class TodoItemsController < ApplicationController


	def index
		@todo_items = TodoItem.all
	end

	def show
		@todo_item = TodoItem.find(params[:id])
	end

	def create
		@todo_item = TodoItem.new( :name => params[:todo_item][:name],
														   :completed => params[:todo_item][:completed] )
		@todo_item.save!
		render @todo_item
	end

end
