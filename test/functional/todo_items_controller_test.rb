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
	end

end
