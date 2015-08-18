class CreateStars < ActiveRecord::Migration
  def change
    create_table :stars do |t|
      t.references :dish, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
