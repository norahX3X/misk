class AddCoulmnsToHobbies < ActiveRecord::Migration[5.2]
  def change
    add_column :hobbies, :name, :string
    add_column :hobbies, :image, :string
    add_column :hobbies, :cat, :string
    add_column :hobbies, :about, :string
  end
end
