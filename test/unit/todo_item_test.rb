require 'test_helper'

class TodoItemTest < ActiveSupport::TestCase
 
 context "A todo item" do
 	setup do
 		@destination = Destination.create(:name => "New York")
 		@todo_item = TodoItem.create(:name => "visit Empire State Building", :location => "New York City", :destination_id => @destination.id)
 	end

 	should "put values in the latitude and longitude" do
		assert_not_nil @todo_item.latitude
		assert_not_nil @todo_item.longitude
 	end

 	should "use a better input for geocoding" do
 		assert_equal "visit Empire State Building New York City", @todo_item.my_geo_method
 	end

 end




end
