# frozen_string_literal: true

contact_data = [
  ['john@email.com', '123 Main st.', '555-123-4567'],
  ['avion@email', '484 Not Found Dr.', '123-234-3454']
]

contacts = { 'John Cruz' => {}, 'Avion School' => {} }

contacts['John Cruz'] = contact_data[0]
contacts['Avion School'] = contact_data[1]

puts contacts
