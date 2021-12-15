class CreateEvents < ActiveRecord::Migration[6.1]
  def change
    create_table :events do |t|
      t.string :city
      t.string :title
      t.string :link

      t.timestamps
    end
  end
end
