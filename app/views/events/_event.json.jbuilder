json.extract! event, :id, :city, :title, :link, :created_at, :updated_at
json.url event_url(event, format: :json)
