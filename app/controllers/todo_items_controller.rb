class TodoItemsController < ApplicationController


	def index
		@todo_items = TodoItem.all
	end

	def show
		@todo_item = TodoItem.find(params[:id])
	end

end
