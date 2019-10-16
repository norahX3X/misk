class CreateMovies < ActiveRecord::Migration[5.2]
  def change
    create_table :movies do |t|
      t.string :name
      t.string :director
      t.integer :actor_id

      t.timestamps
    end
  end
end
