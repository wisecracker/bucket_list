class TodoItem < ActiveRecord::Base
  attr_accessible :completed, :name, :location, :longitude, :latitude, :destination_id

  has_many :comments
  belongs_to :destination

  validates :location, :presence => true
  
  geocoded_by :my_geo_method 
  after_validation :geocode

 

  def my_geo_method
  "#{self.name} #{self.location}" 
  end
end
