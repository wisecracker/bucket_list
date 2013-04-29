require 'test_helper'

class TodoItemsControllerTest < ActionController::TestCase
  
	context "the TodoTiem Controller" do
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
				assert_equal 3, assigns(:items).length # assigns means that will have @items = something in the controller
				assert_equal TodoItems, assigns(:items).first.class
			end
		end


		context "get to SHOW" do
			setup do
				get :index, :id => 1
			end

			should "give me a HTTP 200" do
				assert_response :success
			end

			should "give me 1 todo item" do
				assert_equal TodoItem.find(1), assigns(:item)
			end
		end
	end

end
