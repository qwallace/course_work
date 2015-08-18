require 'active_record'
require 'pry'

ActiveRecord::Base.logger = Logger.new(STDERR)

require_relative 'database_config'
require_relative 'dish'

binding.pry
