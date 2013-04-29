ENV["RAILS_ENV"] = "test"
require File.expand_path('../../config/environment', __FILE__)
require 'rails/test_help'
require 'shoulda'

require 'database_cleaner'



class ActiveSupport::TestCase
  
  setup do 
  	DatabaseCleaner.strategy = :truncation
  	DatabaseCleaner.start
  end
  	
  teardown do   
  	DatabaseCleaner.clean
  end

end
