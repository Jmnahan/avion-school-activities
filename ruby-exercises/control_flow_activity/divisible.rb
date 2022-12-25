# frozen_string_literal: true

arr = [6, 3, 1, 8, 4, 2, 10, 65, 102]
new_arr = []
arr.each do |item|
  new_arr.push(item) if (item % 2).zero?
end

puts new_arr.inspect
