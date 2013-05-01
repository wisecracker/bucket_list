class Destination < ActiveRecord::Base
  attr_accessible :name, :photo_url, :longitude, :latitude

  has_many :todo_items

end
