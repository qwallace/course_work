require 'rails_helper'

RSpec.describe Dish, :type => :model do

  it "new dish should have a default image_url" do
    dish = Dish.new
    dish.valid?
    expect(dish.image_url).to eq('http://localhost:3000/dish_default.png')
  end

  it "new dish should allow user to pass in image_url" do
    dish = Dish.new(image_url: 'http://www.image.com/image.png')
    dish.save
    expect(dish.image_url).to eq('http://www.image.com/image.png')
  end

  it "dish should have default image even if empty string" do
    dish = Dish.new(image_url: '')
    dish.save
    expect(dish.image_url).to eq('http://localhost:3000/dish_default.png')
  end

end
