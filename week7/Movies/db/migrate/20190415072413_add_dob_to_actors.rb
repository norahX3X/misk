class AddDobToActors < ActiveRecord::Migration[5.2]
  def change
    add_column :actors, :dob, :date
  end
end
