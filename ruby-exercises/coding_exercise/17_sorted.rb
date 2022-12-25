# frozen_string_literal: true

print 'Enter numbers: '
arr = gets.chomp.split(' ').map(&:to_f)

def sorted?(arr)
  return 'yes, ascending' if arr == arr.sort
  return 'yes, descending' if arr == arr.sort.reverse
  return 'no' if arr != arr.sort && arr != arr.sort.reverse
end

puts sorted?(arr)
