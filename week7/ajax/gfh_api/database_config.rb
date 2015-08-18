require 'active_record'

options = {
  adapter: 'postgresql',
  database: 'gfh_api'
}

ActiveRecord::Base.establish_connection(options)
