require 'test_helper'

class TodoItemsControllerTest < ActionController::TestCase
  
	context "the TodoItem Controller" do
		setup do
			3.times { TodoItem.create }
		end

		context "GET to INDEX" do
			setup do
				get :index
			end

			should "give me a HTTP 200" do
				assert_response :success
			end

			should "give me 3 todo items" do
				assert_equal 3, assigns(:todo_items).length # assigns means that will have @items = something in the controller
				assert_equal TodoItem, assigns(:todo_items).first.class
			end
		end


		context "get to SHOW" do
			setup do
				get :show, :id => 1
			end

			should "give me a HTTP 200" do
				assert_response :success
			end

			should "give me 1 todo item" do
				assert_equal TodoItem.find(1), assigns(:todo_item)
			end
		end


		context "create a new todo item" do
			setup do
				post :create, :todo_item => { :name => "todo item name" }
			end

			should "gives a HTTP 2000" do
				assert_response :success
			end

			should "increase the todo items count" do
				assert_equal 4, TodoItem.count
				assert_equal "todo item name", TodoItem.find(4).name
			end
		end

	end

end
