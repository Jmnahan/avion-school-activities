# frozen_string_literal: true

def gimme(arr)
  given_arr = arr
  sortedArr = given_arr.sort
  index = given_arr.index(sortedArr[1])
end

puts gimme([2, 3, 1])
puts gimme([5, 10, 14])
